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
    paragraph: "Lack of recognition: Employees who don’t feel appreciated are twice as likely to be disengaged.",
  },
  {
    icon: <MoveRight className='w-[20px] h-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
    paragraph: "No clear growth path: 63% of employees say a lack of career development is their biggest reason for leaving a job (LinkedIn Learning Report).",
  },
  {
    icon: <MoveRight className='w-[20px] h-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
    paragraph: "Poor communication: When objectives are vague and leadership is unapproachable, employees become directionless.",
  },
];

const whatWeOfferItems = [
  {
    heading: "Build Psychological Safety",
    paragraph:
      "Encourage a culture where speaking up is welcomed—not punished. Psychological safety drives innovation because employees aren’t afraid to fail.",
  },
  {
    heading: "Clarify Purpose",
    paragraph:
      "Tie each role back to the larger mission. Purpose isn’t just about social impact—it’s about understanding why your work matters.",
  },
  {
    heading: "Offer Real-Time Feedback",
    paragraph:
      "Annual reviews are outdated. A culture of ongoing, meaningful feedback helps employees course-correct and grow.",
  },
  {
    heading: "Invest in Career Growth",
    paragraph:
      "According to a PwC report, 77% of employees are ready to learn new skills or completely retrain. Offer them that chance.",
  },
  {
    heading: "Measure Engagement Regularly",
    paragraph:
      "Run pulse surveys and act on the feedback. Even asking the right questions shows employees that their voice matters.",
  },
];


const Article1 = () => {
  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />

        <div className='lg:pt-[120px] lg:ml-[285px] lg:mr-[285px] h-full lg:p-16 px-4 pt-[50px]'>
            <div className='mt-12 lg:space-y-4 space-y-1'>
                <div className='flex gap-8'>
                  <h2 className='mb-12'>Article 1:</h2>
                  <p className='bg-black text-white px-1 h-[26px]'>8 mins Read</p>
                </div>

                <h1 className='font-medium text-[24px] lg:text-[40px] lg:leading-[50px] text-[#28B673]'>The Silent Crisis — Why 85% of Employees Are Disengaged, and What Leaders Can Do About It</h1>
                <h2 className='font-semibold mt-8 text-[14px] lg:text-[22px] lg:leading-[30px]'>Engagement isn't a bonus—it's the backbone of performance. The most forward-looking leaders are those turning silence into signals.</h2>
                <p className='text-[12px] lg:text-[18px] lg:leading-[30px] mt-12'>85% of global employees are disengaged, costing companies productivity and morale. This article breaks down the real reasons behind the crisis—and what leaders can do today to course-correct, build trust, and activate potential across their teams.</p>
            </div>

            <div className='flex flex-col items-center mb-12 pt-[20px] lg:pt-[100px]'>
              <QuoteBox 
                quote="Leadership isnt about louder voices its about tuning into the silence most people ignore." 
                author="Animesh Singh Rao" 
              />
              <p className='text-[12px] lg:text-[18px] lg:leading-[30px] mt-12 w-full'>In a world where innovation and adaptability are paramount, a staggering statistic continues to haunt organizations globally—85% of employees are not engaged at work, according to Gallup's 2023 State of the Global Workplace report. This isn’t just a minor glitch in the matrix; it’s a systemic crisis that hampers productivity, innovation, and company culture. The good news? It’s solvable—but only if leadership takes accountability.</p>
            </div>

            <div className='flex flex-col pt-18 gap-12'>
              <h1 className='font-medium text-[24px] lg:text-[40px] lg:leading-[50px]'>Disengagement: A Leadership Issue, Not an Employee Problem</h1>
              <p className='text-[12px] lg:text-[18px] lg:leading-[30px]'>Employee disengagement often gets dismissed as a personal failing—"They just don’t care enough" or "They’re not self-motivated." But the truth lies deeper. Leadership style, workplace environment, and a lack of purpose are the real culprits. According to Gallup, employees who strongly agree that they trust the leadership of their organization are four times as likely to be engaged.
                  <br /> <br />
                Marcus Buckingham said it best: "People don’t leave bad jobs, they leave bad managers." When leaders don’t invest in understanding their people, disengagement festers. It spreads silently, sapping energy, creativity, and collaboration from the workplace.</p>
            </div>
        </div>

        <div>
          <VerticalInfoList
            title="What Causes Disengagement?"
            items={verticalItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-20"
            showDivider={false}
          />
        </div>

        <div className='mt-12'>
          <WhatWeOfferSection 
            title="Creating an Engaged Culture" 
            paragraph='Engagement isn’t about bean bags and ping pong tables. It’s about creating a culture of inclusion, accountability, and meaning. Here’s how leaders can begin:'
            items={whatWeOfferItems}
            wrapperClassName="lg:ml-[285px] lg:mr-[285px] lg:py-16"
          />
        </div>

        <div className='lg:pt-[120px] lg:ml-[285px] lg:mr-[285px] h-full lg:p-16 pt-[50px] px-4 py-10'>
          <h1 className='font-medium text-[22px] lg:text-[40px] lg:leading-[50px]'>Conclusion: The ROI of Engagement</h1>
          <p className='text-[14px] lg:text-[18px] lg:leading-[30px] mt-12'>Engaged employees are 21% more productive, have 41% lower absenteeism, and are 59% less likely to look for a new job, according to Gallup. These aren’t just numbers—they’re business outcomes.
              <br/> <br />
          As leaders, we have to stop viewing engagement as an HR initiative. It’s a leadership mandate. The organizations that thrive tomorrow will be the ones whose leaders choose empathy, clarity, and purpose today. Because when people are engaged, they don’t just do the work—they bring their best selves to it.<br /><br />And that changes everything.</p>

          <div className='flex flex-col p-2 bg-[#D9D9D9] w-full lg:w-[500px] gap-2 text-[12px] mt-24'>
            <div className='text-[9px] lg:text-[12px]'>
              <span className='font-bold'>Citations & Data Sources:</span> Gallup: State of the Global Workplace Report 2023
            </div>
            <div className='text-[9px] lg:text-[12px]'>
              <span className='font-bold'>Harvard Business Review:</span> “The Case for Investing in Employee Engagement”
            </div>
            <div className='text-[9px] lg:text-[12px]'>
              <span className='font-bold'>SHRM:</span> “Why Psychological Safety Matters at Work”
            </div>
            <div className='text-[9px] lg:text-[12px]'>
              <span className='font-bold'>Deloitte:</span> 2022 Human Capital Trends Report
            </div>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Article1;