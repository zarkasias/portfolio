"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { ThreeDots } from "react-loader-spinner";

import PageLayout from "../../components/layout/PageLayout";
import BlogTableHeader from "@/components/ui/BlogTableHeader";

import { Blog } from "@/app/types/blogInterface";

const BlogPage = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [allTags, setAllTags] = useState<string[]>([]);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const dataFetchedRef = useRef(false);

  const sortPosts = useCallback((postsToSort: Blog[], direction: "asc" | "desc" = "desc") => {
    return [...postsToSort].sort((a, b) => {
      const comparison =
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return direction === "desc" ? comparison : -comparison;
    });
  }, []);

  const handleSort = () => {
    setSortDirection(prev => prev === "desc" ? "asc" : "desc");
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag === selectedTag ? "" : tag);
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("/api/posts");
        const sortedPosts = sortPosts(data);
        setPosts(sortedPosts);

        // Extract unique tags from all posts
        const tags = new Set<string>();
        sortedPosts.forEach(post => {
          post.tags?.forEach(tag => tags.add(tag));
        });
        setAllTags(Array.from(tags));
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [sortPosts]);

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    const filtered = posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = !selectedTag || post.tags?.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
    return sortPosts(filtered, sortDirection);
  }, [posts, searchTerm, selectedTag, sortDirection, sortPosts]);

  return (
    <PageLayout className="pt-24 md:w-[60%]" showFooterBlurb={false}>
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
        Insights & Ideas
      </h1>
      <BlogTableHeader onSearch={handleSearch} onSort={handleSort} />
      
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagSelect(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-8">
        <div className="mt-6 space-y-6">
          {loading ? (
            <div className="flex justify-center py-8">
              <ThreeDots color="#3B82F6" height={50} width={50} />
            </div>
          ) : filteredAndSortedPosts.length > 0 ? (
            <div className="grid gap-6">
              {filteredAndSortedPosts.map((post) => (
                  <Card key={post.id} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-primary text-xl font-semibold mb-2">
                      {post.title}
                    </h2>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </Link>
                  </CardContent>
                  </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">No posts found</div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;
