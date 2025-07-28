/* eslint-disable @next/next/no-img-element */
"use client";

import ConnectWithExperts from '@/components/CTA2'
import CallToAction3 from '@/components/CTA3'
import AnimatedHeroSection from '@/components/Hero'
import { Footer } from '@/components/layout/Footer'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React,  { useState } from 'react'


const TestimonialsCarousel = () => {
  const teamMembers = [
    {
      name: "Pratik Kumbhar",
      image: "/Avatar1.jpeg",
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
  const visibleCount = 3;
  const cardWidth = 304; // 280px card + 24px gap

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
      <div className="flex flex-col gap-12 lg:pt-12 lg:pb-12 lg:ml-[285px] lg:mr-[285px] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between">
          <h1 className="text-4xl font-light mb-12">Our Testimonials</h1>
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-xl disabled:opacity-30 cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= teamMembers.length - visibleCount}
              className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-xl disabled:opacity-30 cursor-pointer"
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
              transform: `translateX(-${startIndex * cardWidth}px)`,
              width: `${teamMembers.length * cardWidth}px`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="w-[280px] mr-6 flex-shrink-0">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <h3 className="font-semibold leading-snug mt-4">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-center max-w-[270px]">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const page = () => {

  return (
    <div className="text-black bg-white min-h-screen overflow-x-hidden">

      {/* Hero Section */}
      <div className=''>
        <AnimatedHeroSection />
      </div>
      
      {/* Main Content */}
      <div className='h-full'>
        
        {/* Leadership Challenges */}
        <div className='lg:ml-[285px] lg:mr-[285px] mt-12 lg:mt-32 lg:space-y-6 lg:pr-16 lg:pl-16 lg:pb-16 mx-4'>
          <h1 className='w-full text-[40px] lg:text-[50px] text-[#29B573] leading-[50px] lg:leading-[68px] font-light'>
          Solving Leadership at the Moments That Count !
          </h1>
          <h2 className='w-full text-[14px] mt-6 lg:text-[18px] leading-[22px]'>
          We help companies and leaders tackle the questions that define success in a fast-moving world.
          </h2>
          <p className='font-semibold text-[14px] mt-3 lg:text-[16px]'>How do I ...</p>

          <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 space-y-4 lg:space-y-8 mt-12'>

            <div className='flex flex-col items-start lg:w-[212px] gap-4 text-[20px] lg:text-[24px] text-[#29B573]'>
              <Link href='/Capabilities/Search'>
                Find <br /> Leaders?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start lg:w-[212px] gap-4  text-[20px] lg:text-[24px] text-[#29B573]'>
              <Link href='/Capabilities/Succession'>
                Plan for <br /> Succession?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start lg:w-[212px] gap-4  text-[20px] lg:text-[24px] text-[#29B573]'>
              <Link href='/Capabilities/Performance'>
                Boost <br />Performance?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start lg:w-[212px] gap-4  text-[20px] lg:text-[24px] text-[#29B573]'>
              <Link href='/Capabilities/Transformation'>
                Lead Business <br /> Transformation?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start lg:w-[212px] gap-4  text-[20px] lg:text-[24px] text-[#29B573]'>
              <Link href='/Capabilities/Accelerators'>
                Become a <br /> better Leader?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start lg:w-[212px] gap-4  text-[20px] lg:text-[24px] text-[#29B573]'>
              <Link href='/Capabilities/Succession'>
                Set up my board <br /> for success?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

          </div>
        </div>
        
        {/* Connect with Experts */}
        <div className='flex justify-center mt-12'>
          <ConnectWithExperts
            heading="Connect with Our Experts"
            description="Our team of 500+ leadership advisors across 25 countries and 47 offices help you to harness the power of great leadership."
            buttons={[
              { title: 'Meet Consultants', href: '/Contact/GetInTouch' },
              { title: 'Find Local Offices', href: '/Contact/LocalOffice' },
            ]}
          />
        </div>

        {/* Quote with Person Photo */}
        <div className='w-full bg-[#D9D9D9] mt-24 h-full'>
          <div className='flex flex-col lg:flex-row gap-12 px-4 py-5 lg:pt-12 lg:pb-12 lg:ml-[285px] lg:mr-[285px] lg:pr-16 lg:pl-16 items-center'>
              <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[220px] relative rounded-full overflow-hidden">
                <Image
                  src="/businessman.webp"
                  alt="Artboard 1"
                  fill
                  className="object-cover"
                />
              </div>

              <div className='flex flex-col gap-4 justify-between lg:h-[220px]'>
                <p className='font-semibold text-[14px] lg:text-[20px]'>&quot;Being a chemist, I see consultancy as a business catalyst: it accelerates transformations while at the same time raising the appeak of the client and their product&quot;</p>
                <div className='flex flex-col mt-6'>
                  <p className='text-[12px] lg:text-[14px] font-bold'>James Hawkins Woodsen</p>
                  <p className='text-[12px] lg:text-[14px]'>Former Associate</p>
                  <p className='text-[12px] lg:text-[14px]'>Dubai Office, UAE</p>
                </div>
              </div>
          </div>
        </div>
        
        {/* A Track Record */}
        <div className='mt-12'>
          <div className='flex flex-col gap-12 lg:pt-12 lg:pb-12 lg:ml-[285px] lg:mr-[285px] lg:pr-16 lg:pl-16 px-4 py-5'>
            <div>
              <h1 className='text-[40px] lg:text-[45px] font-light'>
                A Track Record That Drives Results
              </h1>
              <p className='text-[18px] mt-6 lg:mt-0'>
                Our team brings deep operational insight and sharp execution to every leadership mandate we take on.
              </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between mt-12 gap-12 items-center'>
              <div className='w-[288px] flex flex-col items-center'>
                <h1 className='text-[#29B573] text-[124px] font-bold leading-28'>35<span className='text-[73px] font-medium'>+</span></h1>
                <p className='text-[18px] text-[#29B573] text-center'>Years of combined experience across search, strategy, and organizational advisory</p>
              </div>
              <div className='w-[288px] flex flex-col items-center'>
                <h1 className='text-[#29B573] text-[124px] font-bold leading-28'>92<span className='text-[73px] font-medium'>%</span></h1>
                <p className='text-[18px] text-[#29B573] text-center'>Repeat client engagement rate across key verticals</p>
              </div>
              <div className='w-[288px] flex flex-col items-center'>
                <h1 className='text-[#29B573] text-[124px] font-bold leading-28'>120<span className='text-[73px] font-medium'>+</span></h1>
                <p className='text-[18px] text-[#29B573] text-center'>Senior mandates closed in the past 24 months across India and the Middle East </p>
              </div>
            </div>

            <div className='flex flex-col mt-12 pb-12 lg:pb-0'>
              <Link href='/About/People'>
                <div className='flex gap-8 items-center'>
                  <p className='font-bold text-[14px]'>LEARN ABOUT WHO WE ARE</p>
                  <ArrowRight />
                </div>
              </Link>
              
              <span className='h-[2px] mt-4 bg-black w-[260px]'></span>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-[#eeeeee] lg:px-20 relative z-0 px-4">
          <TestimonialsCarousel />
        </div>

        {/* Floating CTA */}
        <div className="flex justify-center -mt-40 z-10 relative">
          <CallToAction3
            heading="Shape What’s Next, Right Now."
            description="Get in touch to discover how we can help bring the future into focus—for you, your people, and your business."
            buttons={[{ title: "Get in Touch", href: "/contact" }]}
          />
        </div>

        {/* Footer */}
        <div className="mt-12 z-0">
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default page