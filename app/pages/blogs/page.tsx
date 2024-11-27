"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import Header from "@/components/ui/BlogHeader";
import Copyright from "@/components/ui/Copyright";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("/api/posts");
        const sortedPosts = data.sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-8 pb-10 lg:pt-12 lg:pb-14 max-w-5xl mx-auto px-6 my-6">
        <div className="w-full min-w-[320px] sm:min-w-[768px]">
          <h1 className="text-4xl font-bold tracking-tight text-gray-100 mb-6 text-left">
            Insights & Ideas
          </h1>
          <div className="mt-6 space-y-6">
            {loading ? (
              <div className="flex justify-center items-center w-full">
                <ThreeDots color="#00BFFF" height={80} width={80} />
              </div>
            ) : posts.length > 0 ? (
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
      </main>
      <Copyright />
    </div>
  );
};

export default BlogPage;
