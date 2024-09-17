import React, { useState } from 'react';
import { StarIcon } from './StarIcon';

export const RatingQuestions = ({ register, errors }) => {
  const aspects = [
    "Working relationship with your current Supervisor/HOD",
    "Working relationship with fellow employees",
    "Salary and Benefits for your position",
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
          Overall Experience
        </h2>
        <p className="mb-4 text-gray-600">
          Please rate the following aspects with 1 star being poor and 5 stars being outstanding:
        </p>
        {aspects.map((aspect, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-medium mb-2 text-gray-700">{aspect}</h3>
            <div 
              className="flex mx-auto items-center md:w-2/4 justify-between"
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <label 
                  key={rating} 
                  className="mr-1 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(index, rating)}
                  onClick={() => handleClick(index, rating)}
                >
                  <input
                    type="radio"
                    {...register(`rating${index + 1}`, { required: "This rating is required" })}
                    value={rating}
                    className="sr-only"
                  />
                  <StarIcon 
                    filled={rating <= (hoveredRatings[index] || ratings[index] || 0)}
                  />
                  <span className="sr-only">{rating} stars</span>
                </label>
              ))}
            </div>
            {errors[`rating${index + 1}`] && (
              <p className="text-red-500 text-xs italic mt-1">{errors[`rating${index + 1}`].message}</p>
            )}
            <div className="flex justify-between text-xs mt-1 text-gray-500">
              <span>Poor</span>
              <span>Outstanding</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};