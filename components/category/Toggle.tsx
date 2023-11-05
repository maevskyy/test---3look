import { TCategory } from '@/types/Tcategory';
import React from 'react';

type Props = {
    creationForm?: boolean;
	condition: boolean;
	setCondition: React.Dispatch<React.SetStateAction<TCategory>>;
};

const Toggle = ({ condition, setCondition }: Props) => {
	const buttonStyles = `flex ${
		condition ? 'flex-row-reverse' : 'flex-row'
	}  rounded-full p-2 bg-[#272934] items-center gap-1 transition`;

	const spanStyles = `${
		condition ? 'text-[#07D41B]' : 'text-[#9B9D9F] opacity-75'
	} sm:text-[11px] leading-3 font-bold inline-block w-5 `;

	const circleStyles = `${
		condition
			? 'bg-[#07D41B] translate-x-[.5px] transition-transform'
			: 'bg-[#9B9D9F] opacity-75  transition-transform translate-x-[-.5px]'
	} w-5 h-5 sm:w-3 sm:h-3 rounded-full `;

    const toggleHandler = () =>{
         setCondition((prev) => ({ ...prev, condition: !condition }))   
    }
    

	return (
		<button
			onClick={toggleHandler}
			className={buttonStyles}
		>
			<div className={circleStyles}></div>
			<span className={spanStyles}>{condition ? 'On' : 'Off'}</span>
		</button>
	);
};

export default Toggle;
