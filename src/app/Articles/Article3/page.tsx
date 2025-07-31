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
    paragraph: "Workforce diversity: Flexibility enables inclusion of working parents, caregivers, and neurodiverse individuals.",
  },
  {
    icon: <MoveRight className='w-[20px] h-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
    paragraph: "Global hiring: You can’t hire internationally and insist on local hours. That’s not global—it’s just confusing.",
  },
  {
    icon: <MoveRight className='w-[20px] h-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
    paragraph: "Mental health: A study by the American Psychological Association found that flexible workers report 50% higher job satisfaction.",
  },
];

const whatWeOfferItems = [
  {
    heading:
      "Can start times be staggered?",
  },
  {
    heading:
      "Can people choose their peak productivity window?",
  },
  {
    heading:
      "Can projects run asynchronously?",
  },
];


const Article3 = () => {
  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />

        <div className='lg:pt-[120px] lg:ml-[285px] lg:mr-[285px] h-full lg:p-16 px-4 pt-[50px]'>
            <div className='mt-12 lg:space-y-4 space-y-1'>
                <div className='flex gap-8'>
                  <h2 className='mb-12'>Article 3:</h2>
                  <p className='bg-black text-white px-1 h-[26px]'>12 mins Read</p>
                </div>

                <h1 className='font-medium text-[24px] lg:text-[40px] lg:leading-[50px] text-[#28B673]'>The Future of Work Isn’t Remote—It’s Flexible</h1>
                <h2 className='font-semibold mt-8 text-[14px] lg:text-[22px] lg:leading-[30px]'>Autonomy is the new currency. Smart leaders don’t fight flexibility—they design for it.</h2>
                <p className='text-[12px] lg:text-[18px] lg:leading-[30px] mt-12'>Remote work isn’t the endgame—flexibility is. This article breaks down how companies that lead with autonomy, adaptability, and asynchronous culture are becoming magnets for top talent, while others risk being left behind.</p>
            </div>

            <div className='flex flex-col items-center mb-12 pt-[20px] lg:pt-[100px]'>
              <QuoteBox 
                quote="Flexibility isn’t a perk anymore. It’s proof of respect." 
                author="Animesh Singh Rao" 
              />
              <p className='text-[12px] lg:text-[18px] lg:leading-[30px] mt-12 w-full'>The debate around remote work has dominated headlines since 2020. But as we step deeper into a digitally connected workplace, the question isn't "remote or not?"—it’s "how flexible are we willing to be?"
                    <br /> <br />
                McKinsey reports that 87% of employees offered flexible work options take them. That’s not a preference—it’s a revolution.</p>
            </div>

            <div className='flex flex-col pt-18 gap-12'>
              <h1 className='font-medium text-[24px] lg:text-[40px] lg:leading-[50px]'>Flexibility Is the New Foundation</h1>
              <p className='text-[12px] lg:text-[18px] lg:leading-[30px]'>Flexibility doesn’t just mean location. It’s about autonomy over time, space, and process. It’s the ability to deliver outcomes without being shackled to outdated systems. The traditional 9-to-5 is no longer a productivity measure—it’s a relic.
                    <br /> <br />
                Companies that recognize this are seeing a surge in retention, productivity, and quality of talent. Those that resist? They’re losing their best people to companies with more evolved cultures.</p>
            </div>
        </div>

        <div>
          <VerticalInfoList
            title="Why It Matters More Than Ever"
            items={verticalItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-20"
            showDivider={false}
          />
        </div>

        <div className='lg:ml-[285px] lg:mr-[285px] h-full lg:pr-16 lg:pl-16 px-4'>
            <p className='text-[14px] lg:text-[18px] lg:leading-[30px] font-medium'>LinkedIn’s Global Talent Trends Report notes that 89% of hiring failures are due to soft skills mismatch—not technical incompetence. That tells us something: Hiring for culture and adaptability is not a “nice to have”—it’s non-negotiable.</p>
        </div>

        <div>
            <div className='mt-12'>
              <WhatWeOfferSection 
                  title="It’s Not Just Remote"
                  paragraph='Some roles can’t be remote. That’s fine. Flexibility isn’t all or nothing—it’s about choices:' 
                  items={whatWeOfferItems}
                  wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-16"
              />
            </div>

            <div className='bg-gray-100 flex flex-col gap-4 w-full'>
                <div className='lg:mr-[285px] lg:ml-[285px] lg:mb-[120px] lg:pr-16 lg:pl-16 flex flex-col gap-4 px-4 py-10'>
                    <p className='text-[14px] lg:text-[18px] text-[#28B673]'>
                    Companies like Atlassian and Dropbox have adopted "remote-first but not remote-only" models, emphasizing async collaboration and tools over time-based micromanagement.
                    </p>
                    <h1 className='font-medium text-[22px] lg:text-[40px] mt-12'>What Leaders Need to Do</h1>
                    <div className='flex flex-col mt-4 lg:mt-12'>
                        <div className='border border-r-[2px] border-l-[2px] border-t-[2px] py-2 px-4 text-[16px] lg:text-[20px]'>
                            Redesign KPIs for outcomes, not hours
                        </div>
                        <div className='border border-r-[2px] border-l-[2px] py-2 px-4 text-[16px] lg:text-[20px]'>
                            Train managers to lead distributed teams with empathy and clarity
                        </div>
                        <div className='border border-r-[2px] border-l-[2px] py-2 px-4 text-[16px] lg:text-[20px]'>
                            Invest in digital infrastructure that supports collaboration without forcing real-time dependency
                        </div>
                        <div className='border border-r-[2px] border-l-[2px] border-b-[2px] py-2 px-4 text-[16px] lg:text-[20px]'>
                            Build rituals, not rigid schedules
                        </div>
                    </div>
                    <h1 className='font-medium text-[22px] lg:text-[40px] mt-12'>The Shift Is Cultural, Not Logistical</h1>
                    <p className='text-[14px] lg:text-[18px] text-[#28B673]'>
                    It’s tempting to treat flexibility as an HR policy tweak. But true flexibility requires a shift in mindset. It challenges control-driven leadership and rewards trust-based cultures.
                        <br /> <br />
                    We need to unlearn the idea that visibility equals productivity. The future belongs to companies who understand that productivity is personal, not prescriptive.
                    </p>
                </div>
            </div>
        </div>

        <div className='lg:pt-[120px] lg:ml-[285px] lg:mr-[285px] h-full lg:p-16 px-4 pt-[50px] py-10'>
          <h1 className='font-medium text-[22px] lg:text-[40px] lg:leading-[50px]'>Conclusion: The ROI of Engagement</h1>
          <p className='text-[14px] lg:text-[18px] lg:leading-[30px] mt-12'>When flexibility becomes strategy, it creates resilience. When it becomes default, it creates loyalty. The workplace of the future won’t be defined by where people sit—it will be defined by how freely they can contribute.
                <br /> <br />
            Let go of control. Design for trust. And build a culture that adapts as fast as the world around it.
                                <br /> <br />
            Because the future isn’t remote. It’s flexible.</p>

          <div className='flex flex-col p-2 bg-[#D9D9D9] w-full lg:w-[500px] gap-2 text-[12px] mt-24'>
            <div className='text-[9px] lg:text-[12px]'>
              <span className='font-bold'>Citations & Data Sources:</span> McKinsey & Company: American Opportunity Survey 2023
            </div>
            <div className='text-[9px] lg:text-[12px]'>
                <span className='font-bold'>Gartner: </span>  “9 Future of Work Trends”
            </div>
            <div className='text-[9px] lg:text-[12px]'>
              <span className='font-bold'>Forbes: </span>  “Why Flexibility Has Become a Talent Magnet”
            </div>
            <div className='text-[9px] lg:text-[12px]'>
              <span className='font-bold'>Harvard Business Review:</span> “Autonomy at Work Increases Engagement”
            </div>
            <div className='text-[9px] lg:text-[12px]'>
              LinkedIn Workplace Learning Report 2023
            </div>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Article3;