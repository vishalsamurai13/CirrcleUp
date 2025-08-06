 
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
    paragraph: "Chief Financial Officer (CFO)",
  },
  {
    paragraph: "Chief Human Resources Officer (CHRO)",
  },
  {
    paragraph: "Chief Marketing Officer (CMO)",
  },
  {
    paragraph: "Chief Technology/Product Officers (CTO/CPO)",
  },
  {
    paragraph: "Chief Operating Officers (COO)",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Competency gap analysis and succession risk assessment",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Leadership pipeline visibility with 9-box grid frameworks",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Internal development plans with coaching interventions",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "External benchmarking for ready-now talent",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Function-specific expertise in finance, tech, HR, marketing",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Structured yet nimble frameworks",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Transparent internal mobility planning",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Deep focus on retention post-transition",
    },
  ];

const CsuiteSuccessionPage = () => {
  

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
            <div className='flex justify-start mt-8 max-h-[330px]'>
                <Image 
                    src="/csuitesuccession.jpg"
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover object-top relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 lg:pr-16 lg:pl-16 px-4'>
                <p className='text-[14px] lg:text-[18px] lg:leading-[30px] mt-12'>In today’s evolving regulatory and reputational landscape, board succession is no longer optional. It’s essential. Governance effectiveness hinges not only on who’s around the table today, but who’s ready to sit there tomorrow. Cirrcle Up brings a fresh, structured, and forward-looking approach to help your organization plan for seamless board transitions.
                    <br /><br />
Whether you’re institutionalizing governance in a high-growth company or preparing for retiring directors in a family-run business, we help you balance continuity with transformation.</p>
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
            title="How We Help:"
            items={verticalItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-12"
            showDivider={false}
          />
        </div>

        <div className='flex flex-col mt-18 gap-12  lg:ml-[285px] lg:mr-[285px] lg:pr-16 lg:pl-16 px-4'>
            <h1 className='text-[30px] lg:text-[40px] font-medium'>Who We Serve</h1>
            <div className='lg:grid lg:grid-cols-2 flex flex-col gap-16'>
                <div className='flex flex-col gap-4 max-w-[400px]'>
                    <Image src='/board_search.jpg' alt='Artboard 1' width={400} height={150} className='max-h-[214px] lg:max-h-[240px] object-cover relative' />
                    <p className='text-center'>Functional benchmarking across sectors</p>
                </div>
                <div className='flex flex-col gap-4 max-w-[400px] '>
                    <Image src='/Succession_Artboard2.jpg' alt='Artboard 1' width={400} height={150} className='max-h-[214px] lg:max-h-[240px] object-cover relative' />
                    <p className='text-center'>Internal Assessment</p>
                </div>
                <div className='flex flex-col gap-4 max-w-[400px]'>
                    <Image src='/Succession_Artboard3.jpg' alt='Artboard 1' width={400} height={150} className='max-h-[214px] lg:max-h-[240px] object-cover relative' />
                    <p className='text-center'>Successor Scorecards</p>
                </div>
                <div className='flex flex-col gap-4 max-w-[400px]'>
                    <Image src='/Succession_Artboard4.jpg' alt='Artboard 1' width={400} height={150} className='max-h-[214px] lg:max-h-[240px] object-cover relative' />
                    <p className='text-center'>HR leadership</p>
                </div>
            </div>
        </div>


        <div className='mt-6'>
          <VerticalInfoList
            title="Why It Works:"
            items={verticalItems2}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-20"
          />
        </div>
        
        <div className='flex justify-center mt-8 px-4 lg:px-0'>
            <QuoteBox 
              quote='Succession at the C-suite is about more than filling shoes—it’s about shaping the future shape of the business.'
              author='Animesh Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18 pb-10 lg:pb-0'>
          <CallToAction 
            heading="Build your leadership bench before you need it."
            buttons={[
              { title: "BOOK A SUCCESSION HEALTH CHECK", href: "/board-search" },
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default CsuiteSuccessionPage;