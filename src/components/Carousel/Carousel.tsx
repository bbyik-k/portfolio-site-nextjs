'use client';
import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import './css/embla.css';
import { Post } from '@/service/posts';
import PostCard from '../PostCard';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  posts: Post[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, posts } = props;
  // const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

    resetOrStop();
  }, []);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div className='embla__slide' key={index}>
              {/* <div className='embla__slide__number'>{index + 1}</div> */}
              <PostCard key={posts[index].path} post={posts[index]} />
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
