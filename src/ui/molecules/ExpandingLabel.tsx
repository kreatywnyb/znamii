import { useState, useEffect, useRef } from "react";

interface ExpandingLabelProps {
  text: string;
  isHovered: boolean; // Hover state comes from parent
}

const ExpandingLabel: React.FC<ExpandingLabelProps> = ({ text, isHovered }) => {
  const [measuredWidth, setMeasuredWidth] = useState(0);
  const [baseFontSize, setBaseFontSize] = useState(16); // Default to 16px, will update dynamically
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get the base font size from the root HTML element
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    setBaseFontSize(fontSize);

    if (textRef.current) {
      setMeasuredWidth(textRef.current.scrollWidth + (baseFontSize * 2)); // Measure text width + padding
    }
  }, [text]);

  return (
    <div className="absolute bottom-4 left-4 origin-bottom-left transition-all">
      {/* Small white square */}
      <div className="absolute right-0 top-0 h-4 w-4 bg-white"></div>

      {/* Main expanding div */}
      <div
        className="mr-4 mt-4 overflow-hidden whitespace-nowrap bg-black text-white transition-all duration-500 h-[4rem]"
        style={{
          width: isHovered ? `${(measuredWidth + baseFontSize * 2) / baseFontSize}rem` : "0px",
          height: isHovered ? `4rem` : "0px",
          paddingLeft: isHovered ? "1rem" : "0px",
          paddingRight: isHovered ? "1rem" : "0px",
          border: isHovered ? "1px solid white" : "",
        }}
      >
        <div
          ref={textRef}
          className="m-4 opacity-0 transition-all"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default ExpandingLabel;
