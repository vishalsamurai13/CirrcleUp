 
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
    heading: "●      Chief Financial Officer (CFO)",
  },
  {
    heading: "●      Chief Human Resources Officer (CHRO)",
  },
  {
    heading: "●      Chief Marketing Officer (CMO)",
  },
  {
    heading: "●      Chief Technology/Product Officers (CTO/CPO)",
  },
  {
    heading: "●      Chief Operating Officers (COO)",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Competency gap analysis and succession risk assessment",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Leadership pipeline visibility with 9-box grid frameworks",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Internal development plans with coaching interventions",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "External benchmarking for ready-now talent",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Function-specific expertise in finance, tech, HR, marketing",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Structured yet nimble frameworks",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Transparent internal mobility planning",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Deep focus on retention post-transition",
    },
  ];

const CsuiteSuccessionPage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* <Navbar /> */}
        <Navbar />

        {/* Header Content */}
        <div className='pt-[120px] h-full'>
            {/* Headings with margins */}
            <div className='ml-[285px] mr-[285px] mt-12 space-y-4 pr-16 pl-16'>
                <h1 className='font-bold text-[46px] leading-[60px]'>Future-Proofing Governance, One Seat at a Time</h1>
                <h2 className='font-medium text-[24px] leading-[40px] text-[#28B673]'>Cirrcle Up helps organizations prepare boardrooms for tomorrow—with succession strategies that blend diversity, independence, and evolving stakeholder expectations.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8'>
                <Image 
                    src="/csuitesuccession.png" 
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='ml-[285px] mr-[285px] mt-12 pr-16 pl-16'>
                <p className='text-[18px] leading-[23px]'>In today’s evolving regulatory and reputational landscape, board succession is no longer optional. It’s essential. Governance effectiveness hinges not only on who’s around the table today, but who’s ready to sit there tomorrow. Cirrcle Up brings a fresh, structured, and forward-looking approach to help your organization plan for seamless board transitions.
                    <br /><br />
Whether you’re institutionalizing governance in a high-growth company or preparing for retiring directors in a family-run business, we help you balance continuity with transformation.</p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        {/* What We Offer Section */}
        <div className='mt-32'>
          <WhatWeOfferSection 
            title="Roles We Cover:" 
            items={whatWeOfferItems}
            wrapperClassName="ml-[285px] mr-[285px] py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="How We Help:"
            items={verticalItems}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
            showDivider={false}
          />
        </div>

        <div className='flex flex-col mt-18 gap-12  ml-[285px] mr-[285px] pr-16 pl-16'>
            <h1 className='text-[32px] font-bold'>Who We Serve</h1>
            <div className='grid grid-cols-2 gap-16'>
                <div className='flex flex-col gap-4 max-w-[400px]'>
                    <Image src='/Succession_Artboard1.png' alt='Artboard 1' width={400} height={150} className='object-cover relative' />
                    <p className='text-center'>Functional benchmarking across sectors</p>
                </div>
                <div className='flex flex-col gap-4 max-w-[400px]'>
                    <Image src='/Succession_Artboard2.png' alt='Artboard 1' width={400} height={150} className='object-cover relative' />
                    <p className='text-center'>Talent calibration with internal assessments</p>
                </div>
                <div className='flex flex-col gap-4 max-w-[400px]'>
                    <Image src='/Succession_Artboard3.png' alt='Artboard 1' width={400} height={150} className='object-cover relative' />
                    <p className='text-center'>Role-specific successor scorecards</p>
                </div>
                <div className='flex flex-col gap-4 max-w-[400px]'>
                    <Image src='/Succession_Artboard4.png' alt='Artboard 1' width={400} height={150} className='object-cover relative' />
                    <p className='text-center'>Visibility dashboards for HR and leadership</p>
                </div>
            </div>
        </div>


        <div className='mt-6'>
          <VerticalInfoList
            title="Why It Works::"
            items={verticalItems2}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
          />
        </div>
        
        <div className='flex justify-center mt-32'>
            <QuoteBox 
              quote='Succession at the C-suite is about more than filling shoes—it’s about shaping the future shape of the business.'
              author='Animesh Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18'>
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