"use client";
import React, { useState } from "react";

interface BlogPostProps {
  onSubmit: (data: { title: string; entry: string }) => void;
  className?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ onSubmit, className }) => {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ entry, title });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`mt-8 space-y-6 ${className}`}
      action="#"
      method="POST"
    >
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={title}
            placeholder="Title"
            className="border-2 border-white"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            rows={8}
            cols={50}
            value={entry}
            placeholder="Write a blog entry"
            className="border-2 border-white"
            onChange={(e) => setEntry(e.target.value)}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default BlogPost;
