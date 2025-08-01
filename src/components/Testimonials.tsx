/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';

const TestimonialsCarousel = () => {
  const teamMembers = [
    {
      name: "Pratik Kumbhar",
      image: "/Avatar1.webp",
      description:
        "An Event to explore APAC leadership strategies amid healthcare sector uncertainties and talent.",
    },
    {
      name: "Vishal Sharma",
      image: "/Avatar2.jpeg",
      description:
        "Discover the intersection of innovation and healthcare transformation in a rapidly evolving global market.",
    },
    {
      name: "Marshall Mathers",
      image: "/Avatar3.jpeg",
      description:
        "Join key discussions on talent development and strategic execution across the APAC healthcare ecosystem.",
    },
    {
      name: "Yash Patel",
      image: "/Avatar4.jpeg",
      description:
        "Unlock key insights from regional leaders to shape the future of healthcare delivery and workforce innovation.",
    },
    {
      name: "Snoop Dogg",
      image: "/Avatar5.jpeg",
      description:
        "Connect, learn, and lead with executives focused on actionable strategies for the healthcare industry.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // Start with mobile-first
  const [cardWidth, setCardWidth] = useState(280); // Default mobile width

  // Update visible count and card width based on screen size
  useEffect(() => {
    const updateLayout = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width < 768) {
          // Mobile: show 1 card, full width minus container padding
          setVisibleCount(1);
          setCardWidth(width - 48); // Account for container padding (px-6 = 24px each side)
        } else if (width < 1024) {
          // Tablet: show 2 cards
          setVisibleCount(2);
          setCardWidth(340);
        } else {
          // Desktop: show 3 cards
          setVisibleCount(3);
          setCardWidth(304);
        }
      }
    };

    updateLayout();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateLayout);
      return () => window.removeEventListener('resize', updateLayout);
    }
  }, []);

  // Reset startIndex when visibleCount changes to prevent issues
  useEffect(() => {
    setStartIndex(0);
  }, [visibleCount]);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, teamMembers.length - visibleCount)
    );
  };

  return (
    <div className="bg-[#eeeeee] pt-16 pb-64 relative z-0">
      <div className="flex flex-col gap-12 lg:pt-12 lg:pb-12 px-6 lg:ml-[285px] lg:mr-[285px] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-start md:items-center">
          <h1 className="text-2xl md:text-4xl font-light mb-4 md:mb-12 flex-1 pr-4">Our Testimonials</h1>
          <div className="flex gap-2 md:gap-4 flex-shrink-0">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-8 h-8 md:w-10 md:h-10 border border-black rounded-full flex items-center justify-center text-lg md:text-xl disabled:opacity-30 cursor-pointer hover:bg-gray-100 transition-colors"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= teamMembers.length - visibleCount}
              className="w-8 h-8 md:w-10 md:h-10 border border-black rounded-full flex items-center justify-center text-lg md:text-xl disabled:opacity-30 cursor-pointer hover:bg-gray-100 transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Sliding Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (cardWidth)}px)`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 pr-12 lg:pr-0"
                style={{
                  width: typeof window !== 'undefined' && window.innerWidth < 768 
                    ? `${cardWidth}px` 
                    : '280px'
                }}
              >
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                  />
                  <h3 className="font-semibold leading-snug mt-4 text-center text-base md:text-lg">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-center px-2 md:px-0 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator for mobile */}
        <div className="flex justify-center gap-2 md:hidden">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index >= startIndex && index < startIndex + visibleCount
                  ? 'bg-black'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;