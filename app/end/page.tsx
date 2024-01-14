import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const End = () => {
  return (
    <div className="flex items-center min-h-screen">
      <Card className="w-1/2 h-64 mx-auto center">
        <CardHeader className="text-center text-2xl mb-16">
          How was your call?
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
            <RadioGroup>
              <div className="flex flex-row justify-center space-x-10">
                {[1, 2, 3, 4, 5].map((value) => (
                  <div
                    key={value}
                    className="flex flex-col items-center space-y-4"
                  >
                    <RadioGroupItem value={value.toString()} id={`r${value}`} />
                    <Label htmlFor={`r${value}`}>{value}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default End;
