"use client";

import Navbar from "@/components/component/navbar";
import { Button } from "@/components/ui/button";
import { SiGoogle } from "react-icons/si";
import { motion } from "framer-motion";

export default function Home() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // Increase this value for less overlap
			},
		},
	};

	const item = {
		hidden: { y: -10, opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 20,
				duration: 3, // Increase this value for slower animation
				ease: "easeOut", // This will make the animation smoother
			},
		},
	};

	return (
		<>
			<Navbar />
			<main className="max-w-[60%] mx-auto">
				<motion.div
					className="mt-[25vh] space-y-4 flex flex-col items-center"
					variants={container}
					initial="hidden"
					animate="show"
				>
					<motion.h1
						className="scroll-m-20 text-5xl font-bold tracking-tight lg:text-6xl text-center"
						variants={item}
					>
						Swap skills, grow together.
					</motion.h1>
					<motion.h2
						className="max-w-[60%] text-center text-xl text-muted-foreground"
						variants={item}
					>
						Connect and exchange skills with peers, expanding your talents and
						spreading knowledge.
					</motion.h2>
					<motion.div variants={item}>
						<Button className="mt-8 text-md flex items-center">
							<SiGoogle className="w-5 h-5 mr-2" />
							Sign in with Google
						</Button>
					</motion.div>
				</motion.div>
			</main>
		</>
	);
}
