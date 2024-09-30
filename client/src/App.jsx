import EmployeeExitData from "./pages/EmployeeExitData";
import EmployeeExitForm from "./pages/EmployeeExitForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/exitForm", element: <EmployeeExitForm /> },
    { path: "/exitFormData", element: <EmployeeExitData /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
