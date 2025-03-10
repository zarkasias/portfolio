"use client";

import Head from "next/head";
import EditPost from "@/components/ui/EditPost";
import PageLayout from "@/components/layout/PageLayout";

interface EditBlogPageProps {
  params: {
    id: string;
  };
}

const EditBlogPage = ({ params }: EditBlogPageProps) => {
  return (
    <PageLayout className="pt-14 md:w-[68%]">
      <div>
        <Head>
          <title>Edit Blog Post</title>
        </Head>
        <div className="pt-8 pb-10 lg:pt-12 lg:pb-14 max-w-5xl mx-auto px-6 my-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl mb-6">
            Edit Entry
          </h1>

          <div className="mt-6">
            <EditPost postId={params.id} />
          </div>
        </div>
      </div>
      </PageLayout>
  );
};

export default EditBlogPage;
