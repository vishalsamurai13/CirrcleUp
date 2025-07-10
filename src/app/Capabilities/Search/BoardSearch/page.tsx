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
    heading: "Independent Director Searchh",
    paragraph:
      "We focus on independence—not just by regulation, but by thought. We bring voices that add value.",
  },
  {
    heading: "Diversity-Driven Appointments",
    paragraph:
      "We go beyond tokenism to ensure representation truly enhances perspective and decision-making.",
  },
  {
    heading: "Sector-Specific Governance Expertise",
    paragraph:
      "We align board talent with industry imperatives, from ESG in FMCG to risk in BFSI.",
  },
];

const verticalItems = [
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Deep board diagnostics and current-state evaluation",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Composition planning mapped to future business strategy",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Structured assessments including governance style, collaboration quotient, and stakeholder orientation",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Confidential outreach to high-caliber leaders open to board opportunities",
  },
];

const verticalItems2 = [
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Boutique attention with enterprise rigor",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Proactive succession and committee planning",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "Unbiased, transparent shortlisting with measurable fit",
    },
    {
      icon: <BookOpen className='w-[35px] h-[36px]'/>,
      paragraph: "A next-gen lens for a next-gen board",
    },
    {
        icon: <BookOpen className='w-[35px] h-[36px]'/>,
        paragraph: "ficiently post-placement",
    },
    {
        icon: <BookOpen className='w-[35px] h-[36px]'/>,
        paragraph: "Avg. time to shortlist: 18 business days",
    },

    
  ];

const BoardsearchPage = () => {
  

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        {/* <Navbar /> */}
        <Navbar />
        {/* Add padding-top to account for fixed navbar (90px height + 2px divider + some extra space) */}

        {/* Header Content */}
        <div className='pt-[120px] h-full'>
            {/* Headings with margins */}
            <div className='ml-[285px] mr-[285px] mt-12 space-y-4 pr-16 pl-16'>
                <h1 className='font-bold text-[46px] leading-[60px]'>Building Boards That Shape the Future</h1>
                <h2 className='font-medium text-[24px] leading-[40px] text-[#28B673]'>Cirrcle Up helps high-growth and legacy companies alike identify board leaders who bring wisdom, diversity, and forward-looking governance.</h2>
            </div>
            
            {/* Image positioned on leftmost side */}
            <div className='flex justify-start mt-8'>
                <Image 
                    src="/board_search.png" 
                    alt="Board meeting visualization" 
                    width={1090} 
                    height={330}
                    className="object-cover relative"
                />
            </div>
            
            {/* Paragraph with margins */}
            <div className='ml-[285px] mr-[285px] mt-12 pr-16 pl-16'>
                <p className='text-[18px] leading-[23px]'>IIn today's volatile business environment, a strong board isn't a formality—it's a competitive advantage. At Cirrcle Up, we partner with organizations to build future-focused boards that bring both strategic oversight and operational insight. Whether you're navigating regulatory complexity, scaling globally, or transitioning leadership, the right board composition is critical.
                    <br /><br />
                    As a two-year-old firm with deep industry insight and a hunger to prove our edge, we challenge traditional search processes with more agile, transparent, and data-driven methodologies. Our network includes first-time independent directors, domain veterans, and transformation leaders across sectors.</p>
            </div>
            {/* <div className='cursor-pointer bg-black text-white p-4 w-[290px] h-[50px] flex items-center justify-center mt-12 uppercase font-semibold text-[12px]'>Connect with our experts</div> */}
        </div>

        

        {/* What We Offer Section */}
        <div className='mt-32'>
          <WhatWeOfferSection 
            title="What We Do:" 
            items={whatWeOfferItems}
            wrapperClassName="ml-[285px] mr-[285px] py-16"
          />
        </div>

        {/* Vertical Info list 1 */}
        <div>
          <VerticalInfoList
            title="Our Approach:"
            items={verticalItems}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
            showDivider={false}
          />
        </div>

        <div className='flex justify-center mt-12'>
            <CaseStudyCard
                title="Case Study"
                description="A regional retail chain expanding into Southeast Asia needed governance support. 
                We placed a board member with global retail expansion experience and a background in ESG. 
                Within one year, board effectiveness scores rose by 40%, and the brand received two regional impact awards."
            />
        </div>

        <div className='mt-12'>
          <VerticalInfoList
            title="What Sets Cirrcle Up Apart:"
            items={verticalItems2}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
          />
        </div>

        <div className='flex flex-col mt-18 gap-12  ml-[285px] mr-[285px] pr-16 pl-16'>
            <h1 className='text-[32px] font-bold'>Who We Serve</h1>
            <div className='flex gap-6 justify-between'>
                <div className='flex flex-col gap-4 max-w-[289px]'>
                    <Image src='/Board_Artboard1.png' alt='Artboard 1' width={289} height={150} className='object-cover relative' />
                    <p className='text-center'>High-growth startups institutionalizing governance</p>
                </div>
                <div className='flex flex-col gap-4 max-w-[289px]'>
                    <Image src='/Board_Artboard2.png' alt='Artboard 1' width={289} height={150} className='object-cover relative' />
                    <p className='text-center'>Legacy businesses rethinking succession</p>
                </div>
                <div className='flex flex-col gap-4 max-w-[289px]'>
                    <Image src='/Board_Artboard3.png' alt='Artboard 1' width={289} height={150} className='object-cover relative' />
                    <p className='text-center'>VC/PE-backed companies needing strategic oversight</p>
                </div>
            </div>
        </div>
        
        <div className='flex justify-center mt-32'>
            <QuoteBox 
              quote='The right board doesn’t just guide—it accelerates. We believe in building boards that spark transformation, not just tradition.'
              author='Richa Khandelwal'
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

export default BoardsearchPage;