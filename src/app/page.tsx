import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Link from "next/link";
import { db } from "~/server/db";
import { image } from "~/server/db/schema";

export const dynamic = "force-dynamic";

 async function Images() {
  const {userId} = auth()
  // const image = await db.query.image.findMany({
  //   // where: (model) => model.userId === userId,
  //   orderBy: (model, {desc}) =>  desc(model.id),
  // });
  if (userId){
    const images = await db.select().from(image).where(eq(image.userId, userId)).orderBy(desc(image.createdAt))

    return (
      <div className="container flex items-center justify-center gap-4 px-4 py-16 ">
      {images.map ((v, i)=> (
        <div key={i}>
          <div>{v.name}</div>
          <img className="h-40" src={v.url} alt="" />
        </div>
      ))}
  
    </div>
    )
  }

 }

export default async function HomePage() {

  return (
    <main className="bg-slate-800 h-screen">
      <SignedOut> 
        <h1 className="text-5xl text-center py-4 text-slate-200">Please Sign In above</h1>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>

    </main>
  );
}
