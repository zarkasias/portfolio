import { Metadata, ResolvingMetadata } from "next/types";
import axios from "axios";
import BlogClient from "./BlogClient";
import PageLayout from "@/components/layout/PageLayout";
import Script from 'next/script';

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
        images: [
          {
            url: data.image || "https://chambers-consulting.dev/images/logos/cclogo-new.png",
            width: 16,
            height: 16,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Blog Post",
      description: "Loading blog post...",
    };
  }
}

interface BlogPageProps {
  params: {
    id: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  // Fetch blog data for JSON-LD
  let blogData;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?id=${params.id}`
    );
    blogData = data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
  }

  const jsonLd = blogData ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blogData.title,
    author: {
      '@type': 'Person',
      name: blogData.author
    },
    datePublished: blogData.createdAt,
    dateModified: blogData.updatedAt || blogData.createdAt,
    description: blogData.sections?.[0]?.content?.substring(0, 200) || '',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://chambers-consulting.dev/blog/${params.id}`
    },
    publisher: {
      '@type': 'Organization',
      name: 'Chambers Consulting',
      logo: {
        '@type': 'ImageObject',
        url: 'https://chambers-consulting.dev/images/logos/cclogo-new.png'
      }
    }
  } : null;

  return (
    <PageLayout className="pt-24 md:w-[60%]" showFooterBlurb={false}>
      {jsonLd && (
        <Script id="blog-jsonld" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>
      )}
      <BlogClient />
    </PageLayout>
  );
}
