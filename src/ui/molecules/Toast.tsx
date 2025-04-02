import React from "react";
import { motion } from "framer-motion";

type ToastProps = {
  message: string;
  subMessage?: string;
  type: "success" | "error";
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, subMessage, type, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed right-4 top-[80%] z-50 flex w-auto min-w-80 -translate-x-1/2 transform items-center rounded-[2px] p-4 shadow-lg ${
        type === "success" ? "bg-green-50" : "bg-red-200"
      }`}
    >
      <div className="mr-3">
        {type === "success" ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
            {/* <CheckIcon className="h-6 w-6 text-green-800" /> */}
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
            {/* <XIcon className="h-6 w-6 text-red-800" /> */}
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <span className={`text-lg font-medium ${type === "success" ? "text-green-800" : "text-red-800"}`}>
          {message}
        </span>
        {subMessage && <span className="text-sm text-gray-600">{subMessage}</span>}
      </div>
      <button
        onClick={onClose}
        className="ml-auto text-gray-400 hover:text-gray-600 focus:outline-none"
      >
        {/* <XIcon className="h-5 w-5" /> */}
      </button>
    </motion.div>
  );
};

export default Toast;