'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    // startTransition keeps the page responsive while updating data
    startTransition(() => {
      router.replace(`/?${params.toString()}`);
    });
  }

  return (
    <div className="relative w-full max-w-md my-4">
      <input
        type="text"
        placeholder="Search items..."
        defaultValue={searchParams.get('query') || ''}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isPending && (
        <span className="absolute right-3 top-2.5 text-sm text-gray-400">
          Searching...
        </span>
      )}
    </div>
  );
}