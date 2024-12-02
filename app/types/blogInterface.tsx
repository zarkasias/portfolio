export interface Section {
  subtitle: string;
  content: string;
}

export interface Blog {
  id: number;
  title: string;
  sections: Section[];
  createdAt: string;
  author: string;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  author: string;
}

export interface EditPostProps {
  postId?: string;
}
