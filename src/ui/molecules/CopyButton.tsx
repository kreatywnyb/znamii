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
		<button
			type="button"
			onClick={copyToClipboard}
			aria-label="Skopiuj do schowka"
			className="mb-2 ml-2 hover:scale-105 active:scale-95"
		>
			<CopyIcon aria-hidden="true" />
		</button>
	);
};

export default CopyButton;
