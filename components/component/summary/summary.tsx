import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"; // replace with your actual path
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  name: string;
  photoURL: string;
  description: string;
}

interface Meeting {
  user1: User;
  user2: User;
  summary: string;
}

interface SummaryProps {
  meetings: Meeting[];
}

const Summary: React.FC<SummaryProps> = ({ meetings }) => {
  return (
    <div className="flex justify-center">
      {meetings.map((meeting, index) => (
        <Card key={index} className="m-4 w-[38rem]  flex flex-col ">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row items-center mr-4">
              <Avatar className="m-4">
                <AvatarImage src={meeting.user1.photoURL} alt="User 1 PFP" />
                <AvatarFallback>{"//"}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{meeting.user1.name}</CardTitle>
                <CardDescription>{meeting.user1.description}</CardDescription>
              </div>
            </div>
            <div className="flex flex-row items-center mr-4">
              <Avatar className="m-4">
                <AvatarImage src={meeting.user2.photoURL} alt="User 2 PFP" />
                <AvatarFallback>{"//"}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{meeting.user2.name}</CardTitle>
                <CardDescription>{meeting.user2.description}</CardDescription>
              </div>
            </div>
          </div>
          <div className="w-full mt-8">
            <ul className="list-disc list-inside pl-5 text-left">
              {meeting.summary.split(";").map((point, index) => (
                <li key={index} className="my-2 pl-5">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Summary;
