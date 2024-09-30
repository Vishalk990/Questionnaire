export const ResignationReason = ({ register, watch }) => {
  const reasons = [
    "Salary",
    "Benefits",
    "Personal",
    "Higher Education",
    "Relocation",
    "Health/Medical",
    "Family Responsibilities",
    "Dissatisfied/Management",
    "Job Advertisement",
    "Job Termination",
    "End of Contract/Superannuation",
    "Other(specify)",
  ];

  const watchedReasons = watch("resignationReasons", []);
  const showOtherReason =
    Array.isArray(watchedReasons) && watchedReasons.includes("Other(specify)");

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-4 text-primary">
          Reason for Resignation
        </h2>
        <p className="mb-4 text-gray-600">
          Please indicate reason(s) below, which contributed to your decision to
          resign your current position:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason) => (
            <label key={reason} className="flex items-center space-x-3">
              <input
                type="checkbox"
                {...register("resignationReasons")}
                value={reason}
                className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700 text-sm">{reason}</span>
            </label>
          ))}
        </div>
        {showOtherReason && (
          <div className="mt-4">
            <textarea
              {...register("otherResignationReason")}
              placeholder="Please specify other reason"
              className="w-full p-2 border text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              rows={3}
            />
          </div>
        )}
      </div>
    </div>
  );
};
