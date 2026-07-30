'use client'

import dynamic from 'next/dynamic';
import PdfObjects from "components/PdfObjects";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { getCookie, getCookies, setCookie, deleteCookie, hasCookie } from 'cookies-next/client';
import { useEffect, useState } from 'react';


export default async function Page() {
  const book: string = await getCookie('pdf_name');

  return (
    <div>
    <PdfObjects url={book}/>
    </div>
  );
}