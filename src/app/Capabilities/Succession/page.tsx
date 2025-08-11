import CallToAction from '@/components/CTA';
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import QuoteBox from '@/components/Quote';
import VerticalInfoList from '@/components/VerticalInfoList';
import WhatWeOfferSection from '@/components/Whatweoffer';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const whatWeOfferItems = [
  {
    heading: "Board Succession",
    paragraph:
      "We evaluate your board’s current state, identify skill gaps, and create a future-fit composition roadmap. Our approach ensures diversity, independence, and alignment with strategic imperatives.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Succession/BoardSuccession",
  },
  {
    heading: "CEO Succession",
    paragraph:
      "We help you plan for your most mission-critical leadership transition—be it a founder, long-time CEO, or crisis leadership. We work across internal readiness and external mapping to offer a balanced plan.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Succession/CeoSuccession",
  },
  {
    heading: "C-Suite Succession",
    paragraph:
      "We analyze organizational depth, develop internal talent pipelines, and deliver visibility on ready-now vs. ready-later leaders for key roles across finance, marketing, HR, and more.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Succession/CsuiteSuccession",
  },
];

const verticalItems = [
  {
    icon: <BookOpen className='lg:w-[36px] w-[20px] h-[20px] lg:h-[36px]'/>,
    paragraph: "Current-state assessment: role clarity, risks, readiness",
  },
  {
    icon: <BookOpen className='lg:w-[36px] w-[20px] h-[20px] lg:h-[36px]'/>,
    paragraph: "Successor identification: internal + external benchmarking",
  },
  {
    icon: <BookOpen className='lg:w-[36px] w-[20px] h-[20px] lg:h-[36px]'/>,
    paragraph: "Development plans and executive coaching for internal talent",
  },
  {
    icon: <BookOpen className='lg:w-[36px] w-[20px] h-[20px] lg:h-[36px]'/>,
    paragraph: "Emergency succession protocols and interim planning",
  },
];

const verticalItems2 = [
  {
    icon: <BookOpen className='lg:w-[36px] w-[20px] h-[20px] lg:h-[36px]'/>,
    paragraph: " Structured frameworks with human-centered insight",
  },
  {
    icon: <BookOpen className='lg:w-[36px] w-[20px] h-[20px] lg:h-[36px]'/>,
    paragraph: " Deep dive assessments using our “Continuity Scorecard”",
  },
  {
    icon: <BookOpen className='lg:w-[36px] w-[20px] h-[20px] lg:h-[36px]'/>,
    paragraph: "Succession planning as a board agenda—not HR alone",
  },
  {
    icon: <BookOpen className='lg:w-[36px] w-[20px] h-[20px] lg:h-[36px]'/>,
    paragraph: "Transition support for boards, successors, and teams",
  },
];


const SuccessionPage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* <Navbar /> */}
        <Navbar />
        {/* Add padding-top to account for fixed navbar (90px height + 2px divider + some extra space) */}

        {/* Header Content */}
        <div className='lg:pt-[120px] lg:ml-[285px] lg:mr-[285px] h-full lg:p-16 pt-12 mx-4'>
            <div className='mt-12 space-y-4'>
                <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px]'>Leadership Continuity that Strengthens Tomorrow</h1>
                <h2 className='font-medium text-[14px] lg:text-[18px] leading-[20px] lg:leading-[40px] text-[#28B673]'>Cirrcle Up supports businesses in building proactive, strategic succession plans for board, CEO, and C-suite roles—so you’re never caught off-guard.</h2>
                <p className='text-[14px] lg:text-[18px] leading-[20px] mt-8'>Succession is not a contingency—it’s a growth strategy. In a world of rapid change, unplanned leadership transitions can unravel years of momentum. That’s why Cirrcle Up’s Succession Practice is built to ensure leadership continuity, internal capability building, and long-term value creation.
                    <br /><br />
                    At just two years old, Cirrcle Up has already earned the trust of dynamic businesses across sectors for one reason: we approach succession with empathy, structure, and strategic clarity. Our plans aren’t documents—they’re action-ready, insight-driven pathways for smooth leadership evolution.</p>
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
            title="Our Succession Planning Services:" 
            items={whatWeOfferItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Our Process:"
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

        <div className='flex justify-center mt-6 mb-8 px-4 lg:px-0'>
          <QuoteBox 
            quote="Succession isn’t about naming a name. It’s about nurturing a future. At Cirrcle Up, we help you protect the legacy—and power the leap forward." 
            author="Animesh Singh Rao" 
          />
        </div>

        {/* CTA */}
        <div className='flex justify-center mt-18 mb-18 lg:mb-0'>
          <CallToAction 
            heading="Plan for succession before it becomes a scramble."
            buttons={[
              { title: "EXPLORE BOARD SUCCESSION", href: "/Capabilities/Succession/BoardSuccession" },
              { title: "EXPLORE CEO SUCCESSION", href: "/Capabilities/Succession/CeoSuccession" },
              { title: "EXPLORE C-SUITE SUCCESSION", href: "/Capabilities/Succession/CsuiteSuccession" }
            ]}
          />
        </div>

        <Footer />
    </div>
  )
}

export default SuccessionPage;