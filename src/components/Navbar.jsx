import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
        {/* Left: Logo */}
        <img src={logo} alt="logo" width={120} height={24} />

        {/* Center: Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <a href="#works" className="hover:text-neutral-200 duration-300">
            How it works
          </a>
          <a href="#pricing" className="hover:text-neutral-200 duration-300">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-neutral-200 duration-300">
            Testimonials
          </a>
        </div>

        {/* Right: Buttons (hidden on mobile) */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-neutral-200 duration-300">
            Login
          </a>
          <a
            href="#"
            className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 duration-200 transition-colors"
          >
            Get a demo
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200"
          >
            Start Free Trial
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white bg-neutral-900 hover:bg-neutral-800 hover:border-neutral-400 p-2 rounded-lg focus:outline-none border border-neutral-600 transition-all duration-200 cursor-pointer"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
          <div className="flex flex-col text-center space-y-4">
            <a href="#" className=" hover:text-neutral-400">
              Product
            </a>
            <a href="#" className=" hover:text-neutral-400">
              Pricing
            </a>
            <a href="#" className=" hover:text-neutral-400">
              Resources
            </a>
            <a href="#" className=" hover:text-neutral-400">
              Login
            </a>
            <a
              href="#"
              className="text-center border border-e-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
            >
              Get a demo
            </a>
            <a
              href="#"
              className="text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
