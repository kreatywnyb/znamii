"use client"
import React from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface AnimatedImageProps {
  src: string | StaticImport;
  alt: string;
  className?: string;
  maxZoom?: number; // Maximum zoom level (e.g. 1.2 = 20% zoom)
  showOverlay?: boolean; // Whether to show the animated overlay
  overlayColor?: string; // Color of the overlay
  overlayDuration?: number; // Duration of the overlay animation in seconds
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ 
  src, 
  alt, 
  className,
  maxZoom = 1.2, // Default max zoom of 20%
  showOverlay = true, // Overlay is shown by default
  overlayColor = "bg-slate-50", // Default color
  overlayDuration = 0.8 // Default duration
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger earlier
  
  // Get scroll progress relative to the component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll progress to zoom scale
  // This maps from 1 (no zoom) to maxZoom as user scrolls through the component
  const scale = useTransform(scrollYProgress, [0, 1], [1, maxZoom]);
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className || ""}`}>
      {/* White overlay that animates from bottom to top - only if showOverlay is true */}
      {showOverlay && (
        <motion.div 
          className={`absolute inset-0 ${overlayColor} z-10 origin-top`}
          initial={{ scaleY: 1 }}
          animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
          transition={{ duration: overlayDuration, ease: "easeInOut" }}
        />
      )}
      
      {/* Image with scroll-controlled zoom effect */}
      <motion.div style={{ scale }}>
        <Image 
          src={src} 
          alt={alt}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default AnimatedImage;