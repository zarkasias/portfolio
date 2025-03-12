import { prisma } from "@/server/db/client";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from '@prisma/client';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, sections, tags = [], author = "David Chambers" } = body;

    // Validate input
    if (!title || !sections || !Array.isArray(sections)) {
      return NextResponse.json(
        { error: "Title and valid sections are required." },
        { status: 400 }
      );
    }

    const validSections = sections.filter(
      (section: any) => section.content.trim() !== ""
    );

    if (validSections.length === 0) {
      return NextResponse.json(
        { error: "At least one valid section is required." },
        { status: 400 }
      );
    }

    const post = await prisma.post.create({
      data: {
        title,
        sections: validSections,
        tags,
        author,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Failed to create post:", error);
    return NextResponse.json(
      { error: "Failed to create post." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  const term = searchParams.get("search");
  const tag = searchParams.get("tag");

  if (id) {
    try {
      const post = await prisma.post.findUnique({ where: { id } });
      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }
      return NextResponse.json(post, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to fetch post" },
        { status: 500 }
      );
    }
  }

  try {
    let whereClause: any = {};
    
    if (term) {
      whereClause.title = {
        contains: term,
        mode: "insensitive",
      };
    }

    if (tag) {
      whereClause.tags = {
        has: tag,
      };
    }

    const posts = await prisma.post.findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, sections, tags } = body;

    if (!id || !title || !sections || !Array.isArray(sections)) {
      return NextResponse.json(
        { error: "ID, Title, and valid sections are required." },
        { status: 400 }
      );
    }

    const validSections = sections.filter(
      (section: any) => section.content.trim() !== ""
    );

    if (validSections.length === 0) {
      return NextResponse.json(
        { error: "At least one valid section is required." },
        { status: 400 }
      );
    }

    // First, find the existing post
    const existingPost = await prisma.post.findUnique({
      where: { id: Number(id) },
    });

    if (!existingPost) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    // Update the post with all fields including tags
    const updatedPost = await prisma.$executeRaw`
      UPDATE "Post"
      SET title = ${title},
          sections = ${JSON.stringify(validSections)}::jsonb,
          tags = ${Array.isArray(tags) ? tags : []}::text[],
          "updatedAt" = NOW()
      WHERE id = ${Number(id)}
      RETURNING *;
    `;

    // Fetch the updated post
    const finalPost = await prisma.post.findUnique({
      where: { id: Number(id) },
    });

    return NextResponse.json(finalPost, { status: 200 });
  } catch (error: unknown) {
    console.error('Update error:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
