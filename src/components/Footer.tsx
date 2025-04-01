
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-unt-green mb-4">UNT Printing & Distribution</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Your on-campus partner for all printing, mailing, and promotional needs at the University of North Texas.
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} University of North Texas
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-unt-green mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-unt-green transition-colors inline-flex items-center">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/printing" className="text-gray-600 hover:text-unt-green transition-colors inline-flex items-center">
                  Printing Services
                </Link>
              </li>
              <li>
                <Link to="/mailing" className="text-gray-600 hover:text-unt-green transition-colors inline-flex items-center">
                  Mailing Services
                </Link>
              </li>
              <li>
                <Link to="/promotional" className="text-gray-600 hover:text-unt-green transition-colors inline-flex items-center">
                  Promotional Products
                </Link>
              </li>
              <li>
                <Link to="/policies" className="text-gray-600 hover:text-unt-green transition-colors inline-flex items-center">
                  Policies & Guidelines
                </Link>
              </li>
              <li>
                <a href="https://printorders.unt.edu" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-unt-green transition-colors inline-flex items-center">
                  Online Ordering
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-unt-green mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600 space-y-3 text-sm">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 text-unt-green mr-2 shrink-0 mt-0.5" />
                <span>1155 Union Circle #311400<br/>Denton, TX 76203-5017</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 text-unt-green mr-2 shrink-0" />
                <a href="tel:9405652005" className="hover:text-unt-green transition-colors">(940) 565-2005</a>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 text-unt-green mr-2 shrink-0" />
                <a href="mailto:printing@unt.edu" className="hover:text-unt-green transition-colors">printing@unt.edu</a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
