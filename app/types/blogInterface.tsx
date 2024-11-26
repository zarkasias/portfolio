export interface Section {
  subtitle: string;
  content: string;
}

export interface Blog {
  id: number;
  title: string;
  sections: Section[];
  author: string;
}

export interface EditPostProps {
  postId?: string;
}
