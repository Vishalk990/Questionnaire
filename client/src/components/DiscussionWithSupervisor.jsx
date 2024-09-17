

export const DiscussionWithSupervisor = ({ register, watch }) => {
  const watchQuestion3 = watch("question3");

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-4 text-[#003399]">
          Discussion with Supervisor
        </h2>
        <p className="mb-4 text-gray-600">
          Did you have a discussion with your Supervisor/HOD or higher authorities?
        </p>
        <div className="space-x-4 mb-4">
          {['Yes', 'No'].map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                type="radio"
                {...register("question3")}
                value={option.toLowerCase()}
                className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700 text-sm">{option}</span>
            </label>
          ))}
        </div>
        {watchQuestion3 === "yes" && (
          <textarea
            {...register("question3Explanation")}
            className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Please briefly explain the discussion:"
          />
        )}
      </div>
    </div>
  );
};
