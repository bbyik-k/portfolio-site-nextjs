'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/service/contact';

type Form = {
  from: string;
  subject: string;
  message: string;
};
const DEFAULT_FORM_DATA = { from: '', subject: '', message: '' };
export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_FORM_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form) //
      .then(() => {
        setBanner({
          message: '전송에 성공하였습니다!',
          state: 'success',
        });
        setForm(DEFAULT_FORM_DATA);
      })
      .catch(() => {
        setBanner({
          message: '전송에 실패하였습니다. 다시 시도해 주세요.',
          state: 'error',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className='w-full max-w-md '>
      {banner && <Banner banner={banner} />}
      <form onSubmit={onSubmit} className='w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-2xl'>
        <label className='font-semibold' htmlFor='from'>
          Your Email
        </label>
        <input className='bg-slate-500' type='email' id='from' name='from' required autoFocus value={form.from} onChange={onChange} />
        <label className='font-semibold' htmlFor='subject'>
          Subject
        </label>
        <input className='bg-slate-500' type='text' id='subject' name='subject' required value={form.subject} onChange={onChange} />
        <label className='font-semibold' htmlFor='message'>
          Message
        </label>
        <textarea className='bg-slate-500' rows={10} id='message' name='message' required value={form.message} onChange={onChange} />
        <button className='bg-cyan-700 font-bold hover:bg-cyan-600'>Submit</button>
      </form>
    </section>
  );
}
