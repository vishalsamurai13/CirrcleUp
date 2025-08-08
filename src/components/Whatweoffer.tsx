import Link from "next/link";
import React from "react";

interface OfferItem {
  heading?: string;
  paragraph?: string;
  icon?: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
}

interface WhatWeOfferSectionProps {
  title: string;
  items: OfferItem[];
  wrapperClassName?: string;
  paragraph?: string,
}

const WhatWeOfferSection: React.FC<WhatWeOfferSectionProps> = ({
  title,
  items,
  wrapperClassName = "",
  paragraph = "",
}) => {
  return (
    <section className="w-full bg-gray-100 lg:p-16 px-4 py-12">
      <div className={wrapperClassName}>
        <h1 className="text-[30px] lg:text-[40px] font-medium">{title}</h1>
        <p className="text-[14px] lg:text-[20px] text-[#28B673] mb-12 mt-3">{paragraph}</p>
        <div className="space-y-12 lg:space-y-16">
          {items.map((item, index) => (
            <div key={index}>
              {item.heading && (
                  <h1 className="text-[28px] font-light lg:mb-3 flex items-center">
                    {item.heading}
                  </h1>
                )}
                <p
                  className={`text-gray-700 leading-relaxed text-[14px] lg:text-[18px] ${
                    item.heading && item.buttonText ? 'mb-8 lg:mb-4' : ' lg:mb-2'
                  }`}
                >
                  {item.paragraph}
                </p>
                
              
              {item.buttonText && (
                  <Link href={item.buttonLink || "#"} className="group inline-flex items-center font-semibold text-[12px] lg:text-[14px] uppercase border-b border-black hover:opacity-75 cursor-pointer">
                    {item.buttonText}
                    <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                  </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
