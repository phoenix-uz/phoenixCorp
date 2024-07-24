import { NextResponse } from 'next/server';

export async function POST(req) {
  const { fullName, phone } = await req.json();

  const response = await fetch('https://script.google.com/macros/s/AKfycbyigcXdlxwLMTTgDLi6lk8YpnGtpkkvZw1dxN33RxWMt_HukyXtVD2cUtqHDL8U3fdf/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fullName, phone }),
  });

  const result = await response.json();
  
  if (result.status === 'success') {
    return NextResponse.json({ status: 'success' });
    // toast.success('Ваша заявка принята!')
  } else {
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}