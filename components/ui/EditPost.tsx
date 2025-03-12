"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { EditPostProps, Section } from "@/app/types/blogInterface";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "@/app/css/quill.css";

const ReactQuill = dynamic(() => import("react-quill"), { 
  ssr: false,
  loading: () => <div className="h-32 bg-gray-700 animate-pulse rounded" />
});

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false
  }
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link'
];

interface PostData {
  title: string;
  sections: { subtitle: string; content: string }[];
  tags?: string[];
}

const EditPost = ({ postId }: EditPostProps) => {
  const router = useRouter();
  const [post, setPost] = useState<PostData>({
    title: "",
    sections: [{ subtitle: "", content: "" }],
    tags: [],
  });
  const [loading, setLoading] = useState(!!postId);
  const [tagInput, setTagInput] = useState("");

  // Common tags for frontend development
  const suggestedTags = [
    "React",
    "TypeScript",
    "Next.js",
    "Frontend",
    "Web Development",
    "Performance",
    "Accessibility",
    "UI/UX",
  ];

  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`/api/posts?id=${postId}`);
          if (response.ok) {
            const data = await response.json();
            setPost({
              title: data.title,
              sections: data.sections,
              tags: data.tags || [],
            });
          }
        } catch (error) {
          console.error("Failed to fetch post:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    }
  }, [postId]);

  const addTag = (tag: string) => {
    if (tag.trim() && !post.tags?.includes(tag.trim())) {
      setPost(prev => ({
        ...prev,
        tags: [...(prev.tags || []), tag.trim()]
      }));
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setPost(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }));
  };

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
          tags: [],
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

  const handleQuillChange = (value: string, index: number) => {
    setPost((prev) => {
      const updatedSections = [...prev.sections];
      updatedSections[index].content = value;
      return { ...prev, sections: updatedSections };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Post Title"
          className="w-full p-2 bg-gray-700 rounded-lg text-white"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium mb-2">Tags</label>
        <div className="flex flex-wrap gap-2 p-4 bg-gray-700 rounded-lg min-h-[50px]">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-gray-600 text-white rounded-full flex items-center gap-2"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="text-gray-300 hover:text-white text-lg leading-none"
              >
                ×
              </button>
            </span>
          ))}
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addTag(tagInput);
              }
            }}
            placeholder="Add tags... (press Enter)"
            className="flex-grow min-w-[150px] bg-transparent text-white outline-none placeholder-gray-400"
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <p className="text-sm text-gray-400 w-full mb-1">Suggested tags:</p>
          {suggestedTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => addTag(tag)}
              className="px-3 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-gray-500 bg-gray-600 rounded-full transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-600 p-6 rounded-md border-2 border-gray-200">
        <div className="flex flex-col">
          <label className="py-4 text-3xl">Sections</label>
          {post.sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col mb-4"
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
              <div className="bg-black-100 h-44">
                <ReactQuill
                  value={section.content}
                  onChange={(value) => handleQuillChange(value, index)}
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  className="h-32"
                />
              </div>
              <button
                type="button"
                className="flex items-center justify-end pt-4 py-2"
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
      </div>
      <button
        className="my-8 p-2 flex items-center bg-red-500 rounded"
        type="submit"
      >
        {postId ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
};

export default EditPost;
