import searchIcon from '@/public/icons/search.svg';
import Image from 'next/image';

type Props = {};

const Search = (props: Props) => {
	return (
		<div className='flex w-[380px] bg-searchBg px-5 py-[10px] rounded-[4px]'>
			<input
				type='text'
				className='outline-none flex-1 bg-transparent text-sm'
                placeholder='Search'
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
