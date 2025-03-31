
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Your One-Stop Solution for Printing, Mailing, and Promotional Needs"
          subtitle="Welcome to University Printing and Distribution Services at the University of North Texas. We are dedicated to providing high-quality, reliable, and customer-centric solutions for all your needs."
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80"
          primaryButtonText="Request an Estimate"
          primaryButtonLink="#"
          secondaryButtonText="Customer Care"
          secondaryButtonLink="#"
        />
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive solutions for all your printing, mailing, and promotional needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Printing Services"
                description="High-quality print solutions tailored to your needs, from business cards to large format posters."
                imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                linkTo="/printing"
              />
              <ServiceCard 
                title="Mailing Services"
                description="Efficient mailing solutions to reach your audience, including processing, handling, and delivery."
                imageSrc="https://images.unsplash.com/photo-1566013656433-e818796d04f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                linkTo="/mailing"
              />
              <ServiceCard 
                title="Promotional Products"
                description="Custom items to boost your brand and events, from apparel to branded merchandise."
                imageSrc="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                linkTo="/promotional"
              />
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose UNT Printing & Distribution?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We are committed to providing exceptional service and quality products for the UNT community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-unt-green rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Results</h3>
                <p className="text-gray-600">High-quality materials and state-of-the-art technology for exceptional results.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-unt-green rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Turnaround</h3>
                <p className="text-gray-600">Efficient processes to deliver your projects on time, every time.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-unt-green rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">Knowledgeable professionals dedicated to your project's success.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-unt-green rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Affordable solutions without compromising on quality.</p>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction 
          title="Ready to Start Your Project?"
          description="Contact us today for a free consultation and estimate for your printing, mailing, or promotional needs."
          buttonText="Request an Estimate"
          linkTo="#"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
