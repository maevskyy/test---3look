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
	deleteHanlder?: (id: string) => void;
};

const Actions = ({
	itemState,
	setItemState,
	controls,
	deleteHanlder,
}: Props) => {
	const deleteFunction = (id: string) => {
		if (deleteHanlder) {
			deleteHanlder(id);
		}
	};

	const controlersHandler = (e: React.PointerEvent<HTMLDivElement>) => {
		if (controls) {
			controls.start(e);
		}
	};

	return (
		<div className='flex items-center sm:gap-5 justify-between relative  select-none'>
			<Toggle
				creationForm
				condition={itemState.condition}
				setCondition={setItemState}
			/>
			<button
				onClick={() => deleteFunction(itemState.id as string)}
			>
				<Image
					alt='delete button'
					src={deleteIcon}
					className='w-[39px] h-[39px] sm:w-[26px] sm:h-[26px]'
				/>
			</button>
			<div
				className='w-[15px] h-[25px] cursor-pointer  hidden sm:block absolute top-0	right-0'
				onPointerDown={controlersHandler}
			></div>
			<button
				className='hidden sm:block'
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
