'use client';
import { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';

import plusIcon from '@/public/icons/plus.svg';
import CustomButton from '@/components/CustomButton';
import Category from '@/components/category/Category';
import { TCategory } from '@/types/Tcategory';

import TheFooter from '@/components/theFooter/TheFooter';
import CreateCategory from '@/components/category/CreateCategory';
import DeletePopUp from '@/components/DeletePopUp';
import { fullUpdate, getCategories } from '@/services/category';
import { useSearchParams } from 'next/navigation';

// i should definetly distructure this components at least to two components
export default function Home() {
  const searchParams = useSearchParams()
  const newItemSnippet: TCategory = {
		id: Math.floor(Math.random() * 10000),
		title: '',
		active: false,
	};
  //staates
	const [isCreateCategoryOpen, setIsCreateCategoryOpen] = useState(false);
	const [popUpForDelete, setPopUpForDelete] = useState({
		idToDelete: 0,
		active: false,
	});
  const [query, setQuery] = useState('')
	const [notChagedCategories, setNotChagedCategories] = useState<TCategory[]>([]);
	const [allCategories, setAllCategories] = useState<TCategory[]>([]);
  const [newCategoryState, setNewCategoryState] = useState<TCategory>(newItemSnippet);

  //some weird logic for footer
	const isFooterOpen =
		JSON.stringify(notChagedCategories) !== JSON.stringify(allCategories) ||
		isCreateCategoryOpen;
  

  // func for canceling changes ( button in footer)
	const canselFunction = () => {
		setAllCategories(notChagedCategories);
		setIsCreateCategoryOpen(false);
	};
  // func for save changes ( button in footer)
	const saveFunction = () => {
    //just omg
		if (newCategoryState.title.length !== 0) {
			setAllCategories((prev) => {
				const updatedCategories = [...prev, newCategoryState];
				fullUpdate(updatedCategories).then((res) => setNotChagedCategories(res.data));
				return updatedCategories;
			});
		}
		fullUpdate(allCategories).then((res) => setNotChagedCategories(res.data));
		setNewCategoryState(newItemSnippet);
		setIsCreateCategoryOpen(false);
	};
  //func for deleting category (delete Popup)
	const deleteHanlder = (idToDelete: number) => {
		setPopUpForDelete({ idToDelete, active: true });
	};

  // for search
  useEffect(() => {
    const searchValue = searchParams.get('search');
    if (searchValue) {
      const filteredCategories = allCategories.filter(category =>
        category.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setQuery(searchValue)
      setAllCategories(filteredCategories);
    } else {
      setQuery('')
      setNotChagedCategories(notChagedCategories);
      setAllCategories(notChagedCategories);
    }
  }, [searchParams]);

  //for fetching categorys from api
	useEffect(() => {
		getCategories()
			.then((res) => {
				setAllCategories(res.data);
				setNotChagedCategories(res.data);
			})
			.catch((err) => {
				//i need to handle this
				console.log(err);
			});
	}, []);

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
			{isFooterOpen && query == '' && (
				<TheFooter
					cancelFunction={canselFunction}
					saveFunction={saveFunction}
				/>
			)}
			{popUpForDelete.active  && (
				<DeletePopUp
					setPopUpForDelete={setPopUpForDelete}
					id={popUpForDelete.idToDelete}
					setAllCategories={setAllCategories}
				/>
			)}
		</>
	);
}
