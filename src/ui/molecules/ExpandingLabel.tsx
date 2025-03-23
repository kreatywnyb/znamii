import { useState, useEffect, useRef } from "react";

interface ExpandingLabelProps {
	text: string;
	isHovered: boolean;
}

const ExpandingLabel: React.FC<ExpandingLabelProps> = ({ text, isHovered }) => {
	const [measuredWidth, setMeasuredWidth] = useState(0);
	const [baseFontSize, setBaseFontSize] = useState(16);
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
		setBaseFontSize(fontSize);

		if (textRef.current) {
			setMeasuredWidth(textRef.current.scrollWidth + (fontSize * 1.313 + 1) * 2);
		}
	}, [text]);
	return (
		<div className="absolute bottom-4 left-4 origin-bottom-left transition-all">
			<div className="absolute right-0 top-0 h-4 w-4 bg-white"></div>

			<div
				className="mr-4 mt-4 flex h-[4rem] items-center justify-center overflow-hidden whitespace-nowrap bg-black text-center text-[1.313rem] text-white transition-all duration-500"
				style={{
					width: isHovered ? `${measuredWidth / baseFontSize}rem` : "0px",
					height: isHovered ? `3.313rem` : "0px",
					paddingLeft: isHovered ? "1rem" : "0px",
					paddingRight: isHovered ? "1rem" : "0px",
					border: isHovered ? "1px solid white" : "",
				}}
			>
				<div
					ref={textRef}
					className="opacity-0 transition-all"
					style={{ opacity: isHovered ? 1 : 0 }}
				>
					{text}
				</div>
			</div>
		</div>
	);
};

export default ExpandingLabel;
