import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '모든 포스트 포트폴리오 글',
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
