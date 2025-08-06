/* eslint-disable react/no-unescaped-entities */
import CallToAction from '@/components/CTA';
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import QuoteBox from '@/components/Quote';
import VerticalInfoList from '@/components/VerticalInfoList';
import WhatWeOfferSection from '@/components/Whatweoffer';
import { BookOpen, MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const whatWeOfferItems = [
  {
    heading: "Succession Planning & Internal Benchmarking",
    paragraph:
      "Not sure if your next CEO is already within? We help benchmark internal talent and create readiness roadmaps.",
  },
  {
    heading: "External Market Mapping",
    paragraph:
      "Comprehensive industry and cross-industry search to uncover hidden stars and proven game-changers.",
  },
  {
    heading: "Crisis & Turnaround Leadership",
    paragraph:
      "Placing leaders who’ve successfully led through uncertainty, restructuring, or pivot moments.",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "In-depth stakeholder alignment to define strategic leadership needs",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Bespoke success profile: Values, capabilities, culture match",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "360° referencing and track record analysis",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Transition coaching and post-placement integration for up to 6 months",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Nimble execution, without compromising rigor",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Sharp understanding of founder-CEO vs. professional CEO transitions",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Transparent reporting at every milestone",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Post-placement support to reduce ramp-up risks",
    },
  ];

const CeoSearchPage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* <Navbar /> */}
        <Navbar />
        {/* Add padding-top to account for fixed navbar (90px height + 2px divider + some extra space) */}

        {/* Header Content */}
        <div className='lg:pt-[120px] pt-[50px] h-full'>
            {/* Headings with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 space-y-4 lg:pr-16 lg:pl-16 px-4'>
                <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px]'>Appointing the Visionaries of Tomorrow</h1>
                <h2 className='font-medium text-[16px] lg:text-[18px] leading-[20px] lg:leading-[40px] text-[#28B673]'>At Cirrcle Up, we help organizations identify and secure CEOs who can thrive in ambiguity, inspire trust, and create lasting value.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8 lg:max-h-[330px]'>
                <Image 
                    src="/board_ceo.jpg"
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 lg:pr-16 lg:pl-16 px-4'>
                <p className='text-[14px] lg:text-[18px] lg:leading-[30px] mt-12'>A CEO is more than an executive—they're the living expression of your organization's purpose, strategy, and culture. Finding the right one demands deep strategic clarity, instinctive people sense, and a data-backed approach. At Cirrcle Up, we bring all three to the table.
                    <br /><br />
In just two years, we’ve helped fast-scaling firms and legacy giants alike identify CEOs who don’t just lead—but transform. Our proprietary process blends leadership psychology, market mapping, and future-readiness assessments to help you make one of the most consequential decisions for your business.</p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        

        {/* What We Offer Section */}
        <div className='mt-16'>
          <WhatWeOfferSection 
            title="Our CEO Search Capabilities:" 
            items={whatWeOfferItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="How We Do It:"
            items={verticalItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-20"
            showDivider={false}
          />
        </div>


        <div className='mt-6'>
          <VerticalInfoList
            title="What Makes Cirrcle Up Different:"
            items={verticalItems2}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px]"
          />
        </div>
        
        <div className='flex justify-center mt-16 px-4 lg:px-0'>
            <QuoteBox 
              quote='A CEO appointment is both an ending and a beginning. Our job is to ensure it’s the beginning of your boldest chapter yet.'
              author='Animesh Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18 pb-10 lg:pb-0'>
          <CallToAction 
            heading="Let’s find the CEO who will define your next decade."
            buttons={[
              { title: "TALK TO OUR CEO PRACTICE LEAD", href: "/board-search" },
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default CeoSearchPage;