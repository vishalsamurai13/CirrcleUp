import CallToAction from '@/components/CTA';
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import VerticalInfoList from '@/components/VerticalInfoList';
import WhatWeOfferSection from '@/components/Whatweoffer';
import { BookOpen } from 'lucide-react';
import React from 'react'

const whatWeOfferItems = [
  {
    heading: "Board Search",
    paragraph:
      "We help you identify independent board directors who understand governance, risk, and value creation. Our emphasis on diversity, independence, and experience ensures your board reflects today’s evolving stakeholder expectations.",
    buttonText: "Learn More",
  },
  {
    heading: "CEO Search",
    paragraph:
      "The CEO is the face of your brand and the custodian of your long-term vision. We help companies find transformational CEOs who can balance operational excellence with innovation and long-term impact.",
    buttonText: "Learn More",
  },
  {
    heading: "Executive Search",
    paragraph:
      "Our executive search capabilities span across the C-suite—from CFOs and CMOs to CHROs and CTOs. We use a tailored, data-backed approach to ensure that your leadership pipeline aligns with both your current and future business goals.",
    buttonText: "Learn More",
  },
];

const verticalItems = [
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "Strategic discovery sessions with your board and stakeholders",
  },
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "Behavioral and psychometric assessment for every shortlist",
  },
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "Industry benchmarking and cultural alignment matrix",
  },
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "60-day and 180-day onboarding support for seamless transitions",
  },
];

const verticalItems2 = [
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "We’re industry-focused. Your world is our expertise.",
  },
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "We care about fit—strategic, cultural, and aspirational.",
  },
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "Our candidate relationships run deep, not wide.",
  },
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "We're not just search partners—we’re your strategic advisors.",
  },
];


const SearchPage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* <Navbar /> */}
        <Navbar />
        {/* Add padding-top to account for fixed navbar (90px height + 2px divider + some extra space) */}

        {/* Header Content */}
        <div className='pt-[120px] ml-[285px] mr-[285px] h-full p-16'>
            <div className='mt-12 space-y-4'>
                <h1 className='font-medium text-[46px] leading-[60px]'>Precision-led Executive Search for Today and Tomorrow</h1>
                <h2 className='font-medium text-[24px] leading-[40px] text-[#28B673]'>Navigate uncertainty and unlock leadership potential with Cirrcle Up&apos;s Search offerings. We find transformative leaders who don&apos;t just fill roles—they drive results.</h2>
                <p className='text-[18px] leading-[23px] mt-12'>In an era of disruption and accelerated change, leadership isnt just about managing—its about steering organizations with vision, agility, and strategic depth. At Cirrcle Up, our Search practice is designed to help you discover exceptional talent across the boardroom and the C-suite.
                We believe great leadership is the most powerful lever for success. Thats why our approach goes far beyond resumes and referrals. With a deep focus on cultural fit, strategic capability, and future-readiness, we find leaders who are built for impact.</p>
            </div>
            <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div>
        </div>

        {/* What We Offer Section */}
        <div className='mt-32'>
          <WhatWeOfferSection 
            title="What We Offer:" 
            items={whatWeOfferItems}
            wrapperClassName="ml-[285px] mr-[285px] py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Our Methodology:"
            items={verticalItems}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
          />
        </div>

        {/* Vertical Info list 2 */}
        <div>
          <VerticalInfoList
            title="Why Cirrcle Up:"
            items={verticalItems2}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
          />
        </div>

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18'>
          <CallToAction 
            heading="Discover how our search services can reshape your leadership."
            buttons={[
              { title: "EXPLORE BOARD SEARCH", href: "/board-search" },
              { title: "EXPLORE CEO SEARCH", href: "/ceo-search" },
              { title: "EXPLORE EXECUTIVE SEARCH", href: "/executive-search" }
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default SearchPage;