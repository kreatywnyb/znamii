import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface ExpandingLabelProps {
    text: string;
    isHovered: boolean;
    parentInView?: boolean; 
}

const ExpandingLabel: React.FC<ExpandingLabelProps> = ({ text, isHovered, parentInView = true }) => {
    const [measuredWidth, setMeasuredWidth] = useState(0);
    const [baseFontSize, setBaseFontSize] = useState(16);
    const [isMobile, setIsMobile] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);
    
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 1,
    });
    
    const shouldCheckInView = parentInView && !isAnimating;
    
    const isExpanded = isHovered || (isMobile && inView && shouldCheckInView);

    useEffect(() => {
        const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        setBaseFontSize(fontSize);

        if (textRef.current) {
            setMeasuredWidth(textRef.current.scrollWidth + (fontSize * 1.313 + 1) * 2);
        }

        const checkIfMobile = () => {
            const mobileQuery = window.matchMedia("(max-width: 768px)");
            setIsMobile(mobileQuery.matches);
        };

        checkIfMobile();

        const mediaQueryList = window.matchMedia("(max-width: 768px)");
        mediaQueryList.addEventListener("change", checkIfMobile);

        return () => {
            mediaQueryList.removeEventListener("change", checkIfMobile);
        };
    }, [text]);
    
    useEffect(() => {
        if (parentInView) {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 600);
            
            return () => clearTimeout(timer);
        }
    }, [parentInView]);

    return (
        <div 
            ref={ref}
            className="absolute bottom-4 left-4 origin-bottom-left transition-all"
        >
            <div className="absolute right-0 top-0 h-4 w-4 bg-white"></div>

            <div
                className="mr-4 mt-4 flex h-[4rem] items-center justify-center overflow-hidden whitespace-nowrap bg-black text-center text-[1.313rem] text-white transition-all duration-500"
                style={{
                    width: isExpanded ? `${measuredWidth / baseFontSize}rem` : "0px",
                    height: isExpanded ? "3.313rem" : "0px",
                    paddingLeft: isExpanded ? "1rem" : "0px",
                    paddingRight: isExpanded ? "1rem" : "0px",
                    border: isExpanded ? "1px solid white" : "",
                }}
            >
                <div
                    ref={textRef}
                    className="opacity-0 transition-all"
                    style={{ opacity: isExpanded ? 1 : 0 }}
                >
                    {text}
                </div>
            </div>
        </div>
    );
};

export default ExpandingLabel;