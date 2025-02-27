"use client";

import { useState } from "react";
import StepZero from "./components/StepZero";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";

export default function FormPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Add your form fields here
    name: "",
    email: "",
    handles: "",
    // ... other fields
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle your form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="mx-auto max-w-2xl p-6">
      <form onSubmit={handleSubmit}>
        {currentStep === 0 && (
          <StepZero formData={formData} setFormData={setFormData} onNext={handleNext} />
        )}
        {currentStep === 1 && (
          <StepOne formData={formData} setFormData={setFormData} onNext={handleNext} />
        )}
        {currentStep === 2 && (
          <StepTwo
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
        {currentStep === 3 && (
          <StepThree formData={formData} setFormData={setFormData} onNext={handleNext} />
        )}
        {currentStep === 4 && (
          <StepFour
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
        {currentStep === 5 && (
          <StepFive formData={formData} setFormData={setFormData} onNext={handleNext} />
        )}
      </form>
    </div>
  );
}
