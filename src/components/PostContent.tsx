import React from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import MarkdownViewer from './MarkdownViewer';
import { PostData } from '@/service/posts';

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;
  return (
    <section className='flex flex-col p-4'>
      <div className='flex items-center self-end text-cyan-600'>
        <AiTwotoneCalendar />
        <p className='font-semibold ml-2'>{date.toString()}</p>
      </div>
      <h1 className='text-4xl font-bold text-cyan-500'>{title}</h1>
      <p className='text-xl font-bold text-foreground'>{description}</p>
      <div className='w-124 border-2 border-cyan-600 mt-4 mb-8'></div>
      <MarkdownViewer content={content} />
    </section>
  );
}
