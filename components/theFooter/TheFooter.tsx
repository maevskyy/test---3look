import React from 'react';
import Button from './Button';
import checkIcon from '@/public/icons/check.svg';

type Props = {};

const TheFooter = (props: Props) => {
	return (
		<footer className='bg-footerBg z-20 fixed w-full text-xs sm:text-base bottom-0 py-5'>
			<div className='wrapper flex gap-[1.6em]'>
				<Button
					title='Save Changes'
					styles=' bg-saveButtonGreenBg border-transparent'
					onClick={() => {}}
					Icon={checkIcon}
				/>
				<Button
					title='Cansel'
					styles='border-[#424454]'
					onClick={() => {}}
				/>
			</div>
		</footer>
	);
};

export default TheFooter;
