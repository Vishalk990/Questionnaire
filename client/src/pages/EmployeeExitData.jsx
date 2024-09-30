import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DisplayFormData from "../components/DisplayFormData";

export default function EmployeeExitData() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <DisplayFormData />
      </main>
      <Footer />
    </div>
  );
}
