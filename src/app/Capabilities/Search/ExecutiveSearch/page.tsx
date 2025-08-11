 
import CallToAction from '@/components/CTA';
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import QuoteBox from '@/components/Quote';
import VerticalInfoList from '@/components/VerticalInfoList';

import { BookOpen, MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

// const whatWeOfferItems = [
//   {
//     paragraph: "Chief Financial Officer (CFO)",
//   },
//   {
//     paragraph: "Chief Human Resources Officer (CHRO)",
//   },
//   {
//     paragraph: "Chief Marketing Officer (CMO)",
//   },
//   {
//     paragraph: "Chief Technology Officer (CTO)",
//   },
//   {
//     paragraph: "Chief Growth/Product/Supply Chain Officers and more",
//   },
// ];

const verticalItems = [
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Diagnostic session with hiring leaders and key stakeholders",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Custom Success Profile mapped to strategy, team culture, and leadership maturity",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Talent mapping, outreach, and in-depth evaluation",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Structured reporting: Candidate scorecards + cultural alignment reports",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Offer negotiation, closing, and 90-day onboarding support",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Sector specialists who speak your business language",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "No recycling of candidates—every search is fresh",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Strong retention focus, not just replacement",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "We balance EQ and IQ in every placement",
    },
  ];

const ExecutivesearchPage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* <Navbar /> */}
        <Navbar />

        {/* Header Content */}
        <div className='pt-[50px] lg:pt-[120px] h-full'>
            {/* Headings with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 space-y-4 lg:pr-16 lg:pl-16 px-4'>
                <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px]'>Powering Business Momentum with the Right Leadership</h1>
                <h2 className='font-medium text-[16px] lg:text-[18px] leading-[20px] lg:leading-[40px] text-[#28B673]'>Cirrcle Up delivers tailored executive search services across the C-suite—designed to drive transformation, innovation, and cultural cohesion.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8 lg:max-h-[330px]'>
                <Image 
                    src="/board_search.jpg"
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 lg:pr-16 lg:pl-16 px-4'>
                <p className='text-[14px] lg:text-[18px] lg:leading-[30px] mt-12'>Great leadership doesn’t just react—it anticipates, pivots, and unlocks value. At Cirrcle Up, our Executive Search practice is built to identify leaders across functions who can do exactly that. Whether you need a growth-oriented CFO, a digital-first CMO, or a transformational CHRO, we make sure you don’t just fill a role—you future-proof it.
                    <br/><br/>
Though we’re just two years old, our search practice is battle-tested and industry-backed. With every mandate, we combine industry intuition, structured assessments, and stakeholder insight to shortlist executives who align with your business goals and your team’s culture.</p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        {/* What We Offer Section */}
        {/* <div className='mt-16'>
          <WhatWeOfferSection 
            title="Roles We Cover:" 
            items={whatWeOfferItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-16"
          />
        </div> */}

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Our Search Blueprint:"
            items={verticalItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-20"
            showDivider={false}
          />
        </div>


        <div className='mt-6'>
          <VerticalInfoList
            title="What Sets Cirrcle Up Apart:"
            items={verticalItems2}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] "
          />
        </div>
        
        <div className='flex justify-center mt-8 px-4 lg:px-0'>
            <QuoteBox 
              quote='Executive hiring is like a relay. The baton must be passed to someone who runs not just faster—but smarter.'
              author='Bijendra Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18 pb-10 lg:pb-0'>
          <CallToAction 
            heading="Let’s find the leader who fits your future."
            buttons={[
              { title: "START A SEARCH NOW", href: "/Contact/GetInTouch" },
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default ExecutivesearchPage;