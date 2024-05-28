import { prisma } from "@/server/db/client";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { title, entry } = req.body;
      const post = await prisma.post.create({
        data: {
          title,
          entry,
          author: "David Chambers",
        },
      });
      res.status(201).json(post);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
