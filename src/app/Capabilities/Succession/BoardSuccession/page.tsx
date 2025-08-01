 
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
    paragraph: "Board effectiveness audit and composition mapping",
  },
  {
    paragraph: "Identification of skill gaps in ESG, digital, global strategy, and risk",
  },
  {
    paragraph: "Diversity and inclusion strategy for next-gen directors",
  },
  {
    paragraph: "Proactive search and transition planning for aging or retiring members",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Current board evaluation: skill matrix, tenure, independence",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Future-fit roadmap aligned to business strategy",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Internal vs. external succession options",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Transitional onboarding and knowledge transfer support",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Succession planning, not last-minute replacement",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Alignment with investor and stakeholder expectations",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Seamless integration with overall governance and committee needs",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Robust succession pipeline tracking tools",
    },
  ];

const BoardSuccessionPage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* <Navbar /> */}
        <Navbar />

        {/* Header Content */}
        <div className='lg:pt-[120px] pt-[50px] h-full'>
            {/* Headings with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 space-y-4 lg:pr-16 lg:pl-16 px-4'>
                <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px]'>Future-Proofing Governance, One Seat at a Time</h1>
                <h2 className='font-medium text-[16px] lg:text-[18px] leading-[20px] lg:leading-[40px] text-[#28B673]'>Cirrcle Up helps organizations prepare boardrooms for tomorrow—with succession strategies that blend diversity, independence, and evolving stakeholder expectations.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8'>
                <Image 
                    src="/board_succession.png" 
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 lg:pr-16 lg:pl-16 px-4'>
                <p className='text-[14px] lg:text-[18px] lg:leading-[30px] mt-12'>In today’s evolving regulatory and reputational landscape, board succession is no longer optional. It’s essential. Governance effectiveness hinges not only on who’s around the table today, but who’s ready to sit there tomorrow. Cirrcle Up brings a fresh, structured, and forward-looking approach to help your organization plan for seamless board transitions.
                    <br /><br />
                  Whether you’re institutionalizing governance in a high-growth company or preparing for retiring directors in a family-run business, we help you balance continuity with transformation.
                </p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        {/* What We Offer Section */}
        <div className='mt-16'>
          <WhatWeOfferSection 
            title="Our Board Succession Expertise:" 
            items={whatWeOfferItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Our Process:"
            items={verticalItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-12"
            showDivider={false}
          />
        </div>


        <div className='mt-6'>
          <VerticalInfoList
            title="What Makes Us Different:"
            items={verticalItems2}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px]"
          />
        </div>
        
        <div className='flex justify-center mt-8 px-4 lg:px-0'>
            <QuoteBox 
              quote='"A high-performing board is one that prepares for its future—seat by seat, skill by skill."'
              author='Animesh Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18 pb-10 lg:pb-0'>
          <CallToAction 
            heading="Start building a board that lasts."
            buttons={[
              { title: "TALK TO A BOARD SUCCESSION SPECIALIST", href: "/board-search" },
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default BoardSuccessionPage;