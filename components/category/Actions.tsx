import Image from 'next/image';
import Toggle from './Toggle';
import deleteIcon from '@/public/icons/delete.svg';
import burgerIcon from '@/public/icons/burgerDrag.svg';
import { DragControls } from 'framer-motion';
import { TCategory } from '@/types/Tcategory';

type Props = {
	itemState: TCategory;
	setItemState: React.Dispatch<React.SetStateAction<TCategory>>;
	controls?: DragControls;
	deleteHanlder?: (id: number) => void;
};

const Actions = ({
	itemState,
	setItemState,
	controls,
	deleteHanlder,
}: Props) => {
    //for deleting category
	const deleteFunction = (id: number) => {
		if (deleteHanlder) {
			deleteHanlder(id);
		}
	};
    //for drag and drop
	const controlersHandler = (e: React.PointerEvent<HTMLDivElement>) => {
		if (controls) {
			controls.start(e);
		}
	};
	return (
		<div className='flex items-center sm:gap-5 justify-between relative  select-none'>
			<Toggle
				creationForm
				condition={itemState.active}
				setCondition={setItemState}
			/>
			<button
				onClick={() => deleteFunction(itemState.id as number)}
			>
				<Image
					alt='delete button'
					src={deleteIcon}
					className='w-[39px] h-[39px] sm:w-[26px] sm:h-[26px]'
				/>
			</button>
			<div
				className='w-[15px] h-[25px] cursor-pointer  absolute top-0	right-0'
				onPointerDown={controlersHandler}
			></div>
			<button
				className=''
			>
				<Image
					alt='drag and drop button'
					src={burgerIcon}
				/>
			</button>
		</div>
	);
};

export default Actions;
