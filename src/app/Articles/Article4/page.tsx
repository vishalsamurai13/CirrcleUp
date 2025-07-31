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
    icon: <MoveRight className='w-[20px] h-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
    paragraph: "Is your job description inclusive or filled with jargon?",
  },
  {
    icon: <MoveRight className='w-[20px] h-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
    paragraph: "Do your interviewers show up prepared and on time?",
  },
  {
    icon: <MoveRight className='w-[20px] h-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
    paragraph: "Do you follow up respectfully—even with rejections?",
  },
];

const verticalItems2 = [
  {
    icon: <MoveRight className='w-[20px] h-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
    paragraph: "Train your interviewers: They are ambassadors of your culture.",
  },
  {
    icon: <MoveRight className='w-[20px] h-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
    paragraph: "Audit your hiring journey: Where are people dropping off or feeling undervalued?",
  },
  {
    icon: <MoveRight className='w-[20px] h-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
    paragraph: "Engage post-process: Ask for feedback from those you didn’t hire.",
  },
  {
    icon: <MoveRight className='w-[20px] h-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
    paragraph: "Showcase stories: Let employees talk about their work culture openly and authentically.",
  },
]

const whatWeOfferItems = [
  {
    heading: "●      Clarity in JD = Clarity in Vision",
  },
  {
    heading: "●      Well-structured interviews = Respect for Time",
  },
  {
    heading: "●      Feedback after rejections = Commitment to Growth",
  },
  {
    heading: "●      Human communication = Human-first culture",
  },
];


