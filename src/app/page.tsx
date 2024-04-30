import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/07f89e79-31e5-4f4f-8137-e3532f6217ed-fpzk4r.png",
  "https://utfs.io/f/8015c9cc-e4ab-4644-b5e7-59c4f2f957dc-jqrlow.png"
]

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="bg-slate-800 h-screen">
      <div className="flex flex-wrap gap-4 p-2">
        {
          [...mockUrls, ...mockUrls, ...mockUrls, ...mockUrls].map((v, i)=> (
            <div key={i}>
              <img src={v}  className="h-44 rounded-md" />
            </div>
          ))
        }
      </div>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {posts.map((v, i)=> (
          <div key={i}>
            <div>{v.name}</div>
            <div>{`${v.createdAt.getDate()}-${v.createdAt.getMonth()}-${v.createdAt.getFullYear()}`}</div>
          </div>
        ))}

      </div>
    </main>
  );
}
