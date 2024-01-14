// skills.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type SessionCardProps = {
  buttonName: string;
};

export const SessionCard: React.FC<SessionCardProps> = ({ buttonName }) => {
  return (
    <div className="flex mt-5">
      <Card className="w-[400px] h-[200px] shadow-lg rounded-lg overflow-hidden">
        <CardHeader className=" text-white text-lg font-bold p-5">
          <CardTitle>Create Session</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center p-5">
          <Link href="/session">
            <Button>{buttonName}</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
