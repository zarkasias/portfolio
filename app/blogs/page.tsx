"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import debounce from "lodash/debounce";
import Link from "next/link";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import Header from "@/components/ui/BlogHeader";
import Copyright from "@/components/ui/Copyright";
import BlogTableHeader from "@/components/ui/BlogTableHeader";

import { Blog } from "@/app/types/blogInterface";

const BlogPage = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const dataFetchedRef = useRef(false);

  const sortPosts = (posts: any[], direction: "asc" | "desc" = "desc") => {
    return [...posts].sort((a: any, b: any) => {
      const comparison =
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return direction === "desc" ? comparison : -comparison;
    });
  };

  const handleSort = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    setPosts((posts) => sortPosts(posts, sortDirection));
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("/api/posts");
        const sortedPosts = sortPosts(data);

        setPosts(sortedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setSearchTerm(term);
      setLoading(true);
      axios
        .get(`/api/posts?search=${encodeURIComponent(term)}`)
        .then(({ data }) => {
          setPosts(sortPosts(data));
        })
        .catch((error) => {
          console.error("Failed to fetch posts:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 300),
    [sortPosts]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-8 pb-10 lg:pt-12 lg:pb-14 max-w-5xl mx-auto px-6 my-6">
        <div className="w-full min-w-[320px] sm:min-w-[768px]">
          <h1 className="text-4xl font-bold tracking-tight text-gray-100 mb-4 text-left">
            Insights & Ideas
          </h1>
          <BlogTableHeader onSearch={debouncedSearch} onSort={handleSort} />
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
