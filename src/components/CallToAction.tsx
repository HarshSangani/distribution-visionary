
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  linkTo?: string;
}

const CallToAction = ({
  title = "Ready to get started?",
  description = "Request an estimate for your project today.",
  buttonText = "Request Estimate",
  linkTo = "#"
}: CallToActionProps) => {
  return (
    <section className="bg-gradient-to-r from-unt-green to-unt-darkgreen text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{description}</p>
        <Button 
          variant="outline" 
          className="bg-white text-unt-green hover:bg-gray-100 border-white hover:text-unt-darkgreen transition-colors duration-300"
          asChild
        >
          <Link to={linkTo}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
