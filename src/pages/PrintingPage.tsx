
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, FileText, Image, Layers, Check, Mail, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ServiceFeature from "@/components/ServiceFeature";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrintingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Professional Printing Solutions"
          subtitle="High-quality printing services for the UNT community"
          imageSrc="https://images.unsplash.com/photo-1599134842279-fe807d23316e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          primaryButtonText="Order Online"
          primaryButtonLink="https://printorders.unt.edu"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="mailto:printing@unt.edu"
        />
        
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Printing Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide a comprehensive range of high-quality printing solutions to meet all your academic and professional needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Full-Service Printing Solutions</h3>
                  <p className="text-gray-700 mb-6">
                    Our state-of-the-art printing facility offers a wide range of services designed to meet the diverse needs of the UNT community. From basic printing to complex finishing options, we have the expertise and equipment to deliver quality results for any project.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Whether you need materials for academic, administrative, or promotional purposes, our team can help you create professional-quality print products that effectively communicate your message.
                  </p>
                  <Button className="bg-unt-green hover:bg-unt-darkgreen">
                    <Link to="https://printorders.unt.edu" className="text-white">Request a Quote</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-unt-green" />
                    </div>
                    <h4 className="font-medium mb-2">Print Materials</h4>
                    <p className="text-sm text-gray-600">Essential printing for all your document needs</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mb-4">
                      <Layers className="h-6 w-6 text-unt-green" />
                    </div>
                    <h4 className="font-medium mb-2">Binding & Finishing</h4>
                    <p className="text-sm text-gray-600">Professional finishing options</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mb-4">
                      <Image className="h-6 w-6 text-unt-green" />
                    </div>
                    <h4 className="font-medium mb-2">Design Services</h4>
                    <p className="text-sm text-gray-600">Creative solutions for your projects</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mb-4">
                      <Printer className="h-6 w-6 text-unt-green" />
                    </div>
                    <h4 className="font-medium mb-2">Specialty Printing</h4>
                    <p className="text-sm text-gray-600">Unique printing techniques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Eagle Images Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Eagle Images Print Center</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our design & digital print center providing specialized services for academic and promotional needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ServiceFeature
                icon={FileText}
                title="Course Materials"
                description="High-quality printing for academic materials with benefits including low production costs and print-on-demand options to minimize waste."
              >
                <Link to="/eagle-images" className="text-unt-green hover:underline flex items-center mt-4 text-sm font-medium">
                  Learn more about our course materials
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </ServiceFeature>
              
              <ServiceFeature
                icon={Image}
                title="Large Format Printing"
                description="Advanced printing technology for poster-size products, banners, and sidewalk graphics, perfect for presentations and events."
              >
                <Link to="/eagle-images" className="text-unt-green hover:underline flex items-center mt-4 text-sm font-medium">
                  Explore our large format options
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </ServiceFeature>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceFeature
                icon={Layers}
                title="Finishing Services"
                description="Professional finishing touches including laminating, mounting, framing, and edge framing in various colors."
              >
                <Link to="/eagle-images" className="text-unt-green hover:underline flex items-center mt-4 text-sm font-medium">
                  View finishing service details
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </ServiceFeature>
              
              <ServiceFeature
                icon={FileText}
                title="Paper Sales"
                description="High-quality papers in a variety of weights, finishes, and colors, including FSC certified and recycled content options."
              >
                <Link to="/eagle-images" className="text-unt-green hover:underline flex items-center mt-4 text-sm font-medium">
                  Browse paper options
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </ServiceFeature>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="/eagle-images" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-unt-green hover:bg-unt-darkgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-unt-green shadow-sm transition-colors"
              >
                Visit Eagle Images Page
              </Link>
            </div>
          </div>
        </section>
        
        <CallToAction 
          title="Ready to Start Your Printing Project?"
          description="Contact us today for a consultation or place your order online."
          buttonText="Order Online"
          linkTo="https://printorders.unt.edu"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PrintingPage;
