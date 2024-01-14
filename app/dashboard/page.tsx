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
                photoURL:
                  "https://cdn.discordapp.com/attachments/1162969161165705308/1163843941318262784/IMG_4255.jpg?ex=65afcb22&is=659d5622&hm=4cee3c4e1168a9cf79ebfee1b14645bd225dd61c6ae57316e70aef446d4fe941&",
                description: "Software Developer",
              },
              user2: {
                name: "Ahmed Khaleel",
                photoURL:
                  "https://avatars.githubusercontent.com/u/111161052?v=4",
                description: "Senior Analysist",
              },
              summary:
                "Shaaf Is a software developer interested in web development ;Ahmed is a software developer interested in AI. 2;Both are interested in creating a society changing product.",
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
      <div className="mb-4">
        <Link href="dashboard\create">
          <Button className="font-bold py-2 px-4 rounded">
            Create Meeting
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
