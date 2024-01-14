import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/hooks/use-auth";

const Dashboard = () => {
	const router = useRouter();
	const userData = useAuth(router);

	return (
		<div>
			<p>dashboard</p>
		</div>
	);
};

export default Dashboard;
