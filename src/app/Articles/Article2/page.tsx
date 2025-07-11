/* eslint-disable react/no-unescaped-entities */
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar'
import QuoteBox from '@/components/Quote';
import VerticalInfoList from '@/components/VerticalInfoList';
import WhatWeOfferSection from '@/components/Whatweoffer';
import { MoveRight } from 'lucide-react';
import React from 'react'


const verticalItems = [
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Over-reliance on credentials: Degrees and brands don't always translate to performance.",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Lack of structured hiring: Gut-based hiring, while romanticized, leads to inconsistency.",
  },
  {
    icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
    paragraph: "Poor JD clarity: If you don’t know exactly what you’re hiring for, neither does your candidate.",
  },
];

const whatWeOfferItems = [
  {
    heading: "Use Scorecards",
    paragraph:
      "Every candidate should be evaluated on consistent, role-specific",
  },
  {
    heading: "Test for Adaptability",
    paragraph:
      "Give real-world, scenario-based assessments that simulate the job.",
  },
  {
    heading: "Involve Teams",
    paragraph:
      "Let peers and future collaborators be part of the interview process.",
  },
];


const Article2 = () => {
  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />

        <div className='pt-[120px] ml-[285px] mr-[285px] h-full p-16'>
            <div className='mt-12 space-y-4'>
                <div className='flex gap-8'>
                  <h2 className='mb-12'>Article 2:</h2>
                  <p className='bg-black text-white px-1 h-[26px]'>6 mins Read</p>
                </div>

                <h1 className='font-medium text-[60px] leading-[65px] text-[#28B673]'>Hired or Harmed — Why the Wrong Hire Costs More Than You Think</h1>
                <h2 className='font-semibold mt-12 text-[28px] leading-[40px]'>A hiring mistake doesn't just hit the budget—it hits morale, momentum, and culture.</h2>
                <p className='text-[24px] leading-[30px] mt-12'>Bad hires are more than costly—they’re culturally corrosive. This article explores the hidden costs of poor hiring decisions and outlines a better, outcome-focused approach to recruitment in modern teams.</p>
            </div>

            <div className='flex flex-col items-center mt-12 mb-12 pt-[120px]'>
              <QuoteBox 
                quote="A wrong hire is like a software bug—silent at first, expensive to fix, and devastating if ignored." 
                author="Animesh Singh Rao" 
              />
              <p className='text-[26px] mt-18 w-full'>We often celebrate hiring as a success metric. But what we rarely talk about is the damage a single wrong hire can do to a team, a project, or even a company’s culture. According to the U.S. Department of Labor, the cost of a bad hire is at least 30% of the employee’s first-year earnings. But that’s just the visible part of the iceberg.
                    <br /> <br />
                The hidden costs—burnout in high performers, internal team friction, missed timelines, lost trust—can multiply rapidly. In fast-growing organizations, these losses can set back progress by months. And in startups or high-accountability roles, it’s not uncommon for a bad hire to drag an entire initiative into failure.</p>
            </div>

            <div className='flex flex-col pt-18 gap-12'>
              <h1 className='font-medium text-[48px] leading-[50px]'>The Cultural Cost</h1>
              <p className='text-[21px]'>Every new team member changes the culture, for better or worse. A person with the wrong attitude can dilute accountability, break communication chains, and quietly normalize mediocrity. In my experience, one underperformer, if left unchecked, can influence three others. The longer you take to act, the deeper the damage.</p>
            </div>
        </div>

        <div>
          <VerticalInfoList
            title="Why It Happens"
            items={verticalItems}
            wrapperClassName="ml-[285px] mr-[285px] py-20"
            showDivider={false}
          />
        </div>

        <div className='ml-[285px] mr-[285px] h-full p-16'>
            <p>LinkedIn’s Global Talent Trends Report notes that 89% of hiring failures are due to soft skills mismatch—not technical incompetence. That tells us something: Hiring for culture and adaptability is not a “nice to have”—it’s non-negotiable.</p>
        </div>

        <div>
            <div className='mt-12'>
            <WhatWeOfferSection 
                title="How to Fix It" 
                items={whatWeOfferItems}
                wrapperClassName="ml-[285px] mr-[285px] py-16"
            />
            </div>

            <div className='bg-gray-100 flex flex-col gap-4 w-full'>
                <div className='mr-[285px] ml-[285px] mb-[120px] pr-16 pl-16 flex flex-col gap-4'>
                    <h1 className='text-[42px] font-medium'>
                        The Case for Hiring Slowly
                    </h1>
                    <p className='text-[22px] text-[#28B673]'>
                        Speed in hiring is often celebrated—but it shouldn’t come at the cost of judgment. It’s better to lose a month in hiring than a year in recovery. The best companies I’ve worked with have robust backchannel checks, trial projects, and probation policies that are respected—not just documented.
                    </p>
                </div>
            </div>
        </div>

        <div className='pt-[120px] ml-[285px] mr-[285px] h-full p-16'>
          <h1 className='font-medium text-[48px]'>Conclusion: Hiring Is Leadership</h1>
          <p className='text-[22px] mt-12'>Hiring isn’t HR’s job—it’s a leadership function. As leaders, we need to guard the gates of culture as fiercely as we manage the P&L. If we don't prioritize alignment, we’ll constantly find ourselves cleaning up messes instead of building momentum.
                <br/> <br />
                Remember: One brilliant hire lifts five people. One bad hire breaks ten. Hiring isn’t a checkbox—it’s a multiplier.
                                <br /> <br />
                Let’s stop celebrating speed and start rewarding thoughtfulness.
                                <br /> <br />
                That’s how you scale trust, not just teams.</p>

          <div className='flex flex-col p-2 bg-[#D9D9D9] w-[500px] gap-2 text-[12px] mt-24'>
            <div>
              <span className='font-bold'>Citations & Data Sources:</span> U.S. Department of Labor: Cost of a Bad Hire Estimation
            </div>
            <div>
                <span className='font-bold'>CareerBuilder Survey: </span> Cost of Bad Hires Study
            </div>
            <div>
              <span className='font-bold'>SHRM:</span>  “The Real Cost of a Poor Hiring Decision”
            </div>
            <div>
              <span className='font-bold'>Harvard Business Review:</span> “The Case for Investing in Employee Engagement”
            </div>
            <div>
              <span className='font-bold'>Steve Jobs Quote:</span>  From “Steve Jobs” by Walter Isaacson
            </div>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Article2;