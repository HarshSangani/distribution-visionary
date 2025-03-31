
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkTo: string;
}

const ServiceCard = ({ title, description, imageSrc, linkTo }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-unt-green">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline" className="text-unt-green border-unt-green hover:bg-unt-green hover:text-white" asChild>
          <Link to={linkTo}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
