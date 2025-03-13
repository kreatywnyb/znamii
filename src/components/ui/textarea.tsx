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
      if (typeof ref === 'function') ref(node);
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
          className="absolute border border-transparent top-[4px] left-[-2px] w-full p-4 text-darkGrey whitespace-pre-wrap break-words overflow-y-auto text-xs"
          style={{ 
            pointerEvents: "none", 
            minHeight: "60px",
            height: "calc(100% - 8px)", // Account for the top offset
            maxHeight: props.style?.height ? `${parseInt(props.style.height as string) - 8}px` : undefined
          }}
        >
          {getHighlightedText(inputValue)}
        </div>

        <textarea
          rows={6}
          ref={combinedRef}
          onScroll={handleScroll}
		  maxLength={maxCharacters+40}
          className={cn(
            "w-full border border-basicDark bg-transparent p-4 t text-darkGrey shadow-sm placeholder:font-geist placeholder:text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none text-xs invisible-scrollbar scrollbar-gutter",
            className
          )}
          value={inputValue}
          onChange={handleChange}
          style={{ 
            color: "transparent", 
            caretColor: "black",
            ...props.style
          }}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export { Textarea };