
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceFeature from "@/components/ServiceFeature";
import { Button } from "@/components/ui/button";
import { FileText, Image, Layers } from "lucide-react";

const ServiceGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our full range of printing and design services available to the UNT community
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceFeature
          icon={FileText}
          title="Course Materials"
          description="High-quality printing for academic materials with benefits including low production costs and print-on-demand options."
        >
          <Link to="/eagle-images" className="text-unt-green hover:underline flex items-center mt-4 text-sm font-medium">
            Learn more
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </ServiceFeature>
        
        <ServiceFeature
          icon={Image}
          title="Large Format Printing"
          description="Advanced printing technology for poster-size products, banners, and sidewalk graphics, perfect for presentations."
        >
          <Link to="/eagle-images" className="text-unt-green hover:underline flex items-center mt-4 text-sm font-medium">
            Explore options
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </ServiceFeature>
        
        <ServiceFeature
          icon={Layers}
          title="Finishing Services"
          description="Professional finishing touches including laminating, mounting, framing, and edge framing in various colors."
        >
          <Link to="/eagle-images" className="text-unt-green hover:underline flex items-center mt-4 text-sm font-medium">
            View details
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </ServiceFeature>
        
        <ServiceFeature
          icon={FileText}
          title="Paper Sales"
          description="High-quality papers in a variety of weights, finishes, and colors, including FSC certified and recycled options."
        >
          <Link to="/eagle-images" className="text-unt-green hover:underline flex items-center mt-4 text-sm font-medium">
            Browse options
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </ServiceFeature>
      </div>
      
      <div className="mt-12 text-center">
        <Button 
          className="bg-unt-green hover:bg-unt-darkgreen text-white"
          asChild
        >
          <Link to="/eagle-images">
            Explore All Eagle Images Services
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceGrid;
