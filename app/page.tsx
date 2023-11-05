'use client';
import { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';

import plusIcon from '@/public/icons/plus.svg';
import CustomButton from '@/components/CustomButton';
import Category from '@/components/category/Category';
import { mockCategory } from '@/components/mockData';
import { TCategory } from '@/types/Tcategory';

import TheFooter from '@/components/theFooter/TheFooter';
import CreateCategory from '@/components/category/CreateCategory';
import DeletePopUp from '@/components/DeletePopUp';

export default function Home() {
	const [isCreateCategoryOpen, setIsCreateCategoryOpen] = useState(false);
	const [popUpForDelete, setPopUpForDelete] = useState({
		idToDelete: '',
		condition: false,
	});
	const [notChagedCategories, setNotChagedCategories] =
		useState<TCategory[]>(mockCategory);
	const [allCategories, setAllCategories] = useState<TCategory[]>(mockCategory);
	const newItemSnippet: TCategory = {
		id: String(Math.floor(Math.random() * 10000)),
		title: '',
		condition: false,
	};

	const [newCategoryState, setNewCategoryState] = useState<TCategory>(newItemSnippet);

	const isFooterOpen =
		JSON.stringify(notChagedCategories) !== JSON.stringify(allCategories) ||
		isCreateCategoryOpen;

	const canselFunction = () => {
		setAllCategories(notChagedCategories);
		setIsCreateCategoryOpen(false);
	};

	const saveFunction = () => {
		if (newCategoryState.title.length !== 0) {
			setAllCategories((prev) => {
				const updatedCategories = [...prev, newCategoryState];
				setNotChagedCategories(updatedCategories);
				return updatedCategories;
			});
		}
		setNewCategoryState(newItemSnippet);
		setNotChagedCategories(allCategories);
		setIsCreateCategoryOpen(false);
	};

	const deleteHanlder = (idToDelete: string) => {
		setPopUpForDelete({ idToDelete, condition: true });
	};

	const mainStyles = `mt-[133px] md:mt-[77px] pt-10 text-white m-auto flex flex-col text-base w-full px-8 sm:w-[41.5em] items-center gap-3`;

	return (
		<>
			<main className={mainStyles}>
				<CustomButton
					title='Create a Category'
					onClick={() => setIsCreateCategoryOpen(!isCreateCategoryOpen)}
					Icon={plusIcon}
					styles='createCategory__gradient border-transparent w-full'
				/>
				{isCreateCategoryOpen && (
					<CreateCategory setNewCategoryState={setNewCategoryState} />
				)}
				<Reorder.Group
					axis='y'
					values={allCategories}
					onReorder={setAllCategories}
					className='w-full flex flex-col gap-3'
				>
					{allCategories.map((el) => (
						<Category
							data={el}
							key={el.id}
							setAllCategories={setAllCategories}
							deleteHanlder={deleteHanlder}
						/>
					))}
				</Reorder.Group>
			</main>
			{isFooterOpen && (
				<TheFooter
					cancelFunction={canselFunction}
					saveFunction={saveFunction}
				/>
			)}
			{popUpForDelete.condition && (
				<DeletePopUp
					setPopUpForDelete={setPopUpForDelete}
					id={popUpForDelete.idToDelete}
          setAllCategories={setAllCategories}
				/>
			)}
		</>
	);
}
