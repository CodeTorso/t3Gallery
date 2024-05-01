import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

 async function Images() {
  const image = await db.query.image.findMany({
    orderBy: (model, {desc}) =>  desc(model.id),
  });
  return (
    <div className="container flex items-center justify-center gap-4 px-4 py-16 ">
    {image.map((v, i)=> (
      <div key={i}>
        <div>{v.name}</div>
        <img className="h-40" src={v.url} alt="" />
      </div>
    ))}

  </div>
  )
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
