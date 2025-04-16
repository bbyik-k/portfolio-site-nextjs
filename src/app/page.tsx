import FeaturedPosts from '@/components/FeaturedPosts';
import Profile from '@/components/Profile';

export default function HomePage() {
  return (
    <section className='bg-gray-500 h-full flex flex-col items-center'>
      <Profile />
      <FeaturedPosts />
    </section>
  );
}
