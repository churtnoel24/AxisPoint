"use client"

import { HandleSubmission } from "@/app/actions";
import { SubmitButton } from "@/components/general/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { useState } from "react";

export default function CreateRoute() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file)); // Show preview
        }
    };

    return (
        <div>
            <Card className="max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>Add Updates</CardTitle>
                    <CardDescription>Add New Updates About AxisPoint</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4" action={HandleSubmission}>
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input name="title" required type="text" placeholder="Title" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Content</Label>
                            <Textarea name="content" required placeholder="Content" />
                        </div>
                        <div className="flex flex-col gap-2 relative w-full h-60">
                            <Label>Upload Image</Label>
                            <Input type="file" accept="image/*" name="image" onChange={handleImageChange} required />
                            {preview && <Image src={preview} alt="Preview" fill />}
                        </div>
                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}