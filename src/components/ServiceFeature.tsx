
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ServiceFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
}

const ServiceFeature = ({ icon: Icon, title, description, children }: ServiceFeatureProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mr-4">
          <Icon className="h-6 w-6 text-unt-green" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      {children}
    </div>
  );
};

export default ServiceFeature;
