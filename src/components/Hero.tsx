
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const Hero = ({
  title,
  subtitle,
  imageSrc,
  primaryButtonText = "Get Started",
  primaryButtonLink = "#",
  secondaryButtonText,
  secondaryButtonLink = "#"
}: HeroProps) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-unt-green xl:inline">{title}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                {subtitle}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md">
                  <Button className="w-full bg-unt-green hover:bg-unt-darkgreen shadow-sm" asChild>
                    <Link to={primaryButtonLink}>{primaryButtonText}</Link>
                  </Button>
                </div>
                {secondaryButtonText && (
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button variant="outline" className="w-full border-unt-green text-unt-green hover:bg-unt-green/10" asChild>
                      <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={imageSrc}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
