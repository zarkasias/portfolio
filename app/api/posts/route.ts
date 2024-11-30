import { prisma } from "@/server/db/client";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, sections, author = "David Chambers" } = body;

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

  if (term) {
    try {
      const posts = await prisma.post.findMany({
        where: {
          title: {
            contains: term || "",
            mode: "insensitive",
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return NextResponse.json(posts);
    } catch (error) {
      console.error("Failed to search posts:", error);
      return NextResponse.json(
        { error: "Failed to search posts" },
        { status: 500 }
      );
    }
  }

  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, sections, author } = body;

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

    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title,
        sections: validSections,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
