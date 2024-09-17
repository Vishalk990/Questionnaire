import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { PersonalInfo } from "./PersonalInfo";
import { ResignationReason } from "./ResignationReason";
import { SpecificEvent } from "./SpecificEvent";
import { DiscussionWithSupervisor } from "./DiscussionWithSupervisor";
import { RatingQuestions } from "./RatingQuestions";
import { useState } from "react";
import SuccessPage from "./SuccessPage";
import Navbar from "./Navbar";

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
      <Navbar />
      <div className="min-h-screen  bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:max-w-5xl mx-auto ">
          <h1 className="text-3xl text-primary font-semibold mb-8 mt-2 text-center text-gray-900">
            Exit Questionnaire
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <PersonalInfo register={register} errors={errors} />
            <ResignationReason register={register} />
            <SpecificEvent register={register} watch={watch} />
            <DiscussionWithSupervisor register={register} watch={watch} />
            <RatingQuestions register={register} />

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors duration-200 text-lg"
              >
                Submit Feedback
              </button>
            </div>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </>
  );
};

export default Form;
