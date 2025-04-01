
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ExtendedServicesMessageProps {
  contactLink?: string;
}

const ExtendedServicesMessage = ({ contactLink = "#" }: ExtendedServicesMessageProps) => {
  return (
    <div className="bg-white border border-unt-green/20 rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="bg-unt-green/10 rounded-full p-2 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-unt-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Need something not listed here?</h4>
          <p className="text-gray-600 mb-4">
            At UNT Printing and Distribution Services, we're all about making your experience seamless and customer-focused. 
            While we've highlighted some of our most popular services to keep things simple, our capabilities go far beyond this list. 
            If you don't see what you're looking for, just reach out—we're here to bring your ideas to life!
          </p>
          <Button variant="outline" className="text-unt-green border-unt-green hover:bg-unt-green hover:text-white" asChild>
            <Link to={contactLink}>Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExtendedServicesMessage;
