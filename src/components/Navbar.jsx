import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu
import { Link } from "react-router-dom"; // If using React Router
import { menuItems } from "../data/menu";
import Logo from "/images/Logo.png";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-1/12">
            <img src={Logo} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center flex-grow justify-between">
            <div className="md:flex space-x-15">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="text-title font-bold text-ubuntu text-midnight-indigo hover:text-deep-indigo transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div>
              <Button className="text-title font-bold">Book Appointment</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full h-dvh flex flex-col px-4 text-title font-bold">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="block py-3 px-5 text-midnight-indigo hover:bg-gray-200 transition mx-auto"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="text-title font-bold">Book Appointment</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
