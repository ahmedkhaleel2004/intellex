"use client";

import { HMSPrebuilt } from "@100mslive/roomkit-react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="h-screen">
      <HMSPrebuilt
        roomCode="fwf-ghpj-mts"
        onLeave={() => router.push("/dashboard")}
      />
    </div>
  );
};

export default Home;
