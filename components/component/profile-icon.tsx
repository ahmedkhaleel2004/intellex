"use client";
import React from "react";
import { useRouter } from "next/router";
import { userSignOut } from "@/lib/firebase";
import { Button } from "@/components/ui/button";

const SignOutButton: React.FC = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await userSignOut();
      router.push("/");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
};

export default SignOutButton;
