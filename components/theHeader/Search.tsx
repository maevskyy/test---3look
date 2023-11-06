"use client"

import searchIcon from '@/public/icons/search.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const Search = () => {

    // search functionality
    const router = useRouter()
    const [text, setText] = useState('')
    const [query] = useDebounce(text, 500)

    useEffect(() => {
        if (!query) {
            router.push('/')
        }
        else {
            router.push(`?search=${query}`)
        }
    }, [query, router])

	return (
		<div className='flex w-full  md:w-[380px] bg-searchBg px-5 py-[10px] rounded-[4px]'>
			<input
				type='text'
				className='outline-none flex-1 bg-transparent text-sm'
                placeholder='Search'
                value={text}
                onChange={(e) => setText(e.target.value)}
			/>
			<Image
				src={searchIcon}
				width={20}
				height={20}
				alt='search icon'
			/>
		</div>
	);
};

export default Search;
