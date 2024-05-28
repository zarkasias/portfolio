"use client";

import Head from "next/head";

import axios from "axios";

import BlogPost from "@/components/ui/BlogPost";

const AddBlog = () => {
  const handleSubmit = async ({
    title,
    entry,
  }: {
    title: string;
    entry: string;
  }) => {
    const { data } = await axios.post("/api/posts", {
      title,
      entry,
    });
    console.log(data);
  };

  return (
    <div>
      <Head>
        <title>Add a Blog Post</title>
      </Head>
      <div className="pt-8 pb-10 lg:pt-12 lg:pb-14 max-w-5xl mx-auto px-6 my-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl md:text-6xl mb-6">
          Write an Entry
        </h1>

        <div className="mt-6">
          <BlogPost className="max-w-5xl" onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
