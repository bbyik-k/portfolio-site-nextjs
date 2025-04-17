import path from 'path';
import { promises as fs } from 'fs';

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const posts: Post[] = JSON.parse(fileContent);

  // const sortedPosts = posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return sortedPosts;
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => !post.featured);
}
