 
 
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
    paragraph: "Inclusive leadership training and team facilitation",
  },
  {
    paragraph: "Culture mapping and values alignment assessments",
  },
  {
    paragraph: "DEIB (Diversity, Equity, Inclusion & Belonging) audits and roadmaps",
  },
  {
    paragraph: "Inclusive hiring and succession strategies",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Leadership interviews, behavioral assessments, and policy reviews",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Safe-space workshops and storytelling-based awareness sessions",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Inclusion metrics and culture transformation dashboards",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Advisory on inclusive decision-making at board and CXO levels",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Behavior-first, not compliance-first",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Focused on intersectionality and belonging",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Measurement tools that link culture to business impact",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Stories, not slides: culture activation through shared experience",
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
                <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px]'>Building Cultures Where Everyone Thrives</h1>
                <h2 className='font-medium text-[16px] lg:text-[18px] leading-[20px] lg:leading-[40px] text-[#28B673]'>Cirrcle Up helps organizations embed inclusion and belonging into the DNA of leadership, team dynamics, and decision-making.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8 max-h-[330px]'>
                <Image 
                    src="/transformation1.jpg"
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 space-y-4 lg:pr-16 lg:pl-16 px-4'>
                <p className='text-[14px] lg:text-[18px] lg:leading-[30px] mt-12'>Inclusion is no longer a side initiative—it’s a core lever for performance, retention, and innovation. At Cirrcle Up, we help organizations design leadership cultures where diverse perspectives are not only welcomed but actively amplified. We believe culture isn’t built by HR alone—it’s led from the top.
                    <br />  <br />
Our Inclusion & Culture practice helps high-growth and legacy organizations evolve their leadership behavior, decision-making, and people systems to be truly inclusive and values-driven. We bring together diagnostics, leadership interventions, and storytelling to create meaningful, lasting change.</p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        {/* What We Offer Section */}
        <div className='mt-16'>
          <WhatWeOfferSection 
            title="We Work On:" 
            items={whatWeOfferItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px]"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Approach Highlights:"
            items={verticalItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-20"
            showDivider={false}
          />
        </div>

        <div >
          <VerticalInfoList
            title="Why Cirrcle Up:"
            items={verticalItems2}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px]"
          />
        </div>
        
        <div className='flex justify-center mt-8 px-4 lg:px-0'>
            <QuoteBox 
              quote='Culture is not a poster—it’s a daily practice. Inclusion is not a buzzword—it’s a business advantage.'
              author='Animesh Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18 pb-10 lg:pb-0'>
          <CallToAction 
            heading="Let’s build a culture that includes, inspires, and endures."
            buttons={[
              { title: "START WITH A CULTURE AUDIT", href: "/Contact/GetInTouch" },
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default ABperformancePage;