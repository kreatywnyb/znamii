import * as React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.ComponentProps<"textarea"> {
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	maxCharacters?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, value = "", onChange, maxCharacters = 360, ...props }, ref) => {
		const [inputValue, setInputValue] = React.useState<string>(value || "");
		const textareaRef = React.useRef<HTMLTextAreaElement>(null);
		const highlightRef = React.useRef<HTMLDivElement>(null);
		const combinedRef = (node: HTMLTextAreaElement) => {
			textareaRef.current = node;
			if (typeof ref === "function") ref(node);
			else if (ref) ref.current = node;
		};

		React.useEffect(() => {
			setInputValue(value || "");
		}, [value]);

		const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setInputValue(e.target.value);
			if (onChange) onChange(e);
		};

		const handleScroll = () => {
			if (textareaRef.current && highlightRef.current) {
				highlightRef.current.scrollTop = textareaRef.current.scrollTop;
			}
		};

		const getHighlightedText = (text: string) => {
			return text.split("").map((char, index) => (
				<span key={index} style={{ color: index >= maxCharacters ? "red" : "inherit" }}>
					{char}
				</span>
			));
		};

		return (
			<div className="relative w-full">
				<style jsx>{`
					.invisible-scrollbar {
						scrollbar-width: none; /* Firefox */
						-ms-overflow-style: none; /* IE and Edge */
					}

					.invisible-scrollbar::-webkit-scrollbar {
						display: none; /* Chrome, Safari, Opera */
					}

					/* For preserving scrollbar layout space */
					.scrollbar-gutter {
						scrollbar-gutter: stable; /* Modern browsers */
					}
				`}</style>
				<div
					ref={highlightRef}
					className="absolute left-[-1px] top-[4px] w-full overflow-y-auto whitespace-pre-wrap break-words border border-transparent p-4 text-[1.063rem] text-darkGrey"
					style={{
						pointerEvents: "none",
						minHeight: "60px",
						height: "calc(100% - 8px)", // Account for the top offset
						maxHeight: props.style?.height
							? `${parseInt(props.style.height as string) - 8}px`
							: undefined,
					}}
				>
					{getHighlightedText(inputValue)}
				</div>

				<textarea
					rows={6}
					ref={combinedRef}
					onScroll={handleScroll}
					maxLength={maxCharacters + 40}
					className={cn(
						"invisible-scrollbar scrollbar-gutter w-full resize-none border border-basicDark bg-transparent bg-white p-4 text-[1.063rem] text-darkGrey shadow-sm placeholder:text-[1.063rem] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
						className,
					)}
					value={inputValue}
					onChange={handleChange}
					style={{
						color: "transparent",
						caretColor: "black",
						...props.style,
					}}
					{...props}
				/>
			</div>
		);
	},
);

Textarea.displayName = "Textarea";
export { Textarea };
