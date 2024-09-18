import { useState } from 'react';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { PersonalInfo } from "./PersonalInfo";
import { ResignationReason } from "./ResignationReason";
import { SpecificEvent } from "./SpecificEvent";
import { DiscussionWithSupervisor } from "./DiscussionWithSupervisor";
import { RatingQuestions } from "./RatingQuestions";
import SuccessPage from "./SuccessPage";
import GradientBorder from "./GradientBorder";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitError(null);
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
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred while submitting the form');
      }
    } catch (error) {
      console.error(`Error submitting Form: ${error}`);
      setSubmitError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    reset();
  };

  if (isSubmitted) {
    return <SuccessPage onReset={handleReset} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="md:max-w-5xl mx-auto">
        <GradientBorder title="Exit Questionnaire">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <PersonalInfo register={register} errors={errors} />
            <ResignationReason register={register} watch={watch} />
            <SpecificEvent register={register} watch={watch} />
            <DiscussionWithSupervisor register={register} watch={watch} />
            <RatingQuestions register={register} errors={errors} />

            {submitError && (
              <div className="text-center text-red-600 bg-red-100 border border-red-400 rounded p-3">
                {submitError}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-2 bg-[#428bca] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors duration-200 text-lg ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </GradientBorder>

        <DevTool control={control} />
      </div>
    </div>
  );
};

export default Form;