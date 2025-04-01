
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, FileText, Image, Layers, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-gray-100 shadow-sm hover:shadow transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-unt-green" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Print Materials</CardTitle>
                  <CardDescription>Essential printing for all your needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Business Cards</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Brochures & Flyers</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Posters & Signage</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Event Programs</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Stickers & Labels</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100 shadow-sm hover:shadow transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-unt-green" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Binding & Finishing</CardTitle>
                  <CardDescription>Professional finishing options</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Coil & Spiral Binding</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Saddle Stitch</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Perfect Binding</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Lamination</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Cutting & Folding</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100 shadow-sm hover:shadow transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mb-4">
                    <Printer className="h-6 w-6 text-unt-green" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Premium Finishing</CardTitle>
                  <CardDescription>Professional finishing touches</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Die Cutting</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Embossing</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Foil Stamping</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Spot UV Coating</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <span>Edge Framing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Eagle Images Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Eagle Images Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized printing services for academic and promotional needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mr-4">
                    <FileText className="h-6 w-6 text-unt-green" />
                  </div>
                  <h3 className="text-xl font-semibold">Course Materials</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  High-quality printing for academic materials with benefits including:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-gray-700">
                    <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                    <span>Handouts and workbooks with low production costs</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                    <span>Print-on-demand options to minimize waste</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                    <span>Custom binding options for durability</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mr-4">
                    <Image className="h-6 w-6 text-unt-green" />
                  </div>
                  <h3 className="text-xl font-semibold">Large Format Printing</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Advanced printing technology for impactful visual displays:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-gray-700">
                    <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                    <span>Poster-size products for presentations and events</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                    <span>Banners and displays for maximum visibility</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                    <span>Sidewalk graphics using weather-resistant materials</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mr-4">
                    <Layers className="h-6 w-6 text-unt-green" />
                  </div>
                  <h3 className="text-xl font-semibold">Finishing Services</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional finishing touches to enhance your printed materials:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-gray-700">
                    <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                    <span>Laminating for durability and protection</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                    <span>Mounting on foam board or other rigid materials</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                    <span>Framing and edge framing in various colors</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-unt-green/10 flex items-center justify-center mr-4">
                    <FileText className="h-6 w-6 text-unt-green" />
                  </div>
                  <h3 className="text-xl font-semibold">Paper Sales</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  High-quality paper options for all your printing needs:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-gray-700">
                    <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                    <span>Wide variety of weights, finishes, and colors</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                    <span>FSC certified options for environmental sustainability</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <Check className="h-4 w-4 text-unt-green mr-2 mt-1 flex-shrink-0" />
                    <span>Recycled content papers to support green initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">How to Order</h3>
              <p className="text-gray-600 mb-6">
                We've made the ordering process simple and straightforward:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-unt-green mb-2">Online Ordering</h4>
                  <p className="text-gray-700 mb-4">
                    Submit your print job through our online system for quick processing:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Visit <a href="https://printorders.unt.edu" className="text-unt-green hover:underline" target="_blank" rel="noopener noreferrer">printorders.unt.edu</a></li>
                    <li>Create an account or log in</li>
                    <li>Upload your files and specify requirements</li>
                    <li>Review and submit your order</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-medium text-unt-green mb-2">Email Submission</h4>
                  <p className="text-gray-700 mb-4">
                    For special orders or questions, you can email us directly:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Mail className="h-4 w-4 text-unt-green mr-2 flex-shrink-0" />
                      <a href="mailto:printing@unt.edu" className="text-unt-green hover:underline">printing@unt.edu</a>
                    </li>
                    <li>Include detailed specifications and contact information</li>
                    <li>Attach files under 25MB, or request a file sharing link</li>
                    <li>Our team will respond within one business day</li>
                  </ul>
                </div>
              </div>
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
