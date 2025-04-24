import ContactForm from '@/components/ContactForm';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'bbyik에게 메일 보내기',
};

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: 'https://github.c om/bbyik-k',
  },
  {
    icon: <AiFillLinkedin />,
    url: 'https://www.linkedin.com/in/byeongik-kim-747881355/',
  },
];
export default function ContactPage() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold by-2'>Contact Me</h2>
      <p>ikbyeong.kim@gmail.com</p>
      <ul className='flex gap-4 my-2'>
        {LINKS.map((link, idx) => (
          <a key={idx} href={link.url} target='_blank' rel='noopener noreferrer' className='text-4xl hover:text-yellow-400'>
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
