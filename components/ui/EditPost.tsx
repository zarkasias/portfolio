"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { EditPostProps, Section } from "@/app/types/blogInterface";
import { useRouter } from "next/navigation";

const EditPost = ({ postId }: EditPostProps) => {
  const router = useRouter();
  const [post, setPost] = useState({
    title: "",
    sections: [{ subtitle: "", content: "" }] as Section[],
  });

  useEffect(() => {
    if (postId) {
      fetch(`/api/posts?id=${postId}`)
        .then((res) => res.json())
        .then((data) => setPost(data))
        .catch((error) => console.error("Error fetching post:", error));
    }
  }, [postId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;
    if (index !== undefined) {
      setPost((prev) => {
        const updatedSections = [...prev.sections];
        updatedSections[index] = { ...updatedSections[index], [name]: value };
        return { ...prev, sections: updatedSections };
      });
    } else {
      setPost((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addSection = () => {
    setPost((prev) => ({
      ...prev,
      sections: [...prev.sections, { subtitle: "", content: "" }],
    }));
  };

  const removeSection = (index: number) => {
    setPost((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate sections
    const validSections = post.sections.filter(
      (section) => section.content.trim() !== ""
    );

    if (validSections.length === 0) {
      alert("At least one section must have valid subtitle and content.");
      return;
    }

    const method = postId ? "PUT" : "POST";
    const url = postId ? `/api/posts` : `/api/posts`;

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...post,
          sections: validSections,
          id: Number(postId),
        }),
      });

      if (response.ok) {
        alert(`Post ${postId ? "updated" : "created"} successfully!`);
        setPost({
          title: "",
          sections: [{ subtitle: "", content: "" }],
        });
        if (postId) {
          router.push(`/blog/${postId}`);
        } else {
          router.push("/blogs");
        }
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        alert(`Failed to ${postId ? "update" : "create"} post.`);
      }
    } catch (error) {
      console.error("Failed to submit post:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-600 p-6 rounded-md border-2 border-gray-200">
        <div className="flex flex-col">
          <label className="py-4 text-3xl">Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            className="border-2 border-gray-500 h-10"
            onChange={handleChange}
          />
        </div>
        <div>
          <h3 className="py-4 text-3xl">Sections</h3>
          {post.sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col"
              style={{ marginBottom: "1rem" }}
            >
              <label className="py-2">Subtitle</label>
              <input
                type="text"
                name="subtitle"
                value={section.subtitle}
                className="border-2 border-gray-500 h-10 p-2"
                onChange={(e) => handleChange(e, index)}
              />
              <label className="py-2">Content</label>
              <textarea
                name="content"
                value={section.content}
                className="border-2 border-gray-500 h-40 p-2"
                onChange={(e) => handleChange(e, index)}
              />
              <button
                type="button"
                className="flex items-center justify-end py-2"
                onClick={() => removeSection(index)}
                title="Remove Section"
              >
                <FontAwesomeIcon
                  className="text-2xl text-gray-800"
                  icon={faTrash}
                />
              </button>
            </div>
          ))}
          <button
            className="flex items-center py-1"
            type="button"
            onClick={addSection}
          >
            <FontAwesomeIcon
              className="text-green-600 text-2xl mr-2"
              icon={faPlus}
            />{" "}
            Add Section
          </button>
        </div>
        <button
          className="my-8 p-2 flex items-center bg-red-500 rounded"
          type="submit"
        >
          {postId ? "Update Post" : "Create Post"}
        </button>
      </div>
    </form>
  );
};

export default EditPost;
