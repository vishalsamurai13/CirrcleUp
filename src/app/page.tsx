"use client";

import ConnectWithExperts from '@/components/CTA2'
import CallToAction3 from '@/components/CTA3'
import AnimatedHeroSection from '@/components/Hero'
import { Footer } from '@/components/layout/Footer'
import TestimonialsCarousel from '@/components/Testimonials';

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = () => {

  return (
    <div className="text-black bg-white min-h-screen overflow-x-hidden">

      {/* Hero Section */}
      <div className=''>
        <AnimatedHeroSection />
      </div>
      
      {/* Main Content */}
      <div className='h-full'>
        
        {/* Leadership Challenges */}
        <div className='lg:ml-[285px] lg:mr-[285px] mt-12 lg:mt-32 lg:space-y-6 lg:pr-16 lg:pl-16 lg:pb-16 mx-4'>
          <h1 className='w-full text-[40px] lg:text-[50px] text-[#29B573] leading-[50px] lg:leading-[68px] font-light'>
          Solving Leadership at the Moments That Count !
          </h1>
          <h2 className='w-full text-[14px] mt-6 lg:text-[18px] leading-[22px]'>
          We help companies and leaders tackle the questions that define success in a fast-moving world.
          </h2>
          <p className='font-semibold text-[14px] mt-3 lg:text-[16px]'>How do I ...</p>

          <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 space-y-4 lg:space-y-8 mt-12'>

            <div className='flex flex-col items-start lg:w-[212px] gap-4 text-[20px] lg:text-[24px] text-[#29B573]'>
              <Link href='/Capabilities/Search'>
                Find <br /> Leaders?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start lg:w-[212px] gap-4  text-[20px] lg:text-[24px] text-[#29B573]'>
              <Link href='/Capabilities/Succession'>
                Plan for <br /> Succession?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start lg:w-[212px] gap-4  text-[20px] lg:text-[24px] text-[#29B573]'>
              <Link href='/Capabilities/Performance'>
                Boost <br />Performance?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start lg:w-[212px] gap-4  text-[20px] lg:text-[24px] text-[#29B573]'>
              <Link href='/Capabilities/Transformation'>
                Lead Business <br /> Transformation?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start lg:w-[212px] gap-4  text-[20px] lg:text-[24px] text-[#29B573]'>
              <Link href='/Capabilities/Accelerators'>
                Become a <br /> better Leader?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start lg:w-[212px] gap-4  text-[20px] lg:text-[24px] text-[#29B573]'>
              <Link href='/Capabilities/Succession'>
                Set up my board <br /> for success?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

          </div>
        </div>
        
        {/* Connect with Experts */}
        <div className='flex justify-center mt-12'>
          <ConnectWithExperts
            heading="Connect with Our Experts"
            description="We’re a tight, highly experienced team that works hands-on with every client. No layers, no handoffs just sharp thinking, honest advice, and a relentless focus on outcomes that matter."
            buttons={[
              { title: 'Meet Consultants', href: '/Contact/GetInTouch' },
              { title: 'Find Local Offices', href: '/Contact/LocalOffice' },
            ]}
          />
        </div>

        {/* Quote with Person Photo */}
        <div className='w-full bg-[#f3f3f3] mt-24 h-full'>
          <div className='flex flex-col lg:flex-row gap-12 px-4 py-5 lg:pt-12 lg:pb-12 lg:ml-[285px] lg:mr-[285px] lg:pr-16 lg:pl-16 items-center'>
              <div className="w-[200px] h-[200px] lg:w-[500px] lg:max-h-[220px] relative rounded-full overflow-hidden">
                <Image
                  src="/businessman.jpg"
                  alt="Artboard 1"
                  fill
                  className="object-cover object-top relative"
                />
              </div>

              <div className='flex flex-col gap-4 justify-between lg:h-[220px]'>
                <p className='font-semibold text-[14px] lg:text-[20px]'>&quot;Consulting, to me, is less about advice and more about alignment between potential and performance, instinct and insight. When done right, it doesn’t just solve problems; it sharpens the client’s edge.&quot;</p>
                <div className='flex flex-col mt-6'>
                  <p className='text-[12px] lg:text-[14px] font-bold'>Animesh Singh Rao</p>
                  <p className='text-[12px] lg:text-[14px]'>Managing Partner, Cirrcle Up </p>
                  <p className='text-[12px] lg:text-[14px]'>Dubai, UAE</p>
                </div>
              </div>
          </div>
        </div>
        
        {/* A Track Record */}
        <div className='mt-12'>
          <div className='flex flex-col gap-12 lg:pt-12 lg:pb-12 lg:ml-[285px] lg:mr-[285px] lg:pr-16 lg:pl-16 px-4 py-5'>
            <div>
              <h1 className='text-[40px] lg:text-[45px] font-light'>
                A Track Record That Drives Results
              </h1>
              <p className='text-[18px] mt-6 lg:mt-0'>
                Our team brings deep operational insight and sharp execution to every leadership mandate we take on.
              </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between mt-12 gap-12 items-center'>
              <div className='w-[288px] flex flex-col items-center'>
                <h1 className='text-[#29B573] text-[124px] font-bold leading-28'>35<span className='text-[73px] font-medium'>+</span></h1>
                <p className='text-[18px] text-[#29B573] text-center'>Years of combined experience across search, strategy, and organizational advisory</p>
              </div>
              <div className='w-[288px] flex flex-col items-center'>
                <h1 className='text-[#29B573] text-[124px] font-bold leading-28'>92<span className='text-[73px] font-medium'>%</span></h1>
                <p className='text-[18px] text-[#29B573] text-center'>Repeat client engagement rate across key verticals</p>
              </div>
              <div className='w-[288px] flex flex-col items-center'>
                <h1 className='text-[#29B573] text-[124px] font-bold leading-28'>120<span className='text-[73px] font-medium'>+</span></h1>
                <p className='text-[18px] text-[#29B573] text-center'>Senior mandates closed in the past 24 months across India and the Middle East </p>
              </div>
            </div>

            <div className='flex flex-col mt-12 pb-12 lg:pb-0'>
              <Link href='/About/People'>
                <div className='flex gap-8 items-center'>
                  <p className='font-bold text-[14px]'>LEARN ABOUT WHO WE ARE</p>
                  <ArrowRight />
                </div>
              </Link>
              
              <span className='h-[2px] mt-4 bg-black w-[260px]'></span>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-[#eeeeee] lg:px-20 relative z-0 px-4">
          <TestimonialsCarousel />
        </div>

        {/* Floating CTA */}
        <div className="flex justify-center -mt-40 z-10 relative">
          <CallToAction3
            heading="Let’s Build What’s Next Together"
            description="Reach out and let’s talk about where you’re headed, what’s in the way, and how we can help you move with clarity and confidence."
            buttons={[{ title: "Get in Touch", href: "/contact" }]}
          />
        </div>

        {/* Footer */}
        <div className="mt-12 z-0">
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default page