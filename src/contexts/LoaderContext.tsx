"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface LoaderContextType {
	animationFinished: boolean;
	setAnimationFinished: (value: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
	const [animationFinished, setAnimationFinished] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const played = sessionStorage.getItem("heroAnimationPlayed");
			if (played === "true") {
				setAnimationFinished(true);
			}
		}
	}, []);

	return (
		<LoaderContext.Provider value={{ animationFinished, setAnimationFinished }}>
			{children}
		</LoaderContext.Provider>
	);
};

export const useLoader = () => {
	const context = useContext(LoaderContext);
	if (!context) {
		throw new Error("useLoader must be used within a LoaderProvider");
	}
	return context;
};
