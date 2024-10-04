import { useState } from "react";
import { CustomRatingBar } from "./CustomRatingBar";

export const RatingQuestions = ({ register, errors }) => {
  const questions = [
    {
      questionText: "Working relationship with your current Supervisor/HOD",
    },
    {
      questionText: "Working relationship with fellow employees",
    },
    {
      questionText: "Salary and Benefits for your position",
    },
    {
      questionText: "Opportunities for career advancement",
    },
    {
      questionText: "Work-life balance as a professor/staff",
    },
    {
      questionText: "Support from the university administration",
    },
    {
      questionText: "Availability of teaching/working resources",
    },
    {
      questionText: "Clarity of job responsibilities and workload distribution",
    },
    {
      questionText: "Professional development opportunities (workshops, seminars)",
    },
    {
      questionText: "Your Overall Experience",
    },
  ];

  const [ratings, setRatings] = useState({});
  const [hoveredRatings, setHoveredRatings] = useState({});

  const handleMouseEnter = (index, rating) => {
    setHoveredRatings((prev) => ({
      ...prev,
      [index]: rating,
    }));
  };

  const handleMouseLeave = (index) => {
    setHoveredRatings((prev) => ({
      ...prev,
      [index]: 0,
    }));
  };

  const handleClick = (index, rating) => {
    setRatings((prev) => ({
      ...prev,
      [index]: rating,
    }));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-4 text-[#003399]">
          Rate Your Experience
        </h2>
        <p className="mb-4 text-gray-600">
          Please rate the following aspects with 1 being poor and 5 being
          outstanding:
        </p>
        {questions.slice(0, 9).map((question, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-medium mb-2 text-gray-700">{question.questionText}</h3>
            <div className="md:w-3/4 mx-auto">
              <CustomRatingBar
                value={hoveredRatings[index] || ratings[index] || 0}
                onChange={(rating) => handleClick(index, rating)}
                onMouseEnter={(rating) => handleMouseEnter(index, rating)}
                onMouseLeave={() => handleMouseLeave(index)}
                name={`questions[${index}].rating`}
                register={register}
                error={errors[`questions[${index}].rating`]}
              />
              <input
                type="hidden"
                {...register(`questions[${index}].questionText`)}
                value={question.questionText}
              />
            </div>
          </div>
        ))}

       
        <br />
        <div className="mb-6">
          <h3 className="font-medium mb-2 text-gray-700">{questions[9].questionText}</h3>
          <div className="md:w-3/4 mx-auto">
            <CustomRatingBar
              value={hoveredRatings[9] || ratings[9] || 0}
              onChange={(rating) => handleClick(9, rating)}
              onMouseEnter={(rating) => handleMouseEnter(9, rating)}
              onMouseLeave={() => handleMouseLeave(9)}
              name={`questions[9].rating`}
              register={register}
              error={errors[`questions[9].rating`]}
            />
            <input
              type="hidden"
              {...register(`questions[9].questionText`)}
              value={questions[9].questionText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
