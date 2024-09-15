
import { FaCheckCircle } from 'react-icons/fa';

const SuccessPage = ({ onReset }) => {
  return (
    <div className="min-h-screen border border-black bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <FaCheckCircle className="mx-auto h-12 w-12 text-green-500" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Thank You!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Your exit questionnaire has been submitted successfully.
            </p>
          </div>
          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              We appreciate your feedback and wish you all the best in your future endeavors.
            </p>
          </div>
          <div className="mt-6">
            <button
              onClick={onReset}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;