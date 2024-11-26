"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import Header from "@/components/ui/BlogHeader";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("/api/posts");
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="pt-8 pb-10 lg:pt-12 lg:pb-14 max-w-5xl mx-auto px-6 my-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-100 mb-6">
          Insights & Ideas
        </h1>
        <div className="mt-6 space-y-6">
          {posts.length > 0 ? (
            posts.map((post: any) => (
              <article
                key={post.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <Link href={`/blog/${post.id}`}>
                  <h2 className="text-blue-500 text-xl font-semibold mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </Link>
              </article>
            ))
          ) : (
            <p className="text-gray-400">No posts available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
