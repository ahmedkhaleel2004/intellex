"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
	const router = useRouter();
	return (
		<div>
			<Button onClick={() => router.push("/session")}>
				Create Session
			</Button>
		</div>
	);
};

export default Dashboard;
