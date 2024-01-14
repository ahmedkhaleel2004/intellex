import React from "react";

import Link from "next/link";
import Summary from "@/components/component/summary/summary";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
	return (
		<div className="flex flex-col items-center justify-between min-h-screen">
			<div>
				<h1 className="text-center text-4xl font-bold mb-20 mt-10">
					Dashboard
				</h1>
				<Summary
					meetings={[
						{
							user1: {
								name: "Shaaf Shahzad",
								photoURL: "",
								description: "Software Developer",
							},
							user2: {
								name: "Ahmed Khaleel",
								photoURL:
									"https://avatars.githubusercontent.com/u/111161052?v=4",
								description: "Senior Analysist",
							},
							summary:
								"Shaaf is a software developer interested in web development ;Ahmed is a software developer interested in AI;Both are interested in creating a society changing product.",
						},
						// Add more meetings as needed
					]}
				/>
				<Summary
					meetings={[
						{
							user1: {
								name: "Mohammed Zaka",
								photoURL: "url-to-user3-photo",
								description: "User 3 description",
							},
							user2: {
								name: "Benjamin Avdullahu",
								photoURL: "",
								description: "User 4 description",
							},
							summary: "Point 4;Point 5;Point 6",
						},
						// Add more meetings as needed
					]}
				/>
			</div>
			<div className="mb-4 space-x-4">
				<Link href="dashboard\create">
					<Button className="font-bold py-2 px-4 rounded">
						Create Meeting
					</Button>
				</Link>
				<Link href="leaderboard">
					<Button className="font-bold py-2 px-4 rounded">
						View Leaderboard
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
