
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import PrintingServiceSection from "@/components/PrintingServiceSection";
import ServiceGrid from "@/components/ServiceGrid";

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
        
        <PrintingServiceSection />
        
        <ServiceGrid />
        
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
