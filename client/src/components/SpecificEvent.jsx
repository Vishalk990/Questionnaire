

export const SpecificEvent = ({ register, watch }) => {
  const watchQuestion2 = watch("question2");

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold mb-4 text-[#003399]">
          Specific Event
        </h2>
        <p className="mb-4 text-gray-600">
          Was there a specific event or issue that prompted your resignation?
        </p>
        <div className="space-x-4 mb-4">
          {['Yes', 'No'].map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                type="radio"
                {...register("question2")}
                value={option.toLowerCase()}
                className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {watchQuestion2 === "yes" && (
          <textarea
            {...register("question2Explanation")}
            className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Please briefly explain the specific event or issue:"
          />
        )}
      </div>
    </div>
  );
};