const Article4 = () => {
  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />

        <div className='lg:pt-[120px] lg:ml-[285px] lg:mr-[285px] h-full lg:p-16 px-4 pt-[50px]'>
            <div className='mt-12 lg:space-y-4 space-y-1'>
                <div className='flex gap-8'>
                  <h2 className='mb-12'>Article 4:</h2>
                  <p className='bg-black text-white px-1 h-[26px]'>12 mins Read</p>
                </div>

                <h1 className='font-medium text-[24px] lg:text-[40px] lg:leading-[50px] text-[#28B673]'>Beyond the CV — Why Hiring Is the New Branding</h1>
                <h2 className='font-semibold mt-8 text-[14px] lg:text-[22px] lg:leading-[30px]'>Your hiring process is your pitch. The best talent is watching even when they’re not applying.</h2>
                <p className='text-[12px] lg:text-[18px] lg:leading-[30px] mt-12'>In today’s competitive landscape, every interaction with a potential hire reflects your employer brand. This article unpacks why modern hiring is less about filling roles and more about shaping perception—and how smart companies are turning hiring into their strongest brand lever.</p>
            </div>

            <div className='flex flex-col items-center mb-12 pt-[20px] lg:pt-[100px]'>
              <QuoteBox 
                quote="Your brand isn’t what you say about your company—it’s how you treat the candidate you didn’t hire." 
                author="Animesh Singh Rao" 
              />
              <p className='text-[12px] lg:text-[18px] lg:leading-[30px] mt-12 w-full'>The hiring process has traditionally been seen as a funnel: post a job, screen CVs, conduct interviews, select a candidate. But in 2025, the best companies know better. Hiring isn’t just operational—it’s reputational.
                <br /> <br />
                According to LinkedIn’s Talent Solutions report, 75% of candidates research a company’s employer brand before even applying. And 69% wouldn’t take a job with a company that has a bad reputation—even if they were unemployed.
                <br /> <br />
                That means your job postings, recruiter conversations, interview experience, and even rejections are all brand touchpoints. Each one is an ad for—or against—your company.</p>
            </div>

            <div className='flex flex-col pt-18 gap-12'>
              <h1 className='font-medium text-[24px] lg:text-[40px] lg:leading-[50px]'>Why This Matters Now</h1>
              <p className='text-[12px] lg:text-[18px] lg:leading-[30px]'>In a market where talent is scarce and switching jobs is easy, the best candidates behave more like consumers. They observe, compare, and engage with brands they admire. If your hiring journey feels outdated, impersonal, or dismissive, you’re not just losing a hire—you’re losing future advocates, referrers, and even customers.</p>
            </div>
        </div>

        <div>
          <VerticalInfoList
            title="Hiring as a Brand Engine"
            items={verticalItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-20"
            showDivider={false}
          />
          <p className='lg:ml-[285px] lg:mr-[285px] h-full lg:pr-16 lg:pl-16 px-4 text-[14px] lg:text-[18px] lg:leading-[30px] font-medium'>Companies like HubSpot, Salesforce, and Shopify have mastered this. Their hiring process reflects their brand: transparent, thoughtful, and candidate-first. And as a result, they attract talent that’s already aligned with their culture.</p>
        </div>

        <div className='mt-12'>
          <WhatWeOfferSection 
            title="Reimagining the Candidate Experience" 
            paragraph='Here’s how hiring becomes branding in action:'
            items={whatWeOfferItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-16"
          />

          <div className='bg-gray-100 flex flex-col gap-4 w-full'>
            <div className='lg:mr-[285px] lg:ml-[285px] lg:mb-[120px] lg:px-16 px-4 flex flex-col gap-4'>
                <p className='text-[12px] lg:text-[18px]'>
                Candidates are 38% more likely to accept an offer if they had a positive interview experience—even if the salary isn’t the highest (Glassdoor).
                </p>
                <h1 className='font-medium text-[30px] lg:text-[40px] mt-12'>The Business Case for Employer Branding</h1>
                <p className='text-[12px] lg:text-[18px] text-[#28B673]'>Beyond warm feelings, employer branding has hard ROI:</p>
                <div className='flex flex-col mt-4 lg:mt-12'>
                    <div className='border border-r-[2px] border-l-[2px] border-t-[2px] py-2 px-4 text-[16px] lg:text-[20px]'>
                      Companies with strong employer brands see 50% more qualified applicants
                    </div>
                    <div className='border border-r-[2px] border-l-[2px] py-2 px-4 text-[16px] lg:text-[20px]'>
                      They reduce cost per hire by 43
                    </div>
                    <div className='border border-r-[2px] border-l-[2px] border-b-[2px] py-2 px-4 text-[16px] lg:text-[20px]'>
                      They fill roles twice as fast as competitors with weaker reputations
                    </div>
                </div>
            </div>

            <div>
              <VerticalInfoList
                title="Action Steps for Leaders"
                items={verticalItems2}
                wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:pb-12 bg-transparent"
                showDivider={false}
              />
            </div>
          </div>
        </div>

        <div className='lg:pt-[120px] lg:ml-[285px] lg:mr-[285px] h-full lg:p-16 px-4 pt-[50px] py-10'>
          <h1 className='font-medium text-[22px] lg:text-[40px] lg:leading-[50px]'>Conclusion: Build Brand with Every Interview</h1>
          <p className='text-[14px] lg:text-[18px] lg:leading-[30px] mt-12'>The war for talent is not fought in compensation packages alone. It’s fought—and won—in every small touchpoint of your hiring journey.
            <br /> <br />
            In a world of radical transparency, your hiring process is your new billboard. So if you want the best people to choose you, start by showing them who you are.
            <br /> <br />
            Because at the end of the day, hiring is branding. And branding is how you scale belief.</p>

          <div className='flex flex-col p-2 bg-[#D9D9D9] w-full lg:w-[500px] gap-2 text-[12px] mt-24'>
            <div className='text-[9px] lg:text-[12px]'>
              <span className='font-bold'>Citations & Data Sources:</span> LinkedIn Talent Solutions: "Why Your Employer Brand Matters" Report
            </div>
            <div className='text-[9px] lg:text-[12px]'>
              Corporate Responsibility Magazine & Allegis Group Services Hiring Study
            </div>
            <div className='text-[9px] lg:text-[12px]'>
              <span className='font-bold'>Glassdoor:</span>Interview Experience Impact Survey
            </div>
            <div className='text-[9px] lg:text-[12px]'>
              Universum Global Employer Branding ROI Benchmarks
            </div>
            <div className='text-[9px] lg:text-[12px]'>
              HubSpot, Salesforce, Shopify: Referenced as employer branding case studies from various public reports and hiring blogs
            </div>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Article4;