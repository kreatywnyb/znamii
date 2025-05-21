import * as React from "react";
import { cn } from "@/lib/utils";

// Interface for the clear method
export interface TextareaMethods {
	clear: () => void;
}

// Props interface
interface TextareaProps extends React.ComponentProps<"textarea"> {
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	maxCharacters?: number;
	clearMethod?: React.RefObject<TextareaMethods | null>;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, value = "", onChange, maxCharacters = 360, clearMethod, ...props }, ref) => {
		const [inputValue, setInputValue] = React.useState<string>(value || "");
		const textareaRef = React.useRef<HTMLTextAreaElement>(null);
		const highlightRef = React.useRef<HTMLDivElement>(null);

		const combinedRef = (node: HTMLTextAreaElement) => {
			textareaRef.current = node;
			if (typeof ref === "function") ref(node);
			else if (ref) ref.current = node;
		};

		React.useImperativeHandle(clearMethod, () => ({
			clear: () => {
				setInputValue("");
				if (textareaRef.current) {
					textareaRef.current.value = "";

					// Create and dispatch a change event to ensure React Hook Form is updated
					const event = new Event("change", { bubbles: true });
					textareaRef.current.dispatchEvent(event);

					// If there's an onChange handler, call it with an empty value
					if (onChange) {
						const syntheticEvent = {
							target: { value: "" },
							currentTarget: { value: "" },
						} as unknown as React.ChangeEvent<HTMLTextAreaElement>;
						onChange(syntheticEvent);
					}
				}
			},
		}));

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
			if (text.length <= maxCharacters) {
				return text; // No need for highlighting if under the limit
			}

			// Split text only at the boundary between regular and highlighted text
			const regularText = text.substring(0, maxCharacters);
			const highlightedText = text.substring(maxCharacters);

			return (
				<>
					{regularText}
					<span style={{ color: "red" }}>{highlightedText}</span>
				</>
			);
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

					/* Desktop-only extra padding for scrollbar width */
					/* .desktop-scrollbar-padding {
            padding-right: 1.5rem;
          } */
				`}</style>
				<div
					ref={highlightRef}
					className="invisible-scrollbar desktop-scrollbar-padding absolute left-[0px] top-[4px] w-full overflow-y-auto whitespace-pre-wrap break-words border border-transparent p-4 pr-8 text-[1.063rem] leading-[1.5rem] tracking-normal text-darkGrey"
					style={{
						pointerEvents: "none",
						minHeight: "60px",
						height: "calc(100% - 12px)", // Account for the top offset
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
						"scrollbar-gutter w-full resize-none border border-basicDark bg-transparent bg-white p-4 pr-6 text-[1.063rem] text-darkGrey shadow-sm outline placeholder:text-[1.063rem] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
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
