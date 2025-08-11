import CallToAction from '@/components/CTA';
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import QuoteBox from '@/components/Quote';
import VerticalInfoList from '@/components/VerticalInfoList';
import WhatWeOfferSection from '@/components/Whatweoffer';
import { BookOpen, MoveRight } from 'lucide-react';
import React from 'react'

const whatWeOfferItems = [
  {
    paragraph: "ESG leadership competency mapping and succession integration",
  },
  {
    paragraph: "Sustainability expertise in board appointments",
  },
  {
    paragraph: "CXO assessment and upskilling in ESG knowledge",
  },
  {
    paragraph: "Embedding sustainability into leadership evaluations and hiring",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Deep-dive diagnostics on ESG-readiness across leadership layers",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Strategic facilitation: Visioning, policy alignment, reporting frameworks",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Partnership with sustainability experts for cross-functional learning",
  },
  {
    icon: <MoveRight className='w-[20px] lg:w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "ESG-aligned candidate scorecards for hiring and evaluation",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "We understand both ESG regulations and boardroom dynamics",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "Proven experience integrating sustainability into leadership design",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "We combine sustainability knowledge with executive search expertise",
    },
    {
      icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
      paragraph: "We build internal champions who sustain the movement",
    },
  ];

const SustainabilityperformancePage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* <Navbar /> */}
        <Navbar />

        {/* Header Content */}
        <div className='lg:pt-[120px] pt-[50px] h-full'>
            {/* Headings with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 space-y-4 lg:pr-16 lg:pl-16 px-4'>
                <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px]'>Leadership for a Sustainable Tomorrow</h1>
                <h2 className='font-medium text-[16px] lg:text-[18px] leading-[20px] lg:leading-[40px] text-[#28B673]'>Cirrcle Up partners with boards and CXOs to embed sustainability into leadership, governance, and long-term business vision.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8'>
              <div className="">
                <video
                  className="object-cover object-center w-[1090px] max-h-[330px]"
                  autoPlay
                  muted
                  playsInline
                >
                  <source src="/leadership.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Paragraph with margins */}
            <div className='lg:ml-[285px] lg:mr-[285px] mt-12 space-y-4 lg:pr-16 lg:pl-16 px-4'>
                <p className='text-[14px] lg:text-[18px] lg:leading-[30px] mt-12'>Sustainability is no longer a checkbox—it’s a CEO and boardroom priority. Customers demand it. Investors reward it. Employees expect it. At Cirrcle Up, we work with leadership teams to elevate sustainability from a compliance task to a strategic pillar.
                    <br />  <br />
                  As part of our Transformation Practice, we help organizations embed ESG (Environmental, Social, Governance) priorities into how they hire, lead, and grow. From board composition to CEO KPIs, we ensure sustainability isn’t a silo—it’s the way forward.</p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        {/* What We Offer Section */}
        <div className='mt-16'>
          <WhatWeOfferSection 
            title="Our Offerings:" 
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

        <div>
          <VerticalInfoList
            title="Why Cirrcle Up:"
            items={verticalItems2}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px]"
          />
        </div>
        
        <div className='flex justify-center mt-8 px-4 lg:px-0'>
            <QuoteBox 
              quote='Sustainability isn’t just about the planet—it’s about leadership that dares to care, adapt, and commit to impact.'
              author='Animesh Singh Rao'
            />
        </div>
        

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18 pb-10 lg:pb-0'>
          <CallToAction 
            heading="Lead with purpose. Grow with responsibility."
            buttons={[
              { title: "START YOUR ESG LEADERSHIP JOURNEY", href: "/Contact/GetInTouch" },
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default SustainabilityperformancePage;