import { Post } from '@/service/posts';
import PostCard from './PostCard';
type Props = {
  posts: Post[];
};
export default function PostGrid({ posts }: Props) {
  return (
    <ul className='flex max-w-5xl'>
      {posts.map((post) => (
        <li className='flex flex-col' key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
