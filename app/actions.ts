"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export async function HandleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return redirect("/api/auth/register");

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const images = formData.getAll("images") as File[];

  const uploadImage = async (file: File): Promise<string> => {
    const imageForm = new FormData();
    imageForm.append("file", file);
    imageForm.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: imageForm,
      }
    );

    const data = await res.json();
    if (!data.secure_url) throw new Error("Image upload failed");
    return data.secure_url;
  };

  const imageUrls = await Promise.all(images.map(uploadImage));

  await prisma.blogPost.create({
    data: {
      title,
      content,
      imageUrls,
      authorId: user.id,
      authorName: user.given_name!,
      authorImage: user.picture!,
    },
  });

  return redirect("/dashboard");
}
