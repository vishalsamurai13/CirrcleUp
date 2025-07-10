import CallToAction from '@/components/CTA';
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import QuoteBox from '@/components/Quote';
import VerticalInfoList from '@/components/VerticalInfoList';
import WhatWeOfferSection from '@/components/Whatweoffer';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const whatWeOfferItems = [
  {
    heading: "Executive Mentoring",
    paragraph:
      "1-on-1 mentoring journeys for senior executives, new CXOs, and founders—matching leaders with seasoned mentors to accelerate adaptation and decision-making.",
    buttonText: "Learn More",
  },
  {
    heading: "High-Potential Development",
    paragraph:
      "Custom programs for emerging leaders, including coaching, stretch assignments, and business-linked learning.",
    buttonText: "Learn More",
  },
  {
    heading: "Leadership Labs",
    paragraph:
      "Interactive workshops and simulations to sharpen strategic thinking, communication, and collaboration skills.",
    buttonText: "Learn More",
  },
];

const verticalItems = [
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "Deep pool of global mentors and coaches",
  },
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "Tailored journeys with measurable impact",
  },
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "Focus on both performance and personal growth",
  },
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "Seamless integration with succession and performance strategies",
  },
];


const AcceleratorPage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* Hero Section with Background Image */}
        <div className='relative pt-[92px] h-[415px] w-full'>
        
          {/* Background Image */}
          <div className='absolute inset-0 z-0'>
            <Image
              src="/accelerators.png" // Replace with your actual image path
              alt="Leadership background"
              fill
              className='object-cover'
              priority
            />
            {/* Optional overlay for better text readability */}
            <div className='absolute inset-0 bg-black/20'></div>
          </div>


          <Navbar />
          
          {/* Content Overlay */}
          <div className='relative z-10 flex flex-col justify-center h-full ml-[285px] mr-[285px] px-16'>
            <div className='max-w-4xl space-y-6'>
              <h1 className='font-bold text-[46px] leading-[60px] text-black'>
                Accelerating Leadership Impact Through Mentorship and Development
              </h1>
              <h2 className='font-medium text-[24px] leading-[40px] text-[#28B673]'>
                Cirrcle Up’s Accelerator offerings empower leaders and high-potentials to fast-track their growth, impact, and readiness for greater responsibility.
              </h2>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='ml-[285px] mr-[285px] h-full pr-16 pl-16'>
            <div className='space-y-4'>
                <p className='text-[18px] leading-[23px] mt-12'>
                In today’s environment, leadership acceleration is not a luxury—it’s a necessity. Organizations need future-ready leaders who can step up quickly, deliver results, and inspire teams through uncertainty.
                <br /><br />
The Accelerators Practice at Cirrcle Up is focused on designing mentoring, coaching, and development journeys that unlock high-potential talent and create lasting business value. Our approach is personalized, evidence-based, and deeply connected to organizational needs.
                </p>
            </div>
            <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>
              Connect with our experts
            </div>
        </div>

        {/* What We Offer Section */}
        <div className='mt-32'>
          <WhatWeOfferSection 
            title="Our Accelerator Offerings:" 
            items={whatWeOfferItems}
            wrapperClassName="ml-[285px] mr-[285px] py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Why Cirrcle Up:"
            items={verticalItems}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
          />
        </div>

        <div className='flex justify-center mt-6 mb-8'>
          <QuoteBox 
            quote="Great leadership doesn’t wait for years to take shape. With the right support, talent can accelerate to impact in months." 
            author="Animesh Singh Rao" 
          />
        </div>

        {/* CTA */}
        <div className='flex justify-center mt-18'>
          <CallToAction 
            heading=" Supercharge your leadership pipeline."
            buttons={[
              { title: "BOOK AN ACCELERATOR CONSULTATION", href: "/board-search" },
            ]}
          
          />
        </div>

        <Footer />
    </div>
  )
}

export default AcceleratorPage;