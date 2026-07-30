'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Input } from '@nextui-org/react'
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';
import React from 'react'

const Search = () => {

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();
    const handleChange = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathName}?${params.toString()}`);
    }, 300);

    return (
        <div className="p-4 flex items-center justify-center bg-gradient-to-br from-sky-400 to-indigo-500">
            <Input
            onChange={(e) => handleChange(e.target.value)} 
            className="w-96 shadow"
            defaultValue={searchParams.get('query')?.toString()} 
            endContent={<MagnifyingGlassIcon className="size-1 text-slate-500"/>}/>
        </div>
    )
}

export default Search