/* eslint-disable @next/next/no-img-element */
 
import ConnectWithExperts from '@/components/CTA2'
import CallToAction3 from '@/components/CTA3'
import AnimatedHeroSection from '@/components/Hero'
import { Footer } from '@/components/layout/Footer'

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
        <div className='ml-[285px] mr-[285px] mt-32 space-y-6 pr-16 pl-16 pb-16'>
          <h1 className='w-full text-[63px] text-[#29B573] leading-[68px] font-light'>
          Your Leadership Challenges, Solved
          </h1>
          <h2 className='w-full text-[24px] leading-[30px]'>
          We help organizations and individuals answer critical leadership questions to thrive in today’s challenging landscape.
          </h2>
          <p className='font-semibold text-[22px]'>How do I ...</p>

          <div className='grid grid-cols-3 gap-8 space-y-8 mt-18'>

            <div className='flex flex-col items-start w-[212px] gap-4  text-[28px] text-[#29B573]'>
              <Link href='/Capabilities/Search'>
                Find <br /> Leaders?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start w-[212px] gap-4  text-[28px] text-[#29B573]'>
              <Link href='/Capabilities/Succession'>
                Plan for <br /> Succession?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start w-[212px] gap-4  text-[28px] text-[#29B573]'>
              <Link href='/Capabilities/Performance'>
                Boost <br />Performance?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start w-[212px] gap-4  text-[28px] text-[#29B573]'>
              <Link href='/Capabilities/Transformation'>
                Lead Business <br /> Transformation?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start w-[212px] gap-4  text-[28px] text-[#29B573]'>
              <Link href='/Capabilities/Accelerators'>
                Become a <br /> better Leader?
                <ArrowRight className='w-[25px] h-[20px] mt-2 text-black' />
              </Link>
            </div>

            <div className='flex flex-col items-start w-[250px] gap-4  text-[28px] text-[#29B573]'>
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
            description="Our team of 500+ leadership advisors across 25 countries and 47 offices help you to harness the power of great leadership."
            buttons={[
              { title: 'Meet Consultants', href: '/consultants' },
              { title: 'Find Local Offices', href: '/offices' },
            ]}
          />
        </div>

        {/* Insights on the Future of Leadership */}
        <div className='w-full bg-[#D9D9D9] mt-24'>
          <div className='flex flex-col gap-12 pt-12 pb-12 ml-[285px] mr-[285px] pr-16 pl-16'>
              <div className='flex flex-col gap-4'>
                <h1 className='text-[42px] font-light'>Insights on the Future of Leadership</h1>
                <p className='text-[16px]'>The world is changing. And leadership needs to change with it. Through cutting-edge experience and research, we help you address the most-pressing issues of our time—for personal and business success.</p>
              </div>
              <div className='flex gap-6 justify-between'>
                  <div className='flex flex-col gap-4 max-w-[289px]'>
                      <Image src='/Board_Artboard1.png' alt='Artboard 1' width={289} height={150} className='object-cover relative' />
                      <h2 className='underline text-center text-[22px]'>AI Leadership</h2>
                      <p className='text-center'>Artificial Intelligence has opened up a realm of opportunities and challenges.</p>
                  </div>
                  <div className='flex flex-col gap-4 max-w-[289px]'>
                      <Image src='/Board_Artboard2.png' alt='Artboard 1' width={289} height={150} className='object-cover relative' />
                      <h2 className='underline text-center text-[22px]'>DE&I</h2>
                      <p className='text-center'>Find out how to enhance your organization’s Diversity, Equity, and Inclusion efforts.</p>
                  </div>
                  <div className='flex flex-col gap-4 max-w-[289px]'>
                      <Image src='/Board_Artboard3.png' alt='Artboard 1' width={289} height={150} className='object-cover relative' />
                      <h2 className='underline text-center text-[22px]'>Sustainibility</h2>
                      <p className='text-center'>Discover what is means to be a sustainable leader - and how to become one</p>
                  </div>
              </div>
          </div>
        </div>
        
        {/* A Track Record */}
        <div className='mt-12'>
          <div className='flex flex-col gap-12 pt-12 pb-12 ml-[285px] mr-[285px] pr-16 pl-16'>
            <div>
              <h1 className='text-[45px] font-light'>
                A Track Record Like No Other
              </h1>
              <p className='text-[18px] '>
                Our team of advisors are driven by a shared vision to improve the way the world is led.
              </p>
            </div>
            <div className='flex justify-between mt-12'>
              <div className='w-[288px] flex flex-col items-center'>
                <h1 className='text-[#29B573] text-[124px] font-bold'>50<span className='text-[73px] font-medium'>+</span></h1>
                <p className='text-[18px] text-[#29B573] text-center'>Years of outcomes and experience, across nearly every industry</p>
              </div>
              <div className='w-[288px] flex flex-col items-center'>
                <h1 className='text-[#29B573] text-[124px] font-bold'>96<span className='text-[73px] font-medium'>%</span></h1>
                <p className='text-[18px] text-[#29B573] text-center'>Client satisfaction score</p>
              </div>
              <div className='w-[288px] flex flex-col items-center'>
                <h1 className='text-[#29B573] text-[124px] font-bold'>214</h1>
                <p className='text-[18px] text-[#29B573] text-center'>Charities supported by our colleagues in 2023</p>
              </div>
            </div>

            <div className='flex flex-col mt-12'>
              <div className='flex gap-8 items-center'>
                <p className='font-bold text-[14px]'>LEARN ABOUT WHO WE ARE</p>
                <ArrowRight />
              </div>
              
              <span className='h-[2px] mt-4 bg-black w-[260px]'></span>
            </div>
          </div>
        </div>

        {/* Event Highlights */}
        <div className="bg-[#eeeeee] px-20 pt-16 pb-64 relative z-0">
          <div className="flex flex-col gap-12 pt-12 pb-12 ml-[285px] mr-[285px] pr-16 pl-16">
            {/* Event Highlights Header */}
            <div className="flex justify-between">
              <h1 className="text-4xl font-light mb-12">Discover Event Highlights</h1>
              <div className="flex gap-4">
                <button className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-xl">←</button>
                <button className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-xl">→</button>
              </div>
            </div>

            {/* Event Cards */}
            <div className="flex items-center justify-between">
              <div className="flex gap-12 mt-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="max-w-[280px]">
                    <div className="flex gap-6 items-center">
                      <div className="text-[48px] font-bold leading-none">30</div>
                      <div className="flex flex-col gap-1 items-center">
                        <div className="text-sm -mt-1">April</div>
                        <div className="text-sm mb-3 text-gray-500">2025</div>
                      </div>
                    </div>
                    <h3 className="font-semibold leading-snug mb-2">
                      HR Leaders Breakfast: <br /> Developing World Class….
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      An Event to explore APAC leadership strategies amid healthcare sector uncertainties and talent development needs.
                    </p>
                    <div className="flex items-center gap-2">
                      <img src="/Avatar1.png" alt="avatar1" className="w-6 h-6 rounded-full" />
                      <img src="/Avatar2.png" alt="avatar2" className="w-6 h-6 rounded-full" />
                      <img src="/Avatar3.png" alt="avatar3" className="w-6 h-6 rounded-full" />
                      <span className="text-xs font-semibold ml-2">+1 CONSULTANT</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="flex justify-center -mt-40 z-10 relative">
          <CallToAction3
            heading="Shape What’s Next, Right Now."
            description="Get in touch to discover how we can help bring the future into focus—for you, your people, and your business."
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