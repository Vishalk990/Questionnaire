import DashboardAnalytics from "./components/Dashboard";
import EmployeeExitData from "./pages/EmployeeExitData";
import EmployeeExitForm from "./pages/EmployeeExitForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <EmployeeExitForm /> },
    { path: "/exitFormData", element: <EmployeeExitData /> },
    { path: "/dashboard", element: <DashboardAnalytics/> },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
