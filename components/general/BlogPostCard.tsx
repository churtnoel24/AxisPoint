"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface IappProps {
    data: {
        id: string;
        title: string;
        content: string;
        imageUrls: string;
        authorId: string;
        authorName: string;
        authorImage: string;
        createdAt: Date;
        updatedAt: Date;
    };
    isAdmin?: boolean; // Add this to check if the user can delete
}

export function BlogPostCard({ data, isAdmin }: IappProps) {
    const [loading, setLoading] = useState(false);

    async function handleDelete(e: React.MouseEvent) {
        e.preventDefault(); // Prevent Link navigation when clicking delete
        setLoading(true);

        const res = await fetch("/api/news/delete", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: data.id }),
        });

        if (res.ok) {
            window.location.reload(); // Refresh after deletion
        } else {
            alert("Failed to delete post");
        }
        setLoading(false);
    }

    return (
        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
            <Link href={`/post/${data.id}`} className="block w-full h-full">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image src={data.imageUrls[0]} alt="Photo" fill className="object-cover transition-transform duration-300 group-hover:scale-105"/>
                </div>
                <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{data.title}</h3>
                    <p className="mb-4 text-sm text-gray-600 line-clamp-2">{data.content}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="relative size-8 overflow-hidden rounded-full">
                                <Image src={data.authorImage} alt={data.authorName} fill className="object-cover" />
                            </div>
                            <p className="text-sm font-medium text-gray-700">{data.authorName}</p>
                        </div>
                        <time className="text-xs text-gray-500">
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            }).format(data.createdAt)}
                        </time>
                    </div>
                </div>
            </Link>

            {/* Show delete button only if the user is an admin */}
            {isAdmin && (
                <button
                    onClick={handleDelete}
                    disabled={loading}
                    className="absolute top-2 right-2 bg-red-500 text-white text-sm px-3 py-1 rounded-md hover:bg-red-600"
                >
                    {loading ? "Deleting..." : "Delete"}
                </button>
            )}
        </div>
    );
}
