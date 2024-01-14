"use client";

import Navbar from "@/components/component/navbar";
import { Button } from "@/components/ui/button";
import { signInFunc } from "@/lib/sign-in-or-create";
import { SiGoogle } from "react-icons/si";
import { useRouter } from "next/navigation";

export default function Home() {

const router = useRouter();

	return (
		<>
			<Navbar />
			<main className="max-w-[60%] mx-auto">
				<div className="mt-[20vh] space-y-4 flex flex-col items-center">
					<h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-center">
						Swap skills, grow together.
					</h1>
					<h2 className="text-xl tracking-tight lg:text-2xl text-center">
						Join a diverse community of learners.
					</h2>
					<Button className="text-md flex items-center" onClick={() => signInFunc(router)}
					>
						<SiGoogle className="w-4 h-4 mr-2" />
						Sign in with Google
					</Button>
				</div>
			</main>
		</>
	);
}
