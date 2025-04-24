import { EmailData } from './email';

//Front에서 API Route에 요청을 위한 함수
export async function sendContactEmail(email: EmailData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패함');
  }
  return data;
}
