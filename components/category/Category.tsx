'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { Reorder, useDragControls } from 'framer-motion';
import { TCategory } from '@/types/Tcategory';
import Actions from './Actions';

type Props = {
	data: TCategory;
	setAllCategories: any;
	deleteHanlder: (idToDelete: string) => void;
};

const Category = ({ data, setAllCategories, deleteHanlder }: Props) => {
	// controls for grag and drop
	const controls = useDragControls();
	const [itemState, setItemState] = useState<TCategory>(data);

	const changeTitle = (e: ChangeEvent<HTMLInputElement>) =>
		setItemState((prev) => ({ ...prev, title: e.target.value }));

	useEffect(() => {
		setAllCategories((prevCategories: TCategory[]) => {
			const index = prevCategories.findIndex((category) => category.id === itemState.id);
			const updatedCategories = [...prevCategories];
			updatedCategories[index] = itemState;
			return updatedCategories;
		});
	}, [itemState]);


    useEffect(() => {
        setItemState(data)
    }, [data])

    
	return (
		<Reorder.Item
			value={data}
			dragListener={false}
			dragControls={controls}
		>
			<article className='category__article'>
				<input
					type='text'
					placeholder='Enter Category Name'
					disabled
					onChange={changeTitle}
					value={itemState.title}
					className='bg-transparent outline-none placeholder:text-[#696969] text-lg sm:text-base w-2/3 sm:w-auto'
				/>
				<Actions
					controls={controls}
					itemState={itemState}
					setItemState={setItemState}
					deleteHanlder={deleteHanlder}
                    
				/>
			</article>
		</Reorder.Item>
	);
};

export default Category;
