import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 lg:px-12 md:px-5">
      <div className="flex justify-between items-center">
        <div className="text-amber-500 text-xl md:text-2xl">videobelajar</div>
        <div className="relative flex gap-10">
          <p className="hidden lg:block md:block cursor-pointer hover:duration-200 hover:text-amber-500">
            <Link to="/collection">Kategori</Link>
          </p>
          <button onClick={toggleDropdown} className=" focus:outline-none">
            <div className="flex flex-col items-center gap-0.5 cursor-pointer">
              <span className={`block lg:hidden md:hidden w-6 h-1 bg-gray-600 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block lg:hidden md:hidden w-6 h-1 bg-gray-600 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`block lg:hidden md:hidden w-6 h-1 bg-gray-600 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
              <span className="hidden lg:block md:block cursor-pointer hover:text-amber-500">
                <CgProfile size={30} />
              </span>
            </div>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-10 w-80 lg:w-50 bg-white rounded-md shadow-lg z-10">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <Link to={"/collection"}>Kategori</Link>
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Profil Saya
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Kelas Saya
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Pesanan Saya
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-amber-600 hover:bg-gray-200">
                    Keluar
                    <IoIosLogOut size={25} />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
