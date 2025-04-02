
import { Card } from "@/components/ui/card";
import { Printer, FileText, Image, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceBox = ({ icon, title, description }: ServiceBoxProps) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h4 className="font-medium mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const PrintingServiceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">UNT Printing Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive printing solutions through our centralized Printing Services and specialized Eagle Images Print Center.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* General Printing Services */}
          <Card className="bg-white p-8 hover:shadow-md transition-shadow duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Full-Service Printing Solutions</h3>
              <p className="text-gray-700 mb-6">
                Our state-of-the-art printing facility offers a wide range of services designed to meet the diverse needs of the UNT community. From basic printing to complex finishing options, we have the expertise and equipment to deliver quality results for any project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <ServiceBox
                  icon={<FileText className="h-6 w-6 text-unt-green" />}
                  title="Print Materials"
                  description="Essential printing for all your document needs"
                />
                <ServiceBox
                  icon={<Layers className="h-6 w-6 text-unt-green" />}
                  title="Binding & Finishing"
                  description="Professional finishing options"
                />
              </div>
              <Button className="w-full sm:w-auto bg-unt-green hover:bg-unt-darkgreen">
                <Link to="https://printorders.unt.edu" className="text-white">Request a Quote</Link>
              </Button>
            </div>
          </Card>
          
          {/* Eagle Images */}
          <Card className="bg-white p-8 hover:shadow-md transition-shadow duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Eagle Images Print Center</h3>
              <p className="text-gray-700 mb-6">
                Our specialized design & digital print center providing focused services for academic and promotional needs, including handouts, workbooks, posters, banners, and more.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <ServiceBox
                  icon={<Image className="h-6 w-6 text-unt-green" />}
                  title="Design Services"
                  description="Creative solutions for your projects"
                />
                <ServiceBox
                  icon={<Printer className="h-6 w-6 text-unt-green" />}
                  title="Specialty Printing"
                  description="Unique printing techniques"
                />
              </div>
              <Button className="w-full sm:w-auto bg-unt-green hover:bg-unt-darkgreen">
                <Link to="/eagle-images" className="text-white">Visit Eagle Images</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrintingServiceSection;
