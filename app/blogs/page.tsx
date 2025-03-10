"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import debounce from "lodash/debounce";
import Link from "next/link";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import PageLayout from "../../components/layout/PageLayout";
import BlogTableHeader from "@/components/ui/BlogTableHeader";
import Copyright from "@/components/ui/Copyright";

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
    setSortDirection(prev => prev === "desc" ? "asc" : "desc");
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
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
    <PageLayout className="pt-24 md:w-[60%]" showFooterBlurb={false}>
      <h1 className="text-4xl font-bold tracking-tight text-gray-100 mb-4">Insights & Ideas</h1>
      <BlogTableHeader onSearch={debouncedSearch} onSort={handleSort} />
      <div className="flex flex-col gap-8">

<div className="mt-6 space-y-6">
        {loading ? (
          <div className="flex justify-center py-8">
            <ThreeDots color="#3B82F6" height={50} width={50} />
          </div>
        ) : posts.length > 0 ? (
          <div className="grid gap-6">
            {posts.map((post) => (
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
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-400">
            No posts found
          </div>
        )}
      </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;
