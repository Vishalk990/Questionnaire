import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import GradientBorder from "./GradientBorder";

const DisplayFormData = () => {
  const [formData, setFormData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State to hold the selected employee data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const response = await fetch(`${apiUrl}/api/getFormData`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setFormData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const closeModal = () => {
    setSelectedEmployee(null);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-600">{error}</div>;

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <GradientBorder title="Employee Exit Data">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                    Employee ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                    Designation
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary  uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.map((form) => (
                  <tr key={form._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {form.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {form.employeeId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {form.designation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {form.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        className="text-[#428bca] hover:text-[#f55e15] flex items-center"
                        onClick={() => setSelectedEmployee(form)}
                      >
                        <FaEye className="mr-2" />
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GradientBorder>
      </div>

      {selectedEmployee && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-3/4 lg:w-2/3 p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#003399]">
              {selectedEmployee.name} - Employee Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <strong>Employee ID:</strong> {selectedEmployee.employeeId}
              </div>
              <div>
                <strong>Designation:</strong> {selectedEmployee.designation}
              </div>
              <div>
                <strong>Department:</strong> {selectedEmployee.department}
              </div>
              <div>
                <strong>Improvement Areas:</strong>{" "}
                {selectedEmployee.improvementAreas.join(", ")}
              </div>
              <div>
                <strong>Reason for Resignation:</strong>
                {Array.isArray(selectedEmployee?.resignationReasons) &&
                selectedEmployee.resignationReasons.length > 0
                  ? selectedEmployee.resignationReasons.join(", ")
                  : "No reasons provided"}
              </div>

              {selectedEmployee.otherResignationReason && (
                <div>
                  <strong>Other Reason:</strong>{" "}
                  {selectedEmployee.otherResignationReason}
                </div>
              )}
              <div>
                <strong>Specific Event Prompting Resignation:</strong>{" "}
                {selectedEmployee.specificEvent}
              </div>
              <div>
                <strong>Discussion with Supervisor:</strong>{" "}
                {selectedEmployee.discussionWithSupervisor ? "Yes" : "No"}
              </div>
            </div>
            <div className="mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <strong>Working relationship with Supervisor:</strong>{" "}
                  {selectedEmployee.rating1}/5
                </div>
                <div>
                  <strong>Working relationship with Employees:</strong>{" "}
                  {selectedEmployee.rating2}/5
                </div>
                <div>
                  <strong>Salary and Benefits:</strong>{" "}
                  {selectedEmployee.rating3}/5
                </div>
                <div>
                  <strong>Overall Experience:</strong>{" "}
                  {selectedEmployee.rating4}/5
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayFormData;
