"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { Blog } from "@/app/types/blogInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Header from "@/components/ui/BlogHeader";

export default function BlogPage() {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(`/api/posts?id=${id}`);
      setBlog(data);
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    }
  };

  const editBlog = () => {
    router.push(`/blog/edit/${id}`);
  };

  return (
    <>
      <Header />
      <div className="pt-8 pb-10 lg:pt-12 lg:pb-14 max-w-5xl mx-auto px-6 my-6">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-100 mb-6">
            {blog?.title}
          </h1>
          {isAdmin && (
            <button
              onClick={editBlog}
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faEdit} className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-500 mt-0 text-sm">Author: {blog?.author}</p>

            {blog?.sections && blog?.sections.length > 0 ? (
              <div className="mt-4 space-y-4">
                {blog.sections.map((section, index) => (
                  <div key={index} className="border-t border-gray-700 pt-4">
                    <h3 className="text-xl font-semibold text-gray-300">
                      {section.subtitle}
                    </h3>
                    <p className="text-gray-400 mt-2">{section.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 mt-4">No sections available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
