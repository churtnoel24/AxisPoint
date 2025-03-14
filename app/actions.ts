"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export async function HandleSubmission(formData: FormData) {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user) {
        return redirect("/api/auth/register")
    }

    const uploadImage = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!); // Cloudinary upload preset

        const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (!data.secure_url) {
            throw new Error("Image upload failed");
        }

        return data.secure_url; // Return Cloudinary URL
    };

    const title = formData.get('title')
    const content = formData.get('content')
    const image = formData.get("image") as File | null;

    if (!image) {
        throw new Error("No image uploaded");
    }

    const imageUrl = await uploadImage(image); // Upload to Cloudinary

    await prisma.blogPost.create({
        data: {
            title: title as string,
            content: content as string,
            imageUrl: imageUrl, // Store Cloudinary image URL
            authorId: user.id,
            authorImage: user.picture as string,
            authorName: user.given_name as string,
        }
    });


    return redirect("/dashboard");
}