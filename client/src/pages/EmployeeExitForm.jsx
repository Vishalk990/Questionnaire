import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function EmployeeExitForm() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Form />
      </main>
      <Footer />
    </div>
  );
}
