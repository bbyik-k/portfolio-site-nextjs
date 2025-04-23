import Profile from '@/components/Profile';
const TITLE_CLASS = 'text-2xl font-bold my-2';
export default function AboutPage() {
  return (
    <>
      <Profile />

      <section className='bg-gray-700 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          Frontend Engineer <br />
          👋 사용자 경험과 팀의 개발 생산성을 함께 고민하는 프론트엔드 개발자입니다.
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>FR (-2024)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Next.js <br />
          Git, Clean Code <br />
          VS Code, TypeScript, Storybook
        </p>
      </section>
    </>
  );
}
