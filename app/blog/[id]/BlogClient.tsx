"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { Blog, Comment } from "@/app/types/blogInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { ThreeDots } from "react-loader-spinner";

import Header from "@/components/ui/BlogHeader";
import Copyright from "@/components/ui/Copyright";

export default function BlogClient() {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch both blog and comments in parallel
        const [blogResponse, commentsResponse] = await Promise.all([
          axios.get(`/api/posts?id=${id}`),
          axios.get(`/api/comments?postId=${id}`),
        ]);
        setBlog(blogResponse.data);
        setComments(
          commentsResponse.data.sort(
            (a: Comment, b: Comment) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        );
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;

    try {
      const { data: newCommentData } = await axios.post("/api/comments", {
        postId: id,
        content: newComment,
        author: authorName || "Anonymous",
      });

      setComments((prevComments) => [...prevComments, newCommentData]);
      setNewComment("");
      setAuthorName("");
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  const editBlog = () => {
    router.push(`/blog/edit/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-8 pb-10 lg:pt-12 lg:pb-14 max-w-5xl mx-auto px-6 my-6">
        <div className="w-full min-w-[320px] sm:min-w-[768px]">
          {loading ? (
            <div className="flex justify-center items-center w-full">
              <ThreeDots color="#00BFFF" height={80} width={80} />
            </div>
          ) : (
            <>
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
                  <p className="text-gray-400 mt-0 text-sm">
                    Author: {blog?.author}
                  </p>

                  {blog?.sections && blog?.sections.length > 0 ? (
                    <div className="mt-4 space-y-4">
                      {blog.sections.map((section, index) => (
                        <div
                          key={index}
                          className="border-t border-gray-700 pt-4"
                        >
                          <h3 className="text-xl font-semibold text-gray-200">
                            {section.subtitle}
                          </h3>
                          <div
                            className="text-gray-200 mt-2 prose prose-invert"
                            dangerouslySetInnerHTML={{
                              __html: section.content,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 mt-4">No sections available.</p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            Comments ({comments.length})
          </h2>

          {/* Comments list */}
          <div className="space-y-4 mb-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-t border-gray-700 pt-4">
                <p className="text-gray-200">{comment.content}</p>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-400">
                    {comment.author !== "Anonymous" &&
                      comment.author !== blog?.author &&
                      `By: ${comment.author}`}
                    {comment.author === blog?.author && (
                      <span className="px-2 py-1 bg-gray-400 text-gray-800 rounded-full text-xs">
                        Author
                      </span>
                    )}
                  </span>
                  <span className="text-sm text-gray-400">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Comment input */}
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-2 rounded-lg bg-gray-700 text-gray-200"
                placeholder="Add a comment..."
              />
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="p-2 rounded-lg bg-gray-700 text-gray-200 w-full sm:max-w-xs"
                  placeholder="Your name (optional)"
                />
                <button
                  onClick={handleCommentSubmit}
                  className="w-full sm:w-24 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Copyright />
    </div>
  );
}
