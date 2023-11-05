import Image from 'next/image';

type Props = {
	title: string;
	styles?: string;
	Icon?: string;
	onClick: () => void;
};

const CustomButton = ({ styles, Icon, onClick, title }: Props) => {
	const buttonStyles = `flex gap-[.6em] items-center w-full py-[1.25em] justify-center
     border-[3px] hover:opacity-80 transition-opacity rounded-[4px]
     ${styles}`;

	return (
		<button className={buttonStyles} onClick={onClick}>
			{Icon && (
				<Image
					width={20}
					height={20}
					src={Icon}
					alt='complete button'
				/>
			)}
			<span className='text-white text-[1em] font-bold'>{title}</span>
		</button>
	);
};

export default CustomButton;
