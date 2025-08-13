import CallToAction from '@/components/CTA';
import { Footer } from '@/components/layout/Footer';
import { WhiteNavbar } from '@/components/layout/Navbar';
import QuoteBox from '@/components/Quote';
import VerticalInfoList from '@/components/VerticalInfoList';
import WhatWeOfferSection from '@/components/Whatweoffer';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const whatWeOfferItems = [
  {
    heading: "Executive Mentoring",
    paragraph:
      "1-on-1 mentoring journeys for senior executives, new CXOs, and founders—matching leaders with seasoned mentors to accelerate adaptation and decision-making.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Accelerators/ExecutiveMentoring",
  },
  {
    heading: "High-Potential Development",
    paragraph:
      "Custom programs for emerging leaders, including coaching, stretch assignments, and business-linked learning.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Accelerators/ExecutiveMentoring",
  },
  {
    heading: "Leadership Labs",
    paragraph:
      "Interactive workshops and simulations to sharpen strategic thinking, communication, and collaboration skills.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Accelerators/ExecutiveMentoring",
  },
];

const verticalItems = [
  {
    icon: <BookOpen className='lg:w-[36px] w-[20px] h-[20px] lg:h-[36px]'/>,
    paragraph: "Deep pool of global mentors and coaches",
  },
  {
    icon: <BookOpen className='lg:w-[36px] w-[20px] h-[20px] lg:h-[36px]'/>,
    paragraph: "Tailored journeys with measurable impact",
  },
  {
    icon: <BookOpen className='lg:w-[36px] w-[20px] h-[20px] lg:h-[36px]'/>,
    paragraph: "Focus on both performance and personal growth",
  },
  {
    icon: <BookOpen className='lg:w-[36px] w-[20px] h-[20px] lg:h-[36px]'/>,
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
            <div className='absolute inset-0 bg-black/75'></div>
          </div>


          <WhiteNavbar />
          
          {/* Content Overlay */}
          <div className='relative z-10 flex flex-col justify-center h-full lg:ml-[285px] lg:mr-[285px] lg:px-16 px-4 lg:pt-0'>
            <div className='max-w-4xl space-y-6'>
              <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px] text-white'>
                Accelerating Leadership Impact Through Mentorship and Development
              </h1>
              <h2 className='font-medium text-[14px] lg:text-[18px] leading-[20px] lg:leading-[40px] text-[#28B673]'>
                Cirrcle Up’s Accelerator offerings empower leaders and high-potentials to fast-track their growth, impact, and readiness for greater responsibility.
              </h2>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='lg:ml-[285px] lg:mr-[285px] h-full lg:pr-16 lg:pl-16 px-4'>
            <div className='space-y-4'>
                <p className='text-[14px] lg:text-[18px] lg:leading-[30px] leading-[20px] mt-12'>
                In today’s environment, leadership acceleration is not a luxury—it’s a necessity. Organizations need future-ready leaders who can step up quickly, deliver results, and inspire teams through uncertainty.
                <br /><br />
The Accelerators Practice at Cirrcle Up is focused on designing mentoring, coaching, and development journeys that unlock high-potential talent and create lasting business value. Our approach is personalized, evidence-based, and deeply connected to organizational needs.
                </p>
            </div>
            <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>
              <Link href='/Contact/GetInTouch' className='cursor-pointer'>
                Connect with our experts
              </Link>
            </div>
        </div>

        {/* What We Offer Section */}
        <div className='mt-16'>
          <WhatWeOfferSection 
            title="Our Accelerator Offerings:" 
            items={whatWeOfferItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Why Cirrcle Up:"
            items={verticalItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-20"
          />
        </div>

        <div className='flex justify-center mt-6 mb-8 px-4 lg:px-0'>
          <QuoteBox 
            quote="Great leadership doesn’t wait for years to take shape. With the right support, talent can accelerate to impact in months." 
            author="Animesh Singh Rao" 
          />
        </div>

        {/* CTA */}
        <div className='flex justify-center mt-18 mb-18 lg:mb-0'>
          <CallToAction 
            heading="Supercharge your leadership pipeline."
            buttons={[
              { title: "BOOK AN ACCELERATOR CONSULTATION", href: "/Contact/GetInTouch" },
            ]}
          
          />
        </div>

        <Footer />
    </div>
  )
}

export default AcceleratorPage;