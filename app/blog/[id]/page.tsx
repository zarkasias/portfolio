import { Metadata, ResolvingMetadata } from "next/types";
import axios from "axios";
import BlogClient from "./BlogClient";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  // Fetch blog data
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?id=${id}`
    );

    return {
      title: data.title,
      description:
        data.sections?.[0]?.content?.substring(0, 200) || "Blog post",
      openGraph: {
        title: data.title,
        description:
          data.sections?.[0]?.content?.substring(0, 200) || "Blog post",
        url: `https://chambers-consulting.dev/blog/${id}`,
        // Add image if you have one in your blog data
        images: [
          {
            url: data.image || "https://chambers-consulting.dev/cclogo-new.png",
            width: 16,
            height: 16,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Blog Post",
      description: "Blog post content",
    };
  }
}

export default function BlogPage() {
  return <BlogClient />;
}
