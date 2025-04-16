import { getPosts } from '@/service/posts';
import PostCard from './PostCard';

export default async function FeaturedPosts() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <section>
      <h2>Featured Posts</h2>
      <div className='flex max-w-5xl'>
        {posts
          .filter((post) => post.featured)
          .map((post) => (
            <PostCard key={post.path} post={post} />
          ))}
      </div>
    </section>
  );
}
