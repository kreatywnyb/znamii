"use client";
import React from "react";
import CopyIcon from "../icons/CopyIcon";

type CopyButtonProps = {
	textToCopy: string;
};

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(textToCopy);
	};

	return (
		<button onClick={copyToClipboard} className="mb-2 ml-2 hover:scale-105 active:scale-95">
			<CopyIcon />
		</button>
	);
};

export default CopyButton;
