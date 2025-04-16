import { getFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section>
      <h2>Featured Posts</h2>
      <div className='flex max-w-5xl'>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </div>
    </section>
  );
}
