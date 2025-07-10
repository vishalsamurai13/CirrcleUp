 
 
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
    heading: "●      Inclusive leadership training and team facilitation",
  },
  {
    heading: "●      Culture mapping and values alignment assessments",
  },
  {
    heading: "●      DEIB (Diversity, Equity, Inclusion & Belonging) audits and roadmaps",
  },
  {
    heading: "●      Inclusive hiring and succession strategies",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Leadership interviews, behavioral assessments, and policy reviews",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Safe-space workshops and storytelling-based awareness sessions",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Inclusion metrics and culture transformation dashboards",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Advisory on inclusive decision-making at board and CXO levels",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Behavior-first, not compliance-first",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Focused on intersectionality and belonging",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Measurement tools that link culture to business impact",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Stories, not slides: culture activation through shared experience",
    },
  ];

const ABperformancePage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* <Navbar /> */}
        <Navbar />

        {/* Header Content */}
        <div className='pt-[120px] h-full'>
            {/* Headings with margins */}
            <div className='ml-[285px] mr-[285px] mt-12 space-y-4 pr-16 pl-16'>
                <h1 className='font-bold text-[46px] leading-[60px]'>Building Cultures Where Everyone Thrives</h1>
                <h2 className='font-medium text-[24px] leading-[40px] text-[#28B673]'>Cirrcle Up helps organizations embed inclusion and belonging into the DNA of leadership, team dynamics, and decision-making.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8'>
                <Image 
                    src="/transformation1.png" 
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='ml-[285px] mr-[285px] mt-12 pr-16 pl-16'>
                <p className='text-[18px] leading-[23px]'>Inclusion is no longer a side initiative—it’s a core lever for performance, retention, and innovation. At Cirrcle Up, we help organizations design leadership cultures where diverse perspectives are not only welcomed but actively amplified. We believe culture isn’t built by HR alone—it’s led from the top.
                    <br />  <br />
Our Inclusion & Culture practice helps high-growth and legacy organizations evolve their leadership behavior, decision-making, and people systems to be truly inclusive and values-driven. We bring together diagnostics, leadership interventions, and storytelling to create meaningful, lasting change.</p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        {/* What We Offer Section */}
        <div className='mt-32'>
          <WhatWeOfferSection 
            title="We Work On:" 
            items={whatWeOfferItems}
            wrapperClassName="ml-[285px] mr-[285px] py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Approach Highlights:"
            items={verticalItems}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
            showDivider={false}
          />
        </div>

        <div className='mt-6'>
          <VerticalInfoList
            title="Why Cirrcle Up:"
            items={verticalItems2}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
          />
        </div>
        
        <div className='flex justify-center mt-32'>
            <QuoteBox 
              quote='Culture is not a poster—it’s a daily practice. Inclusion is not a buzzword—it’s a business advantage.'
              author='Animesh Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18'>
          <CallToAction 
            heading="Let’s build a culture that includes, inspires, and endures."
            buttons={[
              { title: "START WITH A CULTURE AUDIT", href: "/board-search" },
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default ABperformancePage;