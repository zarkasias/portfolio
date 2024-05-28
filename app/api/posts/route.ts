import { prisma } from "@/server/db/client";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, entry } = body;
    const post = await prisma.post.create({
      data: {
        title,
        entry,
        author: "David Chambers",
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

// export async function GET(res: NextResponse) {
//   return NextResponse.json(
//     { message: "This method is not allowed" },
//     { status: 405 }
//   );
// }
