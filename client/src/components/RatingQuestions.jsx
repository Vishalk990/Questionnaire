

export const RatingQuestions = ({ register }) => {
  const aspects = [
    "Working relationship with your current Supervisor/HOD",
    "Working relationship with fellow employees",
    "Salary and Benefits for your position",
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Overall Experience
        </h2>
        <p className="mb-4 text-gray-600">
          Please rate the following on a scale of 1 to 5 with "1" being poor and "5" being outstanding:
        </p>
        {aspects.map((aspect, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-medium mb-2 text-gray-700">{aspect}</h3>
            <div className="flex justify-between">
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating} className="flex flex-col items-center">
                  <input
                    type="radio"
                    {...register(`rating${index + 1}`)}
                    value={rating}
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="mt-1 text-sm text-gray-600">{rating}</span>
                </label>
              ))}
            </div>
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
