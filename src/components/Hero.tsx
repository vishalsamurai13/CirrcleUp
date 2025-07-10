"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { WhiteNavbar } from './layout/Navbar';

const AnimatedHeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Data for each tab
  const tabData = [
    {
      id: 'cfo',
      backgroundImage: '/cfo.png',
      category: 'DATA AND INSIGHTS',
      title: 'CFO Turnover Report',
      description: 'Our latest analysis reveals key patterns in CFO transitions, highlighting the evolving role of financial leadership in today\'s complex business environment.',
      tabLabel: 'CFO Turnover Index'
    },
    {
      id: 'chro',
      backgroundImage: '/CHRO.png',
      category: 'TALENT ANALYTICS',
      title: 'CHRO Turnover Report',
      description: 'Deep dive into Chief Human Resources Officer transitions and their impact on organizational culture and employee engagement in the modern workplace.',
      tabLabel: 'CHRO Turnover Index'
    },
    {
      id: 'ceo',
      backgroundImage: '/Ceo.png',
      category: 'EXECUTIVE INSIGHTS',
      title: 'CEO Talks',
      description: 'Exclusive interviews and insights from top CEOs sharing their perspectives on leadership, strategy, and navigating business challenges.',
      tabLabel: 'CEO Talks'
    }
  ];

  // Auto-advance tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };

  const currentData = tabData[activeTab];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* White Navbar Placeholder */}
      <WhiteNavbar />

      {/* Hero Section */}
      <div className="pt-[120px] h-full relative">

        {/* Background Images with Transition */}
        <div className="absolute inset-0">
          {tabData.map((data, index) => (
            <div
              key={data.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeTab ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image using Next.js Image */}
              <Image
                src={data.backgroundImage}
                alt={data.title}
                fill
                className="object-cover z-10"
                priority={index === 0} // Only prioritize the first image
                quality={90}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 " />
            </div>
          ))}
        </div>

        {/* Content Container */}
        <div className="relative z-20 ml-[285px] mr-[285px] mt-32 space-y-4 pr-16 pl-16">
          {/* Hero Content with Animation */}
          <div className="max-w-[720px]">
            <div 
              key={`content-${activeTab}`}
              className="animate-fadeInUp"
            >
              <h2 className="text-white text-[14px] leading-[60px] tracking-wider">
                {currentData.category}
              </h2>
              <h1 className="text-white text-[54px] leading-[60px] font-light">
                {currentData.title}
              </h1>
              <p className="text-white text-[24px] leading-[38px] mt-4">
                {currentData.description}
              </p>
              <div className="uppercase bg-white text-black w-[184px] h-[46px] font-semibold flex items-center justify-center mt-12 hover:bg-gray-200 transition-colors cursor-pointer">
                explore more
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mt-48 gap-8">
            {tabData.map((data, index) => (
              <div 
                key={data.id}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => handleTabClick(index)}
              >
                <h1 className={`uppercase text-[14px] transition-all duration-300 ${
                  index === activeTab 
                    ? 'text-white font-semibold' 
                    : 'text-gray-300 hover:text-white'
                }`}>
                  {data.tabLabel}
                </h1>
                <div className="relative mt-4">
                  {/* Progress Bar Background */}
                  <span className="block h-[2px] bg-gray-600 w-[200px]" />
                  
                  {/* Active Tab Indicator */}
                  <span 
                    className={`absolute top-0 left-0 h-[2px] bg-white transition-all duration-300 ${
                      index === activeTab ? 'w-[200px]' : 'w-0'
                    }`} 
                  />
                  
                  {/* Animated Progress Bar for Active Tab */}
                  {index === activeTab && (
                    <span 
                      className="absolute top-0 left-0 h-[2px] bg-[#28B673] animate-progress"
                      style={{ width: '200px' }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          from {
            width: 0;
          }
          to {
            width: 200px;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-progress {
          animation: progress 5s linear;
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeroSection;