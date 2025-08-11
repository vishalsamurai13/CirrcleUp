import CallToAction from '@/components/CTA';
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import VerticalInfoList from '@/components/VerticalInfoList';
import WhatWeOfferSection from '@/components/Whatweoffer';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const whatWeOfferItems = [
  {
    heading: "Board Search",
    paragraph:
      "We help you identify independent board directors who understand governance, risk, and value creation. Our emphasis on diversity, independence, and experience ensures your board reflects today’s evolving stakeholder expectations.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Search/BoardSearch",
  },
  {
    heading: "CEO Search",
    paragraph:
      "The CEO is the face of your brand and the custodian of your long-term vision. We help companies find transformational CEOs who can balance operational excellence with innovation and long-term impact.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Search/CeoSearch",
  },
  {
    heading: "Executive Search",
    paragraph:
      "Our executive search capabilities span across the C-suite—from CFOs and CMOs to CHROs and CTOs. We use a tailored, data-backed approach to ensure that your leadership pipeline aligns with both your current and future business goals.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Search/ExecutiveSearch",
  },
];

const verticalItems = [
  {
    icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
    paragraph: "Strategic discovery sessions with your board and stakeholders",
  },
  {
    icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
    paragraph: "Behavioral and psychometric assessment for every shortlist",
  },
  {
    icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
    paragraph: "Industry benchmarking and cultural alignment matrix",
  },
  {
    icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
    paragraph: "60-day and 180-day onboarding support for seamless transitions",  
  },
];

const verticalItems2 = [
  {
    icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
    paragraph: "We’re industry-focused. Your world is our expertise.",
  },
  {
    icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
    paragraph: "We care about fit—strategic, cultural, and aspirational.",
  },
  {
    icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
    paragraph: "Our candidate relationships run deep, not wide.",
  },
  {
    icon: <BookOpen className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]'/>,
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
        <div className='lg:pt-[120px] lg:ml-[285px] lg:mr-[285px] h-full lg:p-16 pt-12 mx-4'>
          <div className='mt-18 space-y-4'>
              <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px]'>Precision-led Executive Search for Today and Tomorrow</h1>
              <h2 className='font-medium text-[14px] lg:text-[18px] leading-[20px] lg:leading-[40px] text-[#28B673]'>Navigate uncertainty and unlock leadership potential with Cirrcle Up&apos;s Search offerings. We find transformative leaders who don&apos;t just fill roles—they drive results.</h2>
              <p className='text-[14px] lg:text-[18px] leading-[30px] mt-12'>In an era of disruption and accelerated change, leadership isnt just about managing—its about steering organizations with vision, agility, and strategic depth. At Cirrcle Up, our Search practice is designed to help you discover exceptional talent across the boardroom and the C-suite.
              We believe great leadership is the most powerful lever for success. Thats why our approach goes far beyond resumes and referrals. With a deep focus on cultural fit, strategic capability, and future-readiness, we find leaders who are built for impact.</p>
          </div>
          
          <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>
            <Link href='/Contact/GetInTouch' className='cursor-pointer'>
              Connect with our experts
            </Link>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className='mt-32'>
          <WhatWeOfferSection 
            title="What We Offer:" 
            items={whatWeOfferItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Our Methodology:"
            items={verticalItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-20"
          />
        </div>

        {/* Vertical Info list 2 */}
        <div>
          <VerticalInfoList
            title="Why Cirrcle Up:"
            items={verticalItems2}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px]"
          />
        </div>

        {/* Vertical Info list 2 */}
        <div className='flex justify-center mt-18 mb-18 lg:mb-0'>
          <CallToAction 
            heading="Discover how our search services can reshape your leadership."
            buttons={[
              { title: "EXPLORE BOARD SEARCH", href: "/Capabilities/Search/BoardSearch" },
              { title: "EXPLORE CEO SEARCH", href: "/Capabilities/Search/CeoSearch" },
              { title: "EXPLORE EXECUTIVE SEARCH", href: "/Capabilities/Search/ExecutiveSearch" }
            ]}
          backgroundImage="/cta-bg.png"
          />
        </div>

        <Footer />
    </div>
  )
}

export default SearchPage;