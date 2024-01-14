import React from "react";
import { SessionCard } from "@/components/component/skills/skills";
import ProfileIcon from "@/components/component/profile-icon";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col ">
        <SessionCard buttonName="Learn ..." />
        <SessionCard buttonName="Learn ..." />
        <SessionCard buttonName="Learn ..." />
        <SessionCard buttonName="Learn ..." />
        <SessionCard buttonName="Learn ..." />
      </div>
    </div>
  );
};

export default Dashboard;
