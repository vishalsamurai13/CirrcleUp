import CallToAction from '@/components/CTA';
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import QuoteBox from '@/components/Quote';
import VerticalInfoList from '@/components/VerticalInfoList';
import WhatWeOfferSection from '@/components/Whatweoffer';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const whatWeOfferItems = [
  {
    heading: "Inclusion & Culture",
    paragraph:
      "We help build cultures where diversity, equity, and belonging are not just buzzwords but business drivers. Our interventions include diagnostics, leadership workshops, and sustained behavior change programs.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Transformation/I&C",
  },
  {
    heading: "Sustainability",
    paragraph:
      "ESG priorities are integrated into everything from board composition to executive performance. We support organizations in future-proofing their business through sustainability benchmarking, talent alignment, and strategic leadership placements.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Transformation/Sustainability",
  },
  {
    heading: "Leadership Alignment",
    paragraph:
      "We facilitate offsites and strategy sessions that bring executive teams together around shared vision, values, and priorities.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Transformation/I&C",
  },
  {
    heading: "Change Management",
    paragraph:
      "Structured frameworks for managing communication, stakeholder engagement, and resistance—ensuring transformation is successful and enduring.",
    buttonText: "Learn More",
    buttonLink: "/Capabilities/Transformation/Sustainability",
  },
];

const verticalItems = [
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "Next-gen thinking powered by a hands-on, boutique approach",
  },
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "Deep commitment to making culture and sustainability business imperatives",
  },
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "Data-backed diagnostics and clear success metrics",
  },
  {
    icon: <BookOpen className='w-[36px] h-[36px]'/>,
    paragraph: "A focus on practical, implementable solutions—not just strategy slides",
  },
];


const TransformationPage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
      {/* Hero Section with Background Image */}
      <div className='relative pt-[92px] h-[415px] w-full'>

        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src="/transformation.png" // Replace with your actual image path
            alt="Leadership background"
            fill
            className='object-cover'
            priority
          />
          {/* Optional overlay for better text readability */}
          <div className='absolute inset-0 bg-black/20'></div>
        </div>


        <Navbar />
        
        {/* Content Overlay */}
        <div className='relative z-10 flex flex-col justify-center h-full ml-[285px] mr-[285px] px-16'>
          <div className='max-w-4xl space-y-6'>
            <h1 className='font-bold text-[46px] leading-[60px] text-black'>
              Future-Proofing Organizations Through Strategic Transformation
            </h1>
            <h2 className='font-medium text-[24px] leading-[40px] text-[#28B673]'>
              Cirrcle Up partners with boards and CXOs to design and lead transformation initiatives that drive competitive advantage, inclusive cultures, and long-term sustainability..
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className='ml-[285px] mr-[285px] h-full pr-16 pl-16'>
          <div className='space-y-4'>
              <p className='text-[18px] leading-[23px] mt-12'>
              Transformation is no longer a one-time project—it’s a leadership imperative. Whether driven by market disruption, digital innovation, or changing societal expectations, today’s organizations must embrace change as a core competency.
                <br /><br />
At Cirrcle Up, our Transformation Practice is designed to help companies anticipate, navigate, and capitalize on pivotal moments. We work with clients to realign leadership, infuse sustainability into strategy, and embed inclusion and culture at the heart of the organization. Our approach is hands-on, collaborative, and deeply customized to each client’s context.
              </p>
          </div>
          <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>
            Connect with our experts
          </div>
      </div>

        {/* What We Offer Section */}
        <div className='mt-32'>
          <WhatWeOfferSection 
            title="How We Transform Organizations:" 
            items={whatWeOfferItems}
            wrapperClassName="ml-[285px] mr-[285px] py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Our Process:"
            items={verticalItems}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
          />
        </div>

        <div className='flex justify-center mt-6 mb-8'>
          <QuoteBox 
            quote="Transformation is about more than reacting to change—it’s about leading it. We help our clients become architects of their own future.”" 
            author="Animesh Singh Rao" 
          />
        </div>

        {/* CTA */}
        <div className='flex justify-center mt-18'>
          <CallToAction 
            heading=" Let’s build your transformation roadmap."
            buttons={[
              { title: "REQUEST A TRANSFORMATION WORKSHOP", href: "/Contact/GetInTouch" },
            ]}
          
          />
        </div>

        <Footer />
    </div>
  )
}

export default TransformationPage;