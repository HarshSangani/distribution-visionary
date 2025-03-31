
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-unt-green mb-4">UNT Printing & Distribution</h3>
            <p className="text-gray-600 mb-4">
              Your reliable partner at UNT for all printing, mailing, and promotional needs.
            </p>
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} University of North Texas
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-unt-green mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-unt-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/printing" className="text-gray-600 hover:text-unt-green transition-colors">
                  Printing Services
                </Link>
              </li>
              <li>
                <Link to="/mailing" className="text-gray-600 hover:text-unt-green transition-colors">
                  Mailing Services
                </Link>
              </li>
              <li>
                <Link to="/promotional" className="text-gray-600 hover:text-unt-green transition-colors">
                  Promotional Products
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-unt-green mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600 space-y-2">
              <p>1155 Union Circle #311400</p>
              <p>Denton, TX 76203-5017</p>
              <p>Phone: (940) 565-2005</p>
              <p>Email: <a href="mailto:printing@unt.edu" className="hover:text-unt-green transition-colors">printing@unt.edu</a></p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
