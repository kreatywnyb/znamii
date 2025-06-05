"use client"
import React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface AnimatedMediaProps {
  children: React.ReactNode;
  className?: string;
  maxZoom?: number; // Maximum zoom level (e.g. 1.2 = 20% zoom)
  showOverlay?: boolean; // Whether to show the animated overlay
  overlayColor?: string; // Color of the overlay
  overlayDuration?: number; // Duration of the overlay animation in seconds
  animateDesktop?: boolean; // Control animations on desktop
  animateMobile?: boolean; // Control animations on mobile
}

const AnimatedMedia: React.FC<AnimatedMediaProps> = ({ 
  children, 
  className,
  maxZoom = 1.2,
  showOverlay = true, 
  overlayColor = "bg-slate-50",
  overlayDuration = 0.8,
  animateDesktop = true,
  animateMobile = true
}) => {
  const ref = React.useRef(null);
  const [shouldAnimate, setShouldAnimate] = React.useState(true);
  
  // Check device type on mount
  React.useEffect(() => {
    const isMobile = window.innerWidth < 768; // Common breakpoint for mobile
    setShouldAnimate(isMobile ? animateMobile : animateDesktop);
  }, [animateDesktop, animateMobile]);
  
  const isInView = useInView(ref, { once: true, amount: 0.25 }); 
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, maxZoom]);
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className || ""}`}>
      {shouldAnimate && showOverlay && (
        <motion.div 
          className={`absolute inset-0 ${overlayColor} z-10 origin-top`}
          initial={{ scaleY: 1 }}
          animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
          transition={{ duration: overlayDuration, ease: "easeInOut" }}
        />
      )}
      
      {shouldAnimate ? (
        <motion.div style={{ scale }}>
          {children}
        </motion.div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default AnimatedMedia;