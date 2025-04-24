import { sendEmail } from '@/service/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(request: Request) {
  const body = await request.json();
  // console.log(body);
  if (!bodySchema.isValidSync(body)) {
    // console.log(body);
    return new Response(JSON.stringify({ message: '메일 전송에 실패하였습니다.' }), { status: 400 });
  }

  return sendEmail(body) //
    .then(() => new Response(JSON.stringify({ message: '메일이 성공적으로 전송되었습니다.' }), { status: 200 }))
    .catch((error) => {
      console.error(error);
      return new Response(JSON.stringify({ message: '메일 전송에 실패하였습니다.' }), { status: 500 });
    });
}
