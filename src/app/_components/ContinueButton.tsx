"use client";

import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
// import StepThree from "./StepThree";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-md mx-auto p-6">
      {step === 1 && <StepOne onNext={next} />}
      {step === 2 && <StepTwo onNext={next} onBack={back} />}
      {/* {step === 3 && <StepThree onBack={back} />} */}
    </div>
  );
}
