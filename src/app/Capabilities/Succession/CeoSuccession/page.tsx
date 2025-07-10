 
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
    heading: "●      Internal CEO readiness benchmarking",
  },
  {
    heading: "●      External CEO market mapping and search",
  },
  {
    heading: "●      Interim leadership strategy",
  },
  {
    heading: "●      Post-placement coaching for CEO and key team members",
  },
  {
    heading: "●      Founder-CEO exit planning and communication",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Engage with board/stakeholders for vision alignment",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Define CEO success criteria for the next 3–5 years",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Evaluate internal vs. external potential with succession scorecards",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Conduct transition planning workshops and team readiness exercises",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Deep emotional intelligence in managing leadership exits",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Neutral facilitation between stakeholders with competing priorities",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Pre- and post-transition diagnostics",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Cultural continuity + strategic transformation frameworks",
    },
  ];

const CeoSuccessionPage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* <Navbar /> */}
        <Navbar />

        {/* Header Content */}
        <div className='pt-[120px] h-full'>
            {/* Headings with margins */}
            <div className='ml-[285px] mr-[285px] mt-12 space-y-4 pr-16 pl-16'>
                <h1 className='font-bold text-[46px] leading-[60px]'>Navigating the Most Critical Leadership Transition</h1>
                <h2 className='font-medium text-[24px] leading-[40px] text-[#28B673]'>Cirrcle Up guides organizations through smooth, strategic, and emotionally intelligent CEO transitions—whether planned or unforeseen.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8'>
                <Image 
                    src="/ceo_succession.png" 
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='ml-[285px] mr-[285px] mt-12 pr-16 pl-16'>
                <p className='text-[18px] leading-[23px]'>A CEO change is a defining moment for any organization. It’s more than an executive handover—it’s a cultural, strategic, and emotional shift that can either energize or destabilize the business. At Cirrcle Up, we specialize in helping boards and promoters plan, prepare, and execute CEO transitions with minimal disruption and maximum alignment.
                    <br /><br />
In our two years, we’ve built a strong track record of helping organizations prepare for founder exits, post-acquisition transitions, and growth-stage step-ups. We don’t just identify successors—we ready them, support them, and ensure the team is aligned to follow their lead.</p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        {/* What We Offer Section */}
        <div className='mt-32'>
          <WhatWeOfferSection 
            title="Our CEO Succession Offerings:" 
            items={whatWeOfferItems}
            wrapperClassName="ml-[285px] mr-[285px] py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="How We Work:"
            items={verticalItems}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
            showDivider={false}
          />
        </div>


        <div className='mt-6'>
          <VerticalInfoList
            title="Why It Works:"
            items={verticalItems2}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
          />
        </div>
        
        <div className='flex justify-center mt-32'>
            <QuoteBox 
              quote='A successful CEO transition honors the past, energizes the present, and secures the future. We ensure that all three are respected.'
              author='Animesh Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18'>
          <CallToAction 
            heading="Secure your company’s future leadership, today."
            buttons={[
              { title: "BOOK A CEO SUCCESSION PLANNING SESSION", href: "/board-search" },
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default CeoSuccessionPage;