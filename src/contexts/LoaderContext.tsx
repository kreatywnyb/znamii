// contexts/LoaderContext.tsx - Updated with bot detection
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoaderContextType {
  animationFinished: boolean;
  setAnimationFinished: (finished: boolean) => void;
  isBot: boolean;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

interface LoaderProviderProps {
  children: ReactNode;
  isBot?: boolean;
}

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ 
  children, 
  isBot = false 
}) => {
  // If it's a bot, animations are immediately "finished"
  const [animationFinished, setAnimationFinished] = useState(isBot);

  return (
    <LoaderContext.Provider value={{ 
      animationFinished, 
      setAnimationFinished, 
      isBot 
    }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};