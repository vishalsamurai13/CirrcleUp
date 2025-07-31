import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CTAButton {
  title: string;
  href: string;
}

interface CallToActionProps {
  heading: string;
  buttons: CTAButton[];
  backgroundImage?: string | StaticImageData;
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  heading, 
  buttons, 
  className = ""
}) => {
  // Ensure we have between 1-3 buttons
  const validButtons = buttons.slice(0, 3);
  
  // Determine grid layout based on number of buttons
  const getGridLayout = () => {
    switch (validButtons.length) {
      case 1:
        return 'grid-cols-1 max-w-[250px] mx-auto';
      case 2:
        return 'grid-cols-2 gap-4';
      case 3:
        return 'grid-cols-3 gap-4';
      default:
        return 'grid-cols-1';
    }
  };

  return (
    <div 
      className={`relative w-[890px] h-[193px] flex flex-col items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image using Next.js Image component */}
      <Image
          src="/cta-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
      />
        
      
      {/* Overlay for better text readability if background image is used */}
      
      <div className="relative z-20 w-full h-full flex flex-row items-center gap-4 lg:flex-col justify-center lg:px-6 px-4">
        {/* Heading */}
        <h2 className="w-1/2 lg:w-full text-white text-left text-[24px] lg:text-[28px] font-bold lg:text-center lg:mb-6 leading-tight">
          {heading}
        </h2>
        
        {/* Buttons Container */}
        <div className={`grid lg:${getGridLayout()} w-1/2 lg:w-full`}>
          {validButtons.map((button, index) => (
            <Link 
              key={index} 
              href={button.href}
              className="group"
            >
              <button className="w-full bg-white text-black font-bold text-[8px] lg:text-[12px] py-3 px-4 hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 uppercase tracking-wide">
                {button.title}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

// Example usage:
// 
// Single button (centered):
// <CallToAction 
//   heading="Discover how our search services can reshape your leadership."
//   buttons={[
//     { title: "EXPLORE BOARD SEARCH", href: "/board-search" }
//   ]}
//   backgroundImage="/cta-bg.png"
// />
//
// Two buttons:
// <CallToAction 
//   heading="Choose your leadership solution"
//   buttons={[
//     { title: "EXPLORE BOARD SEARCH", href: "/board-search" },
//     { title: "EXPLORE CEO SEARCH", href: "/ceo-search" }
//   ]}
//   backgroundImage="/cta-bg.png"
// />
//
// Three buttons:
// <CallToAction 
//   heading="Discover how our search services can reshape your leadership."
//   buttons={[
//     { title: "EXPLORE BOARD SEARCH", href: "/board-search" },
//     { title: "EXPLORE CEO SEARCH", href: "/ceo-search" },
//     { title: "EXPLORE EXECUTIVE SEARCH", href: "/executive-search" }
//   ]}
//   backgroundImage="/cta-bg.png"
// />
//
// Without background image:
// <CallToAction 
//   heading="Your heading here"
//   buttons={[
//     { title: "BUTTON 1", href: "/link1" },
//     { title: "BUTTON 2", href: "/link2" }
//   ]}
//   className="bg-gray-800"
// />
//
// Note: Component has fixed dimensions of 890px x 193px