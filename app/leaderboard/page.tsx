"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const users = [
  {
    name: "Ahmed",
    photoURL:
      "https://lh3.googleusercontent.com/a/ACg8ocIhT5hvWlrQnHDnPjDTGy_zob50QOMYcOi1MyfWUtQ5PWM=s96-c",
    description: "I am a full stack developer",
    sessions: 5,
  },
  {
    name: "Shaaf",
    photoURL:
      "https://lh3.googleusercontent.com/a/ACg8ocIw3mNSUqD9UUA20GWCdyr5QBvj-U3Trcz0GwIjPg8qtPI=s96-c",
    description: "I am a machine learning and quantum computing researcher",
    sessions: 3,
  },
];

const Leaderboard = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [blockExplorerLink, setBlockExplorerLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        walletAddress: "0x57873816969c06Eb2dF7b56681E4A7502D2D0F69",
      };

      const response = await fetch("/api/verbwire", {
        method: "POST",
        body: JSON.stringify(data),
      }).catch(function (error) {
        console.log("Error: ", error);
      });
      return (response as Response).json();
    };
    postData().then((data) => {
      if (data.response && data.response.transaction_details) {
        if (data.response.transaction_details.transactionID !== undefined) {
          setTransactionId(data.response.transaction_details.transactionID);
        }
        if (data.response.transaction_details.transactionHash) {
          setTransactionHash(data.response.transaction_details.transactionHash);
        }
        if (data.response.transaction_details.blockExplorer) {
          setBlockExplorerLink(data.response.transaction_details.blockExplorer);
        }
      } else {
        if (data.error) {
          setError(data.error.message);
        }
      }
    });
  }

  return (
    <div className="flex flex-col items-center h-screen justify-center max-w-screen-md mx-auto">
      <Card className="w-[70%] rounded-3xl shadow-2xl m-4 justify-center items center text-center">
        <CardHeader className="p-8">
          <CardTitle className="text-4xl">Leaderboard</CardTitle>
          <CardDescription className="text-2xl">
            The top learners of this week!
          </CardDescription>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell className="text-2xl">Name</TableCell>
              <TableCell className="text-2xl">Sessions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: any, index) => (
              <TableRow key={index}>
                <TableCell
                  className={`text-lg flex items-center ml-[20%] ${
                    index === users.length - 1 ? "rounded-bl-3xl" : ""
                  }`}
                >
                  <Avatar className="m-4">
                    <AvatarImage src={user.photoURL} alt="User PFP" />
                    <AvatarFallback>{"//"}</AvatarFallback>
                  </Avatar>
                  {user.name}
                </TableCell>
                <TableCell
                  className={`text-lg ${
                    index === users.length - 1 ? "rounded-br-3xl" : ""
                  }`}
                >
                  {user.sessions}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <h2 className="text-2xl font-bold m-4">DEMO: Reward Token</h2>
      <Button onClick={handleSubmit} className="m-4">
        Send Reward
      </Button>
    </div>
  );
};

export default Leaderboard;
