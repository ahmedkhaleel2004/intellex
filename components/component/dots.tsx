// Dots.tsx
import React from "react";
import { motion } from "framer-motion";

const Dots = () => {
	const numberOfDots = 100; // You can adjust this number

	const createDots = () => {
		return Array.from({ length: numberOfDots }).map((_, index) => (
			<motion.div
				key={index}
				className={`absolute rounded-full bg-black dark:bg-white opacity-20 
                    ${randomSize()}`}
				// start at a random position
				style={{
					top: `${Math.random() * 125 - 100}vh`,
					left: `${Math.random() * 125 + 100}vw`,
				}}
				// animate to bottom left
				animate={{
					x: "-200vw",
					y: "200vh",
				}}
				// transition settings
				transition={{
					duration: Math.random() * 20 + 20, // random duration between 15 and 30 seconds
					repeat: Infinity, // repeat animation indefinitely
					ease: "linear", // constant animation speed
					delay: Math.random() * 10, // random delay between 0 and 10 seconds
				}}
			/>
		));
	};

	const randomSize = () => {
		const sizes = ["w-1 h-1", "w-2 h-2", "w-3 h-3"];
		return sizes[Math.floor(Math.random() * sizes.length)];
	};

	return (
		<div className="fixed top-0 left-0 w-full h-full pointer-events-none">
			{createDots()}
		</div>
	);
};

export default Dots;
