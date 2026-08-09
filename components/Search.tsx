'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";


const Search = () => {
    const router = useRouter()
    const [text, setText] = useState('')
    const [query] = useDebounce(text, 1000)

    useEffect(() => {
        console.log("query: " + query);
            if (!query) return;
            router.replace(`/list?search=${encodeURIComponent(query)}`)
    }, [query, router])


    return (
        <div className="relative rounded-md shadow-sm">
            <input
                    value={text}
                    placeholder="Search books..."
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                    if (e.key === "Enter") {
                     router.push(`/list?search=${encodeURIComponent(text)}`);
                        }
                    }}
                    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                    />
                    </div>
        </div>
    )
    
}

export default Search