
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MenuIcon, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
            <span className="text-unt-green font-bold text-xl">UNT Printing & Distribution</span>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-3 py-2 text-gray-700 hover:text-unt-green transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/printing" 
              className="px-3 py-2 text-gray-700 hover:text-unt-green transition-colors duration-200 font-medium"
            >
              Printing
            </Link>
            <Link 
              to="/mailing" 
              className="px-3 py-2 text-gray-700 hover:text-unt-green transition-colors duration-200 font-medium"
            >
              Mailing
            </Link>
            <Link 
              to="/promotional" 
              className="px-3 py-2 text-gray-700 hover:text-unt-green transition-colors duration-200 font-medium"
            >
              Promotional
            </Link>
            <Link 
              to="/policies" 
              className="px-3 py-2 text-gray-700 hover:text-unt-green transition-colors duration-200 font-medium"
            >
              Policies
            </Link>
            <Button 
              asChild
              className="ml-4 bg-unt-green hover:bg-unt-darkgreen transition-colors"
            >
              <a href="https://printorders.unt.edu" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Order Now <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-unt-green focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <MenuIcon size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-1">
            <Link 
              to="/" 
              className="px-3 py-2 text-gray-700 hover:text-unt-green transition-colors duration-200 block font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/printing" 
              className="px-3 py-2 text-gray-700 hover:text-unt-green transition-colors duration-200 block font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Printing
            </Link>
            <Link 
              to="/mailing" 
              className="px-3 py-2 text-gray-700 hover:text-unt-green transition-colors duration-200 block font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Mailing
            </Link>
            <Link 
              to="/promotional" 
              className="px-3 py-2 text-gray-700 hover:text-unt-green transition-colors duration-200 block font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Promotional
            </Link>
            <Link 
              to="/policies" 
              className="px-3 py-2 text-gray-700 hover:text-unt-green transition-colors duration-200 block font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Policies
            </Link>
            <div className="pt-2">
              <Button 
                className="w-full bg-unt-green hover:bg-unt-darkgreen transition-colors flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <a href="https://printorders.unt.edu" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Order Now <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
