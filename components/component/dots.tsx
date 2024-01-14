// Dots.tsx
import React from "react";

const Dots = () => {
	const numberOfDots = 50; // You can adjust this number

	const createDots = () => {
		return Array.from({ length: numberOfDots }).map((_, index) => (
			<div
				key={index}
				className={`absolute rounded-full bg-black dark:bg-white opacity-20 
                    ${randomSize()} ${randomAnimation()}`}
				style={{
					top: `${Math.random() * 100}%`,
					left: `${Math.random() * 100}%`,
				}}
			/>
		));
	};

	const randomSize = () => {
		const sizes = ["w-1 h-1", "w-2 h-2", "w-3 h-3"];
		return sizes[Math.floor(Math.random() * sizes.length)];
	};

	const randomAnimation = () => {
		const animations = ["animate-move1", "animate-move2", "animate-move3"];
		return animations[Math.floor(Math.random() * animations.length)];
	};

	return (
		<div className="fixed top-0 left-0 w-full h-full pointer-events-none">
			{createDots()}
		</div>
	);
};

export default Dots;
