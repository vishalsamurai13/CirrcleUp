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
    paragraph: "Readiness for new roles or promotions",
  },
  {
    paragraph: "Leadership potential across internal talent",
  },
  {
    paragraph: "Strategic and cultural fit for new hires",
  },
  {
    paragraph: "Comparative benchmarking across functions or industry peers",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Hogan, 16PF, MBTI, and industry-specific tools",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Customized 360° feedback with anonymized reporting",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Role-specific success profile evaluations",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Internal vs. external benchmarking dashboards",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Boutique attention with enterprise rigor",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Proactive succession and committee planning",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Strategic benchmarking against high performers",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "A next-gen lens for a next-gen board",
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
                <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px]'>Leadership Insights That Drive Better Decisions</h1>
                <h2 className='font-medium text-[16px] lg:text-[18px] leading-[20px] lg:leading-[40px] text-[#28B673]'>Cirrcle Up offers customized leadership assessments and benchmarking tools that reveal readiness, gaps, and opportunities across your top talent.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8 lg:max-h-[330px]'>
                <Image 
                    src="/Succession_Artboard3.jpg"
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 lg:pr-16 lg:pl-16 px-4'>
                <p className='text-[14px] lg:text-[18px] lg:leading-[30px] mt-12'>You can’t optimize what you don’t measure. And in leadership, gut feel alone isn’t enough. Our Assessment & Benchmarking services combine psychometric science, role-based evaluations, and strategic fit modeling to help you identify, grow, and retain your top leaders.
                    <br /><br />
                    Whether you're hiring, planning succession, or optimizing team performance, our tools offer clarity and actionability—not just reports. As a young firm, we’ve earned client trust through tailored insights that actually move the needle on decision-making.</p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        {/* What We Offer Section */}
        <div className='mt-16'>
          <WhatWeOfferSection 
            title="We Help You Assess:" 
            items={whatWeOfferItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px]"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Tools & Techniques We Use:"
            items={verticalItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-20"
            showDivider={false}
          />
        </div>

        <div className='flex justify-center mt-12 px-4 lg:px-0'>
            <CaseStudyCard
                title="Case Study"
                description="A fintech company wanted to assess succession depth across 6 key roles. We created custom scorecards aligned to business goals and conducted assessments across 12 high-potentials. 4 were placed in new roles, and 2 entered structured development journeys."
            />
        </div>

        <div className='mt-6'>
          <VerticalInfoList
            title="Why Clients Trust Cirrcle Up:"
            items={verticalItems2}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-20"
          />
        </div>
        
        <div className='flex justify-center mt-8 px-4 lg:px-0'>
            <QuoteBox 
              quote='The right board doesn’t just guide—it accelerates. We believe in building boards that spark transformation, not just tradition.'
              author='Animesh Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18 pb-10 lg:pb-0'>
          <CallToAction 
            heading="Ready to reimagine your board?"
            buttons={[
              { title: "SCHEDULE A TALENT BENCHMARKING CALL", href: "/board-search" },
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default ABperformancePage;