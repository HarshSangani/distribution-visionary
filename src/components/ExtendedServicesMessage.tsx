
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ExtendedServicesMessageProps {
  contactLink?: string;
}

const ExtendedServicesMessage = ({ contactLink = "#" }: ExtendedServicesMessageProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-unt-green/10 hover:border-unt-green/20 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <h4 className="text-xl font-medium text-unt-green">Looking for something else?</h4>
          <p className="text-gray-600">
            Our capabilities extend far beyond what's listed here. We're dedicated to bringing your creative ideas to life with exceptional quality and service.
          </p>
        </div>
        <Button 
          variant="outline" 
          className="text-unt-green border-unt-green hover:bg-unt-green hover:text-white transition-all duration-300 whitespace-nowrap"
          asChild
        >
          <Link to={contactLink}>Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default ExtendedServicesMessage;
