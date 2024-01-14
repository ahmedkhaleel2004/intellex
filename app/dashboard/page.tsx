import React from "react";

import Link from "next/link";
import Summary from "@/components/component/summary/summary";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div>
        <h1 className="text-center text-4xl mb-20">Dashboard</h1>
        <Summary
          meetings={[
            {
              user1: {
                name: "Shaaf Shahzad",
                photoURL: "url-to-user1-photo",
                description: "Software Developer",
              },
              user2: {
                name: "Benji Avdullahu",
                photoURL: "url-to-user2-photo",
                description: "Senior Analysist",
              },
              summary: "This is a summary of what Shaaf ;Point 2;Point 3",
            },
            // Add more meetings as needed
          ]}
        />
        <Summary
          meetings={[
            {
              user1: {
                name: "User 3",
                photoURL: "url-to-user3-photo",
                description: "User 3 description",
              },
              user2: {
                name: "User 4",
                photoURL: "url-to-user4-photo",
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
