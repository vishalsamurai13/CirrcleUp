/* eslint-disable react/no-unescaped-entities */
 
import CaseStudyCard from '@/components/CaseStudy';
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
    heading: "●      Newly appointed CXOs",
  },
  {
    heading: "●      High-potential leaders preparing for promotion",
  },
  {
    heading: "●      Founders transitioning to CEO roles",
  },
  {
    heading: "●      Senior professionals leading through complexity or conflict",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Diagnostic sessions to uncover leadership goals and blockers",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Matchmaking with experienced executive mentors across domains",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "1-on-1 coaching sessions over 3–6 months",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Integrated feedback loops from peers and stakeholders",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Mentors from global networks with real business experience",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Coaching that’s equal parts personal and performance-focused",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Structured accountability and progress dashboards",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Integration with development plans and succession roadmaps",
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
                <h1 className='font-bold text-[46px] leading-[60px]'>Guiding High-Potential Leaders to Peak Impact</h1>
                <h2 className='font-medium text-[24px] leading-[40px] text-[#28B673]'>Cirrcle Up offers personalized mentoring journeys for senior leaders navigating growth, transition, and transformation.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8'>
                <Image 
                    src="/Accelerator1.png" 
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='ml-[285px] mr-[285px] mt-12 pr-16 pl-16'>
                <p className='text-[18px] leading-[23px]'>Even the most successful executives benefit from a sounding board—especially during moments of scaling, transition, or personal reinvention. Our Executive Mentoring program pairs leaders with seasoned mentors and coaches who’ve been there, done that, and know how to ask the questions that unlock clarity.
                    <br /><br />
At Cirrcle Up, we don’t believe in generic coaching playbooks. Our mentoring journeys are highly personalized, built on trust, and focused on your leader’s business context. Whether it’s preparing for a new role, managing a crisis, or scaling a team, we build a structured path to impact.</p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        {/* What We Offer Section */}
        <div className='mt-32'>
          <WhatWeOfferSection 
            title="Who It's For:" 
            items={whatWeOfferItems}
            wrapperClassName="ml-[285px] mr-[285px] py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Mentoring Journey Includes:"
            items={verticalItems}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
            showDivider={false}
          />
        </div>

        <div className='flex justify-center mt-12'>
            <CaseStudyCard
                title="Client Story"
                description="A fast-growing ed-tech startup promoted a CMO to CEO. The transition was proving challenging. Cirrcle Up assigned a mentor with similar domain experience, designed a 90-day acceleration plan, and coached through high-stakes decision-making. Within six months, revenue stabilized and team engagement scores rose 2x."
            />
        </div>

        <div className='mt-6'>
          <VerticalInfoList
            title="Our Edge:"
            items={verticalItems2}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
          />
        </div>
        
        <div className='flex justify-center mt-32'>
            <QuoteBox 
              quote='Great leadership isn’t about knowing all the answers—it’s about having the right person to ask the right questions.'
              author='Animesh Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18'>
          <CallToAction 
            heading="Let your leaders grow through wisdom, not just experience."
            buttons={[
              { title: "BOOK A CHEMISTRY MATCH SESSION", href: "/board-search" },
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default ABperformancePage;