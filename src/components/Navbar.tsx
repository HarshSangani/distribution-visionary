
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-unt-green font-bold text-xl">UNT Printing & Distribution</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-unt-green px-3 py-2 rounded-md font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/printing" className="text-gray-700 hover:text-unt-green px-3 py-2 rounded-md font-medium transition-colors duration-200">
              Printing
            </Link>
            <Link to="/mailing" className="text-gray-700 hover:text-unt-green px-3 py-2 rounded-md font-medium transition-colors duration-200">
              Mailing
            </Link>
            <Link to="/promotional" className="text-gray-700 hover:text-unt-green px-3 py-2 rounded-md font-medium transition-colors duration-200">
              Promotional
            </Link>
            <Link to="/policies" className="text-gray-700 hover:text-unt-green px-3 py-2 rounded-md font-medium transition-colors duration-200">
              Policies
            </Link>
            <Button variant="default" className="bg-unt-green hover:bg-unt-darkgreen ml-4 transition-colors duration-300">
              Request Estimate
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-unt-green focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-unt-green px-3 py-2 rounded-md font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/printing" 
              className="text-gray-700 hover:text-unt-green px-3 py-2 rounded-md font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Printing
            </Link>
            <Link 
              to="/mailing" 
              className="text-gray-700 hover:text-unt-green px-3 py-2 rounded-md font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Mailing
            </Link>
            <Link 
              to="/promotional" 
              className="text-gray-700 hover:text-unt-green px-3 py-2 rounded-md font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Promotional
            </Link>
            <Link 
              to="/policies" 
              className="text-gray-700 hover:text-unt-green px-3 py-2 rounded-md font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Policies
            </Link>
            <Button 
              variant="default" 
              className="bg-unt-green hover:bg-unt-darkgreen w-full mt-4 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Estimate
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
