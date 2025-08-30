import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F8F8F8] shadow-sm fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1756545878/logo_yvjwio.png"
                alt="WorkRight Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="flex items-center text-gray-800 hover:text-green-600"
            >
              <span className="h-2 w-2 bg-[#7DC33B] rounded-full mr-2"></span>
              Home
            </Link>
            <Link
              to="/stretches"
              className="text-gray-800 hover:text-green-600"
            >
              Stretches
            </Link>
            <Link to="/program" className="text-gray-800 hover:text-green-600">
              My Program
            </Link>
            <Link to="/testing" className="text-gray-800 hover:text-green-600">
              Testing
            </Link>
            <Link to="/rewards" className="text-gray-800 hover:text-green-600">
              Rewards
            </Link>
          </div>

          {/* Search + Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-3 pr-8 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
            </div>
            <div className="bg-[#BFDD9C] text-green-900 rounded-full p-2">
              <User className="h-5 w-5" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-8 space-y-4 flex flex-col items-center justify-center ">
          <Link to="/" className="block text-gray-800 hover:text-green-600">
            Home
          </Link>
          <Link
            to="/stretches"
            className="block text-gray-800 hover:text-green-600"
          >
            Stretches
          </Link>
          <Link
            to="/program"
            className="block text-gray-800 hover:text-green-600"
          >
            My Program
          </Link>
          <Link
            to="/testing"
            className="block text-gray-800 hover:text-green-600"
          >
            Testing
          </Link>
          <Link
            to="/rewards"
            className="block text-gray-800 hover:text-green-600"
          >
            Rewards
          </Link>

          {/* Mobile Search + Profile */}
          <div className="mt-4 flex items-center space-x-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-3 pr-8 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
            </div>
            <div className="bg-[#7DC33B] text-green-900 rounded-full p-2">
              <User className="h-5 w-5" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
