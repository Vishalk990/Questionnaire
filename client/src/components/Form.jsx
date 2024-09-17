import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { PersonalInfo } from "./PersonalInfo";
import { ResignationReason } from "./ResignationReason";
import { SpecificEvent } from "./SpecificEvent";
import { DiscussionWithSupervisor } from "./DiscussionWithSupervisor";
import { RatingQuestions } from "./RatingQuestions";
import { useState } from "react";
import SuccessPage from "./SuccessPage";
import GradientBorder from "./GradientBorder";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/submit-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.log(`Error submitting Form ${error}`);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    reset();
  };

  if (isSubmitted) {
    return <SuccessPage onReset={handleReset} />;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:max-w-5xl mx-auto">
          <GradientBorder title="Exit Questionnaire">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <PersonalInfo register={register} errors={errors} />
              <ResignationReason register={register} watch={watch} />
              <SpecificEvent register={register} watch={watch} />
              <DiscussionWithSupervisor register={register} watch={watch} />
              <RatingQuestions register={register} errors={errors} />

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#428bca] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors duration-200 text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </GradientBorder>

          <DevTool control={control} />
        </div>
      </div>
    </>
  );
};

export default Form;
