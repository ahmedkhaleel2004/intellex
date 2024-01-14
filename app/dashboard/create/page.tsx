import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Create = () => {
	// write a function to find matching users
	const users = [
		{
			name: "Ahmed",
			photoURL:
				"https://lh3.googleusercontent.com/a/ACg8ocIhT5hvWlrQnHDnPjDTGy_zob50QOMYcOi1MyfWUtQ5PWM=s96-c",
			description: "I am a software engineer",
		},
	];

	return (
		<div className="flex flex-col items-center justify-center max-w-screen-md mx-auto">
			<h1 className="text-3xl font-bold m-4">Showing matching users</h1>
			{users.map((user: any) => (
				<Card className="m-4 min-w-[60%] flex flex-row items-center">
					<CardHeader className="flex-row items-center">
						<Avatar className="m-4">
							<AvatarImage src={user.photoURL} alt="User PFP" />
							<AvatarFallback>//</AvatarFallback>
						</Avatar>
						<div>
							<CardTitle>{user.name}</CardTitle>
							<CardDescription>{user.description}</CardDescription>
						</div>
					</CardHeader>
					<Button className="ml-6">Send a message</Button>
				</Card>
			))}
		</div>
	);
};

export default Create;
