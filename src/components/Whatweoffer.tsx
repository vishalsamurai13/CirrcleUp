import React from "react";

interface OfferItem {
  heading: string;
  paragraph?: string;
  buttonText?: string;
}

interface WhatWeOfferSectionProps {
  title: string;
  items: OfferItem[];
  wrapperClassName?: string;
}

const WhatWeOfferSection: React.FC<WhatWeOfferSectionProps> = ({
  title,
  items,
  wrapperClassName = "",
}) => {
  return (
    <section className="w-full bg-gray-100 p-16">
      <div className={wrapperClassName}>
        <h1 className="text-[42px] font-medium mb-12">{title}</h1>
        <div className="space-y-16">
          {items.map((item, index) => (
            <div key={index}>
              <h1 className="text-[38px] font-light mb-3">{item.heading}</h1>
              <p className="text-gray-700 mb-4 leading-relaxed text-[18px]">{item.paragraph}</p>
              {item.buttonText && (
                <button className="group inline-flex items-center font-semibold text-[14px] uppercase border-b border-black hover:opacity-75 cursor-pointer">
                  {item.buttonText}
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
