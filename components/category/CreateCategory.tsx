'use client';

import React, { SetStateAction, useState } from 'react';
import Actions from './Actions';
import { TCategory } from '@/types/Tcategory';

type Props = {
	setNewCategoryState: React.Dispatch<SetStateAction<TCategory>>;
};

const CreateCategory = ({ setNewCategoryState }: Props) => {
	const [itemState, setItemState] = useState<TCategory>({
		id: Math.floor(Math.random() * 10000),
		title: '',
		active: false,
	});

	const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setItemState((prev) => ({ ...prev, title: e.target.value }));
		setNewCategoryState((prev) => ({ ...prev, title: e.target.value }));
	};

	return (
		<article className='category__article'>
			<input
				type='text'
				placeholder='Enter Category Name'
				onChange={changeTitle}
				value={itemState.title}
				className='bg-transparent outline-none placeholder:text-[#696969] text-lg sm:text-base w-2/3 sm:w-auto'
			/>
			<Actions
				itemState={itemState}
				setItemState={setItemState}
			/>
		</article>
	);
};

export default CreateCategory;
