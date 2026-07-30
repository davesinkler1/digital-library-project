import { cookies } from 'next/headers';

export async function setSharedCookie(value) {
  (await cookies()).set('pdf_file', value, { secure: true });
}

export async function getSharedCookie() {
  const cookieStore = await cookies();
  return cookieStore.get('pdf_file')?.value;
}