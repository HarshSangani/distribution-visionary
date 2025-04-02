
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Image, Layers, Check, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const EagleImagesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Eagle Images Services"
          subtitle="Specialized printing solutions for the UNT community"
          imageSrc="https://images.unsplash.com/photo-1588858865445-12de492e4f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          primaryButtonText="Order Online"
          primaryButtonLink="https://printorders.unt.edu"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="mailto:printing@unt.edu"
        />
        
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Eagle Images</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Eagle Images provides specialized printing services for academic and promotional needs at the University of North Texas, offering high-quality solutions with quick turnaround times.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden shadow-sm hover:shadow transition-shadow duration-300 border border-gray-100">
                <div className="bg-unt-green/5 p-6">
                  <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-unt-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Course Materials</h3>
                  <p className="text-gray-600">
                    Professional printing for all your academic materials
                  </p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Handouts and workbooks with low production costs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Print-on-demand options to minimize waste</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Custom binding options for durability</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Volume discounts for larger orders</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden shadow-sm hover:shadow transition-shadow duration-300 border border-gray-100">
                <div className="bg-unt-green/5 p-6">
                  <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mb-4">
                    <Image className="h-6 w-6 text-unt-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Large Format Printing</h3>
                  <p className="text-gray-600">
                    High-impact visual displays for presentations and events
                  </p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Poster-size products for presentations and conferences</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Banners and displays for maximum visibility</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Sidewalk graphics using weather-resistant materials</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Digital signage solutions for indoor displays</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-sm hover:shadow transition-shadow duration-300 border border-gray-100">
                <div className="bg-unt-green/5 p-6">
                  <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-unt-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Finishing Services</h3>
                  <p className="text-gray-600">
                    Professional finishing options to enhance your printed materials
                  </p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Laminating for durability and protection</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Mounting on foam board or other rigid materials</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Framing and edge framing in various colors</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Custom die-cutting for unique shapes and designs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden shadow-sm hover:shadow transition-shadow duration-300 border border-gray-100">
                <div className="bg-unt-green/5 p-6">
                  <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-unt-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Paper Sales</h3>
                  <p className="text-gray-600">
                    High-quality paper options for all your printing needs
                  </p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Wide variety of weights, finishes, and colors</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">FSC certified options for environmental sustainability</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Recycled content papers to support green initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Specialty papers for unique projects and presentations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">How to Order from Eagle Images</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-unt-green text-white font-medium mr-3">
                        1
                      </div>
                      <h4 className="text-lg font-medium">Choose Your Service</h4>
                    </div>
                    <p className="text-gray-600 ml-11 mb-6">
                      Browse our services and determine which best fits your project needs. Not sure what you need? Contact our team for guidance.
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-unt-green text-white font-medium mr-3">
                        2
                      </div>
                      <h4 className="text-lg font-medium">Prepare Your Files</h4>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Ensure your files meet our specifications for the best results:
                    </p>
                    <ul className="ml-11 mt-2 space-y-1 text-gray-700">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                        <span>PDF format preferred (.pdf)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                        <span>300 DPI or higher resolution</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                        <span>CMYK color mode for color printing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-unt-green text-white font-medium mr-3">
                        3
                      </div>
                      <h4 className="text-lg font-medium">Submit Your Order</h4>
                    </div>
                    <p className="text-gray-600 ml-11 mb-2">
                      Choose one of our convenient ordering options:
                    </p>
                    <div className="ml-11 mb-6">
                      <Button 
                        className="mb-3 bg-unt-green hover:bg-unt-darkgreen transition-colors w-full justify-start"
                        asChild
                      >
                        <a href="https://printorders.unt.edu" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Online Ordering Portal <ChevronRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <p className="text-sm text-gray-600">
                        Visit <a href="https://printorders.unt.edu" className="text-unt-green hover:underline" target="_blank" rel="noopener noreferrer">printorders.unt.edu</a> to upload files and specify your requirements.
                      </p>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-unt-green text-white font-medium mr-3">
                        4
                      </div>
                      <h4 className="text-lg font-medium">Pick Up Your Order</h4>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Once your order is complete, you'll receive a notification. Pick up your materials at our convenient campus location or request delivery for larger orders.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-medium mb-4">Need Help With Your Order?</h4>
                  <p className="text-gray-600 mb-4">
                    Our team is ready to assist with any questions or special requirements for your project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      asChild
                      className="bg-unt-green hover:bg-unt-darkgreen transition-colors"
                    >
                      <a href="tel:9405652005" className="flex items-center">
                        Call Us: (940) 565-2005
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-unt-green text-unt-green hover:bg-unt-green hover:text-white transition-colors"
                      asChild
                    >
                      <a href="mailto:printing@unt.edu" className="flex items-center">
                        Email: printing@unt.edu
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold mb-8">View More Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Link to="/printing" className="group">
                <div className="p-6 bg-gray-50 rounded-lg hover:bg-unt-green/5 transition-all duration-300 border border-gray-100 hover:border-unt-green/20 text-center">
                  <Printer className="h-8 w-8 mx-auto mb-3 text-unt-green" />
                  <h3 className="text-lg font-medium mb-2">Printing Services</h3>
                  <p className="text-gray-600 text-sm">Explore our complete range of printing solutions</p>
                  <div className="mt-4 text-unt-green group-hover:underline inline-flex items-center text-sm">
                    Learn more <ChevronRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>
              
              <Link to="/mailing" className="group">
                <div className="p-6 bg-gray-50 rounded-lg hover:bg-unt-green/5 transition-all duration-300 border border-gray-100 hover:border-unt-green/20 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-3 text-unt-green" />
                  <h3 className="text-lg font-medium mb-2">Mailing Services</h3>
                  <p className="text-gray-600 text-sm">Discover our mailing and distribution options</p>
                  <div className="mt-4 text-unt-green group-hover:underline inline-flex items-center text-sm">
                    Learn more <ChevronRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>
              
              <Link to="/promotional" className="group">
                <div className="p-6 bg-gray-50 rounded-lg hover:bg-unt-green/5 transition-all duration-300 border border-gray-100 hover:border-unt-green/20 text-center">
                  <Image className="h-8 w-8 mx-auto mb-3 text-unt-green" />
                  <h3 className="text-lg font-medium mb-2">Promotional Items</h3>
                  <p className="text-gray-600 text-sm">Browse our promotional product offerings</p>
                  <div className="mt-4 text-unt-green group-hover:underline inline-flex items-center text-sm">
                    Learn more <ChevronRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        <CallToAction 
          title="Ready to Start Your Project?"
          description="Contact us today or place your order online through our easy-to-use portal."
          buttonText="Order Online"
          linkTo="https://printorders.unt.edu"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default EagleImagesPage;
