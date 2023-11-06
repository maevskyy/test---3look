import Image from 'next/image';
import React, { SetStateAction } from 'react';

import deleteIcon from '@/public/icons/deleteWhite.svg';
import { TCategory } from '@/types/Tcategory';

type Props = {
	setPopUpForDelete: React.Dispatch<
		SetStateAction<{
			idToDelete: number;
			active: boolean;
		}>
	>;
	id: number;
	setAllCategories: React.Dispatch<SetStateAction<TCategory[]>>;
};

const DeletePopUp = ({ setPopUpForDelete, id, setAllCategories }: Props) => {
	const wrapperStyles = `fixed top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black bg-opacity-50 text-white p-8 rounded-l flex items-center justify-center`;
	const buttonStyles = `flex gap-[.8em] items-center justify-center rounded-[4px] hover:scale-[1.01] shadow-lg hover:shadow-[0_0_10px_#a139fd6c]  transition-transform bg-gradient-to-br from-[#A139FD] to-[#50BDFC]  px-[7em] py-[1em]`;

	const deleteHanlder = () => {
		setAllCategories((prev) => prev.filter((el) => el.id !== id));
		setPopUpForDelete({ idToDelete: 0, active: false });
	};

	return (
		<div className={wrapperStyles}>
			<div className='flex flex-col gap-[1.2em] items-center bg-[#272934] px-[1.2em] py-[1.5em] rounded-[4px] max-w-[400px] text-[16px] sm:text-[20px]'>
				<h5 className='text-xl text font-semibold'>Delete the Category?</h5>
				<p className='text-center text-[1em] text-[#9B9D9F]'>
					All templates in the category will.. (I dont have this options)
				</p>
				<button
					className={buttonStyles}
					onClick={deleteHanlder}
				>
					<Image
						src={deleteIcon}
						alt='delete button icon'
					/>
					<span className='text-base font-bold'>Delete</span>
				</button>
				<button
					className=' text-base text-[#FF5B5B]'
					onClick={() => setPopUpForDelete({ idToDelete: 0, active: false })}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default DeletePopUp;
