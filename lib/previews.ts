import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

const PreviewSchema = z.object({
  slug: z.string().min(1),
  token: z.string().min(10),
  businessName: z.string().min(1),
  siteUrl: z.string().url(),
  preparedOn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  mockupUrl: z.string().url().optional(),
  findings: z
    .array(z.object({ title: z.string().min(1), detail: z.string().min(1) }))
    .min(3)
    .max(5),
  fixes: z.array(z.string().min(1)).min(1),
  images: z.object({
    beforeDesktop: z.string().min(1),
    beforePhone: z.string().min(1),
    afterDesktop: z.string().min(1),
    afterPhone: z.string().min(1),
  }),
  imageAlt: z.object({ before: z.string().min(1), after: z.string().min(1) }),
});

export type Preview = z.infer<typeof PreviewSchema>;

const DIR = path.join(process.cwd(), "content", "previews");

/** Reads and validates every preview file. Throws (failing the build) on a bad file. */
export function getAllPreviews(): Preview[] {
  const previews = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((file) => {
      const parsed = PreviewSchema.safeParse(
        JSON.parse(fs.readFileSync(path.join(DIR, file), "utf8")),
      );
      if (!parsed.success) {
        throw new Error(
          `Invalid preview file ${file}: ${z.prettifyError(parsed.error)}`,
        );
      }
      if (parsed.data.slug !== file.replace(/\.json$/, "")) {
        throw new Error(`Preview file ${file}: slug must match the file name`);
      }
      return parsed.data;
    });
  const tokens = new Set(previews.map((p) => p.token));
  if (tokens.size !== previews.length) throw new Error("Duplicate preview tokens");
  return previews;
}

export function getPreviewByToken(token: string): Preview | undefined {
  return getAllPreviews().find((p) => p.token === token);
}
