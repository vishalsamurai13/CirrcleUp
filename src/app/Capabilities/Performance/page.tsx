/* eslint-disable react/no-unescaped-entities */
import CallToAction from '@/components/CTA';
import { Footer } from '@/components/layout/Footer';
import { WhiteNavbar } from '@/components/layout/Navbar';
import QuoteBox from '@/components/Quote';
import VerticalInfoList from '@/components/VerticalInfoList';
import WhatWeOfferSection from '@/components/Whatweoffer';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const whatWeOfferItems = [
  {
    heading: "Assessment & Benchmarking",
    paragraph:
      "We evaluate your board's current state, identify skill gaps, and create a future-fit composition roadmap. Our approach ensures diversity, independence, and alignment with strategic imperatives.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Performance/A&B",
  },
  {
    heading: "CEO Transitions",
    paragraph:
      "We help you plan for your most mission-critical leadership transition—be it a founder, long-time CEO, or crisis leadership. We work across internal readiness and external mapping to offer a balanced plan.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Performance/CeoTransistion",
  },
  {
    heading: "Leadership Development & Transitions",
    paragraph:
      "We analyze organizational depth, develop internal talent pipelines, and deliver visibility on ready-now vs. ready-later leaders for key roles across finance, marketing, HR, and more.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Performance/Leadership",
  },
  {
    heading: "Team Effectiveness",
    paragraph:
      "We analyze organizational depth, develop internal talent pipelines, and deliver visibility on ready-now vs. ready-later leaders for key roles across finance, marketing, HR, and more.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Performance/TeamEffectiveness",
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
    paragraph: " Deep dive assessments using our 'Continuity Scorecard'",
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


const PerformancePage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        
        {/* Hero Section with Background Image */}
        <div className='relative pt-[92px] h-[415px] w-full'>
        
          {/* Background Image */}
          <div className='absolute inset-0 z-0'>
            <Image
              src="/leadership.png" // Replace with your actual image path
              alt="Leadership background"
              fill
              className='object-cover'
              priority
            />
            {/* Optional overlay for better text readability */}
            <div className='absolute inset-0 bg-black/75'></div>
          </div>


          <WhiteNavbar />
          
          {/* Content Overlay */}
          <div className='relative z-10 flex flex-col justify-center h-full lg:ml-[285px] lg:mr-[285px] lg:px-16 px-4 lg:pt-0'>
            <div className='max-w-4xl space-y-6'>
              <h1 className='font-bold text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px] text-white'>
                Enabling Leadership That Performs Under Pressure
              </h1>
              <h2 className='font-medium text-[14px] lg:text-[18px] leading-[20px] lg:leading-[40px] text-[#28B673]'>
                Cirrcle Up helps organizations benchmark, develop, and enhance leadership performance through tailored tools, transitions, and team effectiveness strategies
              </h2>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='lg:ml-[285px] lg:mr-[285px] h-full lg:pr-16 lg:pl-16 px-4'>
            <div className='space-y-4'>
                <p className='text-[14px] lg:text-[18px] leading-[20px] mt-12'>
                  Great leaders aren't born—they're built, challenged, and continuously elevated. Our Performance Practice is designed to empower boards, CEOs, and leadership teams to function at their best. Whether you're onboarding a new CEO, developing internal successors, or aligning leadership teams, Cirrcle Up helps unlock real, measurable impact.
                  <br /><br />
                  As a young but rapidly growing firm, we bring agility, innovation, and business intimacy to every engagement. We don't believe in standard playbooks—we co-create transformation with you, tailored to your goals.
                </p>
            </div>
            <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>
              <Link href='/Contact/GetInTouch' className='cursor-pointer'>
                Connect with our experts
              </Link>
            </div>
        </div>

        {/* What We Offer Section */}
        <div className='mt-16'>
          <WhatWeOfferSection 
            title="Performance Practice Includes:" 
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
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] "
          />
        </div>

        <div className='flex justify-center mt-6 mb-8 px-4 lg:px-0'>
          <QuoteBox 
            quote="Performance isn’t a metric—it’s a mindset. We help leaders show up sharper, stronger, and more aligned every day." 
            author="Animesh Singh Rao" 
          />
        </div>

        {/* CTA */}
        <div className='flex justify-center mt-18 mb-18 lg:mb-0'>
          <CallToAction 
            heading="Elevate your leadership team’s impact."
            buttons={[
              { title: "EXPLORE ASSESSMENT TOOLS", href: "/Contact/GetInTouch" },
            ]}
          />
        </div>

        <Footer />
    </div>
  )
}

export default PerformancePage;