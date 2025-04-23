import { prisma } from "@/app/utils/db";
import { BlogPostCard } from "./BlogPostCard";

export default async function Posts() {
  const data = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard
          key={item.id}
          data={{
            ...item,
            imageUrls: Array.isArray(item.imageUrls)
              ? item.imageUrls
              : [item.imageUrls], // 👈 fixes the type error
          }}
        />
      ))}
    </div>
  );
}
