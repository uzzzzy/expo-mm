
export type Post = {
  title: string;
  slug: string;
  published_at: timestamp;
}

export type PostDetail = Post & { 
  id: number;
  content: string;
  views: number;
}