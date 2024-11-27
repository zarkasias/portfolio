"use client";

import EditPost from "@/components/ui/EditPost";
import Header from "@/components/ui/BlogHeader";

const AddBlogPage = () => {
  return (
    <>
      <Header />
      <div>
        <div className="pt-8 pb-10 lg:pt-12 lg:pb-14 max-w-5xl mx-auto px-6 my-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl mb-6">
            Write an Entry
          </h1>

          <div className="mt-6">
            <EditPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlogPage;
