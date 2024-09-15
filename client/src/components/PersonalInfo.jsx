export const PersonalInfo = ({ register, errors }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "name",
              label: "Employee Name",
              errorMsg: "Employee name is required",
            },
            {
              name: "employeeId",
              label: "Employee ID",
              errorMsg: "Employee ID is required",
            },
            {
              name: "designation",
              label: "Current Designation",
              errorMsg: "Current designation is required",
            },
            {
              name: "department",
              label: "Department",
              errorMsg: "Department is required",
            },
          ].map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.label}
              </label>
              <input
                type="text"
                id={field.name}
                {...register(field.name, { required: field.errorMsg })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors[field.name] && (
                <p className="mt-1 text-sm text-red-600">
                  {errors[field.name].message}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

