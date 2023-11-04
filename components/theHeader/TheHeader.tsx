import Image from 'next/image';
import logo from '@/public/icons/mainLogo.svg';
import Search from './Search';

const TheHeader = () => {

    const headerStyles = `text-white w-full py-[18px] flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center wrapper`

	return (
		<header className='border-b border-[#313442] fixed w-full top-0 z-20 bg-mainBg'>
			<div className={headerStyles}>
				<div className='flex items-start  gap-[10px]'>
					<Image
						src={logo}
						width={78}
						height={30}
						alt='Website logo'
					/>
					<h1 className='  text-3xl font-bold'>Memes</h1>
				</div>
				<Search />
			</div>
		</header>
	);
};

export default TheHeader;
