
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PrintingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="High-Quality Printing Solutions at UNT"
          subtitle="Bringing Your Ideas to Life with Quality Prints"
          imageSrc="https://images.unsplash.com/photo-1599134842279-fe807d23316e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          primaryButtonText="Request Printing Estimate"
          primaryButtonLink="#"
          secondaryButtonText="Customer Care"
          secondaryButtonLink="#"
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Printing Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At University Printing Services, we provide a comprehensive range of printing solutions to meet the diverse needs of the UNT community. Whether your project requires one-color or full-color printing, digital or offset processes, we ensure top-quality results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-unt-green">Print Materials</CardTitle>
                  <CardDescription>Essential printing for all your needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Business Cards
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Brochures
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Flyers
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Posters
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Event Programs
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Calendars
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Stickers & Labels
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-unt-green">Custom Binding</CardTitle>
                  <CardDescription>Professional finishing options</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Coil Binding
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Saddle Stitch
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Perfect Binding
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Stapling
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Hardcover Binding
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-unt-green">Finishing Touches</CardTitle>
                  <CardDescription>Professional finishing options</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Lamination
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Die Cutting
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Embossing
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Foil Stamping
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Custom Design
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Printing Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We stand out from the competition with our commitment to excellence and customer satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-unt-green rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">High-Quality Prints</h3>
                <p className="text-gray-600">We use premium materials and state-of-the-art technology to ensure your prints look professional and vibrant.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-unt-green rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                <p className="text-gray-600">Our efficient processes allow us to deliver your projects quickly without compromising on quality.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-unt-green rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Customer-Focused Service</h3>
                <p className="text-gray-600">Our friendly team is dedicated to ensuring your satisfaction and helping you achieve your vision.</p>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction 
          title="Ready to Start Your Print Project?"
          description="Contact us today for a free consultation and estimate for your printing needs."
          buttonText="Get Printing Estimate"
          linkTo="#"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PrintingPage;
