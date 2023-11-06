"use client"
import CustomButton from '../CustomButton';
import checkIcon from '@/public/icons/check.svg';

type Props = {
    cancelFunction: () => void
    saveFunction: () => void
} 

const TheFooter = ({cancelFunction, saveFunction}: Props) => {
	return (
		<footer className='bg-footerBg z-20 fixed w-full text-xs sm:text-base bottom-0 py-5'>
			<div className='wrapper flex gap-[1.6em]'>
				<CustomButton
					title='Save Changes'
					styles=' bg-saveButtonGreenBg border-transparent'
					onClick={saveFunction}
					Icon={checkIcon}
				/>
				<CustomButton
					title='Cansel'
					styles='border-[#424454]'
					onClick={cancelFunction}
				/>
			</div>
		</footer>
	);
};

export default TheFooter;
