"use client";
import Image from "next/image";

import FormPage from "./_components/StepOne";

export default function Home() {
  return (
    <div className="flex items-center justify-center   ">
      <div className="w-[480px] h-[655px]">
        <FormPage
          onNext={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
}
