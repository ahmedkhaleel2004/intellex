import Navbar from "@/components/component/navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="max-w-[60%] mx-auto">
				<div className="mt-[20vh]">
					<h1 className="ml-4 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-center">
						Swap skills, grow together.
					</h1>
					<h2 className="ml-4 mt-4 text-xl tracking-tight lg:text-2xl text-center">
						Intellex is a community of learners.
					</h2>
				</div>
			</main>
		</>
	);
}
