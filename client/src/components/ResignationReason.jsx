

export const ResignationReason = ({ register }) => {
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

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Reason for Resignation
        </h2>
        <p className="mb-4 text-gray-600">
          Please indicate reason(s) below, which contributed to your decision to resign your current position:
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
              <span className="text-gray-700">{reason}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
