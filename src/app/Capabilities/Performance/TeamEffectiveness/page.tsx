 
 
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
    heading: "●      Team dynamics and collaboration assessments",
  },
  {
    heading: "●      Strategic alignment workshops (vision, goals, interdependencies)",
  },
  {
    heading: "●      Conflict resolution and trust-building sessions",
  },
  {
    heading: "●      Ongoing team coaching and feedback loops",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Kick-off diagnostics using interviews, surveys, and behavioral tools",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Custom program design: 2-week sprints or 3-month programs",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Immersive workshops, retrospectives, and leadership labs",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Tracking progress using quarterly team health check-ins",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Neutral facilitation to address sensitive dynamics",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Blend of data, psychology, and business reality",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Visible team shifts within 30–60 days",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Applicable across founding teams, BUs, or executive groups",
    },
  ];

const TEperformancePage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* <Navbar /> */}
        <Navbar />

        {/* Header Content */}
        <div className='pt-[120px] h-full'>
            {/* Headings with margins */}
            <div className='ml-[285px] mr-[285px] mt-12 space-y-4 pr-16 pl-16'>
                <h1 className='font-bold text-[46px] leading-[60px]'>High-Performance Teams Start With Alignment</h1>
                <h2 className='font-medium text-[24px] leading-[40px] text-[#28B673]'>Cirrcle Up helps leadership teams build trust, improve collaboration, and operate with strategic alignment—especially during periods of growth or change.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8'>
                <Image 
                    src="/perfomance4.png" 
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='ml-[285px] mr-[285px] mt-12 pr-16 pl-16'>
                <p className='text-[18px] leading-[23px]'>A high-performing team doesn’t just deliver outcomes—it multiplies impact. But even the most talented individuals can fall short if trust is low, alignment is weak, or silos persist. At Cirrcle Up, our Team Effectiveness interventions are designed to unlock collective potential, resolve friction, and align efforts toward a shared vision.
                  <br /><br />
We’ve helped dozens of teams—founding teams, executive teams, cross-functional leaders—become more cohesive, communicative, and focused. Our approach is simple: diagnose, design, and deliver. And because we’re a young, agile firm, we adapt fast and work with empathy.</p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        {/* What We Offer Section */}
        <div className='mt-32'>
          <WhatWeOfferSection 
            title="Our Services Include:" 
            items={whatWeOfferItems}
            wrapperClassName="ml-[285px] mr-[285px] py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Our Approach Includes:"
            items={verticalItems}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
            showDivider={false}
          />
        </div>

        <div className='flex justify-center mt-12'>
            <CaseStudyCard
                title="Client Example"
                description="An e-commerce unicorn’s leadership team was struggling post-merger. Cirrcle Up conducted a two-day offsite followed by monthly coaching. Within 60 days, the team reported a 46% increase in clarity and a 35% drop in escalations."
            />
        </div>

        <div className='mt-6'>
          <VerticalInfoList
            title="Why Clients Work With Us:"
            items={verticalItems2}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
          />
        </div>
        
        <div className='flex justify-center mt-32'>
            <QuoteBox 
              quote='Effective teams are not built on good intentions—they’re built on shared understanding, consistent trust, and strategic clarity.'
              author='Animesh Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18'>
          <CallToAction 
            heading="Build the team that builds your business."
            buttons={[
              { title: "EXPLORE OUR OFFSITE FACILITATION SERVICES", href: "/board-search" },
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default TEperformancePage;