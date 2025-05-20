import Image from 'next/image';
import Link from 'next/link';

import profileImage from '../../public/images/profile_character.png';

export default function Profile() {
  return (
    <>
      <section className='flex flex-col w-full mt-3 ml-20'>
        <h2 className='text-3xl font-bold m-5'>{'🌵안녕하세요, 프론트엔드 개발자 김병익입니다.'}</h2>
        <div className='flex items-start gap-4'>
          <Image className='rounded-full ml-3 mr-5' src={profileImage} alt='character' width={200} />
          <div>
            <div>
              <h3 className='text-xl font-semibold'>
                🔗 현재 사이트는 작업 진행 중이며,
                <br />
                전체 포트폴리오 내용은 아래 링크에서 확인하실 수 있습니다!
              </h3>
              <a
                href='https://bbyiktion.notion.site/1c79e19ed9c5805593e3c5b135d3b58f'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block mt-1 px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-yellow-400 hover:text-black transition-colors'
                aria-label='김병익 포트폴리오 링크'
              >
                👉 포트폴리오 Link
              </a>
            </div>
            <div className='mt-3'>
              <h3 className='text-xl font-semibold'>👋 사용자 경험과 팀의 개발 생산성을 함께 고민하는 프론트엔드 개발자입니다.</h3>
              <p>기획 의도를 정확하게 파악하고, 실제 사용자 경험까지 고려한 화면을 구현하는 데 집중하고 있어요.</p>
              <p>로봇 인터페이스와 키오스크 형식의 화면 개발을 담당하며, 복잡한 인터랙션을 직관적인 UI 로 구성하는 설계를 해왔어요.</p>
              <p>React와 TypeScript 기반 프로젝트에서 기술 스펙 정의부터 컴포넌트 설계, 협업 문서화까지의 과정을 주도해 본 경험이 있어요.</p>
            </div>
            <div className='mt-3'>
              <h3 className='text-xl font-semibold'>🌟저는 이렇게 일하고 있어요.</h3>
              <p>빠르게 흘러가는 프로세스 속에서도 유연하게 대응하며, 문제 해결을 위해 치열하게 고민할 준비가 되어 있어요.</p>
              <p>사용자에게 더 나은 경험을 제공하기 위한 개선을 즐기며, 개발자의 DX 또한 중요하게 생각해요.</p>
              <p>트러블슈팅 과정을 기록하고 팀과 공유하여, 반복되는 이슈를 줄이는 데 집중하고 있어요.</p>
            </div>
            <Link href={'/contact'}>
              <button className='bg-primary font-bold rounded-xl py-1 px-4 mt-3'>Contact Me</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
