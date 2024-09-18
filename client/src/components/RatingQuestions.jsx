import { useState } from 'react';
import { CustomRatingBar } from './CustomRatingBar';

export const RatingQuestions = ({ register, errors }) => {
  const aspects = [
    "Working relationship with your current Supervisor/HOD",
    "Working relationship with fellow employees",
    "Salary and Benefits for your position",
    "Your Overall Experience"
  ];

  const [ratings, setRatings] = useState({});
  const [hoveredRatings, setHoveredRatings] = useState({});

  const handleMouseEnter = (aspectIndex, rating) => {
    setHoveredRatings(prev => ({
      ...prev,
      [aspectIndex]: rating
    }));
  };

  const handleMouseLeave = (aspectIndex) => {
    setHoveredRatings(prev => ({
      ...prev,
      [aspectIndex]: 0
    }));
  };

  const handleClick = (aspectIndex, rating) => {
    setRatings(prev => ({
      ...prev,
      [aspectIndex]: rating
    }));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-4 text-[#003399]">
          Rate Your Experience
        </h2>
        <p className="mb-4 text-gray-600">
          Please rate the following aspects with 1 being poor and 5 being outstanding:
        </p>
        {aspects.map((aspect, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-medium mb-2 text-gray-700">{aspect}</h3>
            <div className="md:w-3/4 mx-auto">
              <CustomRatingBar
                value={hoveredRatings[index] || ratings[index] || 0}
                onChange={(rating) => handleClick(index, rating)}
                onMouseEnter={(rating) => handleMouseEnter(index, rating)}
                onMouseLeave={() => handleMouseLeave(index)}
                register={register}
                name={`rating${index + 1}`}
                error={errors[`rating${index + 1}`]}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};