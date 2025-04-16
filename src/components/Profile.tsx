import Image from 'next/image';
import Link from 'next/link';

import profileImage from '../../public/images/profile_character.png';

export default function Profile() {
  return (
    <>
      <section className='flex flex-col items-center'>
        <Image className='rounded-full mx-auto' src={profileImage} alt='character' width={200} />
        <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm bbyik"}</h2>
        <h3 className='text-xnl font-semibold'>Frontend Engineer</h3>
        <p>사용자 중심의 개발자, bbyik</p>
        <Link href={'/contact'}>
          <button className='bg-primary font-bold rounded-xl py-1 px-4 mt-2'>Contact Me</button>
        </Link>
      </section>
    </>
  );
}
