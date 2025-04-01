
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Book } from "lucide-react";

const PolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">University Policies & Guidelines</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Important resources for ensuring your printed materials comply with UNT's branding and publication standards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md hover:translate-y-[-4px] duration-300 border border-gray-100 p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-unt-green/10 rounded-full flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8 text-unt-green" />
                  </div>
                  <h2 className="text-2xl font-medium mb-4 text-unt-green">Printing & Publication Policy</h2>
                  <p className="text-gray-600 mb-6">
                    The University's official policy governing all printed materials and publications representing UNT. Learn about approval processes, required elements, and compliance standards.
                  </p>
                  <Button variant="outline" className="text-unt-green border-unt-green hover:bg-unt-green hover:text-white transition-colors duration-300">
                    <a href="https://policy.unt.edu/policy/04-001" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      View Policy
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md hover:translate-y-[-4px] duration-300 border border-gray-100 p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-unt-green/10 rounded-full flex items-center justify-center mb-6">
                    <Book className="h-8 w-8 text-unt-green" />
                  </div>
                  <h2 className="text-2xl font-medium mb-4 text-unt-green">UNT Brand Identity Guide</h2>
                  <p className="text-gray-600 mb-6">
                    Comprehensive guidelines for the proper use of UNT logos, colors, typography, and design elements to maintain a consistent university brand identity across all materials.
                  </p>
                  <Button variant="outline" className="text-unt-green border-unt-green hover:bg-unt-green hover:text-white transition-colors duration-300">
                    <a href="https://identityguide.unt.edu/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      View Guide
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-6 bg-gradient-to-r from-unt-green/5 to-unt-lightgreen/5 rounded-xl border border-unt-green/10">
              <h3 className="text-xl font-medium mb-4 text-unt-green text-center">Need Help with Policies?</h3>
              <p className="text-gray-600 text-center mb-6">
                Our team is familiar with all university publication requirements and can help ensure your materials meet all standards and guidelines.
              </p>
              <div className="flex justify-center">
                <Button className="bg-unt-green hover:bg-unt-darkgreen transition-colors duration-300" asChild>
                  <Link to="/#contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PolicyPage;
