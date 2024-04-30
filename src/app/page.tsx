import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const image = await db.query.image.findMany({
    orderBy: (model, {desc}) =>  desc(model.id),
  });
  return (
    <main className="bg-slate-800 h-screen">
      <div className="flex flex-wrap gap-4 p-2">
      </div>
      <div className="container flex items-center justify-center gap-4 px-4 py-16 ">
        {image.map((v, i)=> (
          <div key={i}>
            <div>{v.name}</div>
            <img className="h-40" src={v.url} alt="" />
          </div>
        ))}

      </div>
    </main>
  );
}
