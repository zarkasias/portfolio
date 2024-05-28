import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const blogTitle = searchParams.get("title");
  const blog = searchParams.get("blog");
  const author = searchParams.get("author");

  try {
    if (!blogTitle || !blog) throw new Error("Title and blog required");
    await sql`INSERT INTO Blog (Title, Blog, Author) VALUES (${blogTitle}, ${blog}, ${author});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const pets = await sql`SELECT * FROM Pets;`;
  return NextResponse.json({ pets }, { status: 200 });
}
