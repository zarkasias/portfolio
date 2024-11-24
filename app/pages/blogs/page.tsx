"use client";

import { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="pt-8 pb-10 lg:pt-12 lg:pb-14 max-w-5xl mx-auto px-6 my-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl md:text-6xl mb-6">
        Blog Posts
      </h1>
      <div className="mt-6 space-y-6">
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white">{post.title}</h2>
              <p className="text-gray-400 mt-2">{post.entry}</p>
              <p className="text-gray-500 mt-4 text-sm">
                Author: {post.author}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
