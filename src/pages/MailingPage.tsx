import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import ExtendedServicesMessage from "@/components/ExtendedServicesMessage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MailingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Efficient and Reliable Mailing Solutions"
          subtitle="Connecting You with Your Audience"
          imageSrc="https://images.unsplash.com/photo-1586075335751-3f0a62ac904f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          primaryButtonText="Request Mailing Estimate"
          primaryButtonLink="#"
          secondaryButtonText="Customer Care"
          secondaryButtonLink="#"
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mailing Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                University Mailing Services offers comprehensive solutions to ensure your mail reaches its destination efficiently and at the lowest postage rates possible. Our professional mailing services are designed to support your marketing efforts with precision and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-unt-green">Mail Processing</CardTitle>
                  <CardDescription>Professional mail preparation services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      CASS Certification
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      NCOA Updating
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Address Standardization
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Zip+4 Processing
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Bar-Coding and Sorting
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      De-duplication
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      EDDM (Every Door Direct Mailing)
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-unt-green">Mail Handling</CardTitle>
                  <CardDescription>Comprehensive mail preparation and handling</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Addressing (Inkjet)
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Tabbing
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Inserting (Machine/Hand)
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Sealing
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Metering
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Labeling
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-unt-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Purchasing Area Lists
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-unt-green">Indicia Formats</CardTitle>
                  <CardDescription>Standard postal markings for your mailings</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-bold mb-2">Nonprofit Indicia</h4>
                    <p className="text-gray-600 mb-4">For qualified nonprofit organizations</p>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <p className="font-medium">Nonprofit Organization</p>
                      <p className="font-medium">US Postage Paid</p>
                      <p className="font-medium">University of North Texas</p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-bold mb-2">First Class Indicia</h4>
                    <p className="text-gray-600 mb-4">For priority business communications</p>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <p className="font-medium">First Class Mail</p>
                      <p className="font-medium">US Postage Paid</p>
                      <p className="font-medium">University of North Texas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12">
              <ExtendedServicesMessage contactLink="#" />
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Contact Our Mailing Team</h3>
              <p className="text-lg">
                For more information, call <a href="tel:9403480333" className="text-unt-green font-medium">940-348-0333</a> or email <a href="mailto:mailservice@unt.edu" className="text-unt-green font-medium">mailservice@unt.edu</a>
              </p>
            </div>
          </div>
        </section>
        
        <CallToAction 
          title="Ready to Start Your Mailing Project?"
          description="Contact us today for a free consultation and estimate for your mailing needs."
          buttonText="Request Mailing Estimate"
          linkTo="#"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default MailingPage;
