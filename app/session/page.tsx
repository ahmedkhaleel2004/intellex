"use client";

import { HMSPrebuilt } from "@100mslive/roomkit-react";
import { useRouter } from "next/navigation";

const Session = () => {
  const router = useRouter();

  return (
    <div className="h-screen">
      Unfortunately, this page is not supported on the deployment.
      <br />
      Please run the app locally to use this feature.
      {/* <HMSPrebuilt
        roomCode="fwf-ghpj-mts" 
        onLeave={() => router.push("/dashboard")}
      /> */}
    </div>
  );
};

export default Session;
