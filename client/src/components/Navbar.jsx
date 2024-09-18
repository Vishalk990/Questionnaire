const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className=" flex flex-col sm:flex-row items-center justify-around px-4 py-2">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <img
            className="mx-auto sm:mx-0 h-16 sm:h-20 w-auto"
            src="https://kp.christuniversity.in/KnowledgePro/images/LoginImages/Logo.jpg"
            alt="logo"
          />
        </div>
        <div className="w-full sm:w-auto">
          <nav className="flex justify-center sm:justify-end space-x-4 md:p-3">
            <a
              href="#"
              className="text-primary hover:text-[#f55e15] font-normal"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-primary hover:text-[#f55e15] font-normal"
            >
              DOWNLOADS
            </a>
          </nav>
        </div>
      </div>
      <hr className="border-t border-black w-full mt-2" />
    </div>
  );
};

export default Navbar;
