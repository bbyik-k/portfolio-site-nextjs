// 'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <article className='prose lg:prose-xl prose-h2:text-foreground prose-blockquote:text-foreground text-foreground max-w-none'>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { children, className, ref: _ref, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter {...rest} language={match[1]} PreTag='div' style={materialDark}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
          img: (image) => <Image src={typeof image.src === 'string' ? image.src : ''} alt={image.alt || ''} width={500} height={350} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
