 
 
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
    paragraph: "Transition planning for both internal and external successors",
  },
  {
    paragraph: "Pre-departure documentation and knowledge transfer design",
  },
  {
    paragraph: "Cultural alignment workshops with leadership teams",
  },
  {
    paragraph: "CEO onboarding journeys with clear 30-60-90 plans",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Successor immersion planning (stakeholders, business model, key metrics",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Alignment with board/investor expectations",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Executive coaching and transition support for new CEOs",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Internal communication planning for change management",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Empathetic yet structured transition management",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Tailored onboarding journeys aligned to strategy",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Deep founder-CEO transition expertise",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Post-transition feedback and recalibration checkpoints",
    },
  ];

const ABperformancePage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* <Navbar /> */}
        <Navbar />

        {/* Header Content */}
        <div className='lg:pt-[120px] pt-[50px] h-full'>
            {/* Headings with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 space-y-4 lg:pr-16 lg:pl-16 px-4'>
                <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px]'>Ensuring Seamless and Strategic CEO Handover</h1>
                <h2 className='font-medium text-[16px] lg:text-[18px] leading-[20px] lg:leading-[40px] text-[#28B673]'>Cirrcle Up helps companies plan, manage, and support CEO transitions—so change becomes a catalyst, not a crisis.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8'>
                <Image 
                    src="/perfomance2.png" 
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 lg:pr-16 lg:pl-16 px-4'>
                <p className='text-[14px] lg:text-[18px] lg:leading-[30px] mt-12'>When a CEO transitions—whether due to planned retirement, promotion, M&A, or crisis—the impact is felt across every layer of the organization. It affects culture, investor confidence, talent retention, and strategic continuity. At Cirrcle Up, we treat CEO transitions with the depth, diligence, and empathy they deserve.
                  <br />  <br />
We work with boards, founders, and CHROs to ensure transitions are not just seamless but strategic. From pre-transition planning to 180-day onboarding support, we help new CEOs hit the ground running—and stay aligned.</p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        {/* What We Offer Section */}
        <div className='mt-16'>
          <WhatWeOfferSection 
            title="Our CEO Transition Services:" 
            items={whatWeOfferItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px]"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Key Components:"
            items={verticalItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px]"
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
        
        <div className='flex justify-center mt-8 px-4 lg:px-0'>
            <QuoteBox 
              quote='A CEO transition isn’t just a moment—it’s a movement. We help you lead it with clarity and confidence.'
              author='Animesh Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18 pb-10 lg:pb-0'>
          <CallToAction 
            heading="Make your CEO transition a moment of momentum."
            buttons={[
              { title: "BOOK A TRANSITION PLANNING CALL", href: "/board-search" },
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default ABperformancePage;