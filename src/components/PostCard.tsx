import { Post } from '@/service/posts';
import Image from 'next/image';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <div className='flex flex-col'>
      <Image src={`/posts/${post.path}.png`} alt={post.title} width={200} height={100} />
      <p>{post.date}</p>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <p>{post.category}</p>
    </div>
  );
}
