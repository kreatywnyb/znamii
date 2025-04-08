import React, { useEffect } from "react";
import { motion } from "framer-motion";

type ToastProps = {
  message: string;
  subMessage?: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
};

const Toast: React.FC<ToastProps> = ({ 
  message, 
  subMessage, 
  type, 
  onClose, 
  duration = 4000
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed md:right-8 bottom-0 md:bottom-[10%] z-50 border flex w-auto min-w-80 -translate-x-1/2 transform items-center rounded-[2px] p-4 shadow-lg ${
        type === "success" ? "bg-[#CEF0D8] border-[#9CC5AC]" : "bg-red-200 border-red-800"
      }`}
    >
      <div className="mr-3">
        {type === "success" ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1D6527]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#1D6527]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <span className={`text-lg font-medium ${type === "success" ? "text-[#1D6527]" : "text-red-800"}`}>
          {message}
        </span>
        {subMessage && <span className="text-sm text-green-800">{subMessage}</span>}
      </div>
    </motion.div>
  );
};

export default Toast;