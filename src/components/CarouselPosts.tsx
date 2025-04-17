import { getNonFeaturedPosts } from '@/service/posts';
// import PostCard from './PostCard';
import EmblaCarousel from './Carousel/Carousel';
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: 'center',
  containScroll: 'trimSnaps',
};
const SLIDE_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold my-2'>You May Like</h2>
      {/* {posts.map((post) => (
        <PostCard key={post.path} post={post} />
      ))} */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} posts={posts} />
    </section>
  );
}
