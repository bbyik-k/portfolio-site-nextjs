# Portfolio site - Next.js

**[portfolio vercel 배포 링크](https://portfolio-site-nextjs-nine.vercel.app/)**

## 📌 프로젝트 소개

이 프로젝트는 **Next.js 13 App Router 기반의 프론트엔드 포트폴리오 사이트**입니다.

디자인 시스템, SEO 최적화, 반응형 UI, 컴포넌트 아키텍처 등 실제 서비스 수준의 경험을 바탕으로 구축되었으며, **확장성과 유지보수성**을 고려하여 설계된 실전형 프로젝트입니다.

## 🧩 주요 기능

- 블로그 포스트 목록 및 상세 조회
- MD 파일 기반의 포스트 작성 및 렌더링 (Markdown → React 컴포넌트)
- 코드 블록 문법 하이라이팅
- Tailwind 기반의 가독성 높은 Typography 스타일링
- 포스트 추천 캐러셀 (Embla 기반, AutoPlay 포함)
- Contact 폼 전송 시 이메일 전송 기능 내장 (Nodemailer)
- 반응형 디자인 및 접근성 고려한 컴포넌트 설계

## 🔧 기술 스택

- **Framework**: Next.js 15.3.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x, CSS 변수 기반 테마 설정
- **Markdown** 렌더링: react-markdown + remark-gfm
- **Syntax** Highlighting: react-syntax-highlighter
- **Email** 처리: Nodemailer + Next.js Route Handler(API)
- **이미지** 최적화: next/image
- **캐러셀**: Embla Carousel + embla-carousel-autoplay
- **유효성 검사**: Yup
- **Icon**: react-icons

## 📁 폴더 구조 요약

```
📦src
 ┣ 📂app              # Next.js App Router 구조
 ┃ ┣ 📂posts          # 블로그 관련 페이지
 ┃ ┣ 📂contact        # Contact 폼 페이지
 ┃ ┣ 📂api/contact    # 이메일 전송 API 핸들러
 ┃ ┣ 📂about          # 소개 페이지
 ┃ ┗ 📜layout.tsx     # 전체 레이아웃 구성

 ┣ 📂components        # UI 컴포넌트 모듈화
 ┃ ┣ 📂Carousel       # 캐러셀 관련 컴포넌트
 ┃ ┗ 📜MarkdownViewer.tsx 등...

 ┣ 📂service           # 데이터 유틸리티 함수
 ┃ ┗ 📜posts.ts        # 포스트 데이터 처리
 ┃ ┗ 📜contact.ts      # 이메일 처리

 ┣ 📂hooks             # (추후 커스텀 훅 추가 예정)
 ┗ 📜globals.css       # Tailwind 전역 스타일 및 CSS 변수 설정
```

## 🚀 실행 방법

1. **레포지토리 클론**

```bash
git clone https://github.com/bbyik-k/portfolio-site-nextjs.git
cd portfolio-site-nextjs
```

2. **패키지 설치**

```bash
yarn install
```

3. **로컬 개발 서버 실행**

```bash
yarn dev
```

4. **빌드 & 배포**

```bash
yarn build
yarn start
```

---

## 🔗 배포 링크

👉 [https://portfolio.vercel.app](https://portfolio-site-nextjs-nine.vercel.app/)
