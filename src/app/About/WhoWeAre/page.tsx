/* eslint-disable react/no-unescaped-entities */
import CallToAction3 from '@/components/CTA3';
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar'
import VerticalInfoList from '@/components/VerticalInfoList'
import { MoveRight, PlayCircleIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const verticalItems = [
    {
      icon: <MoveRight className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px] text-[#28B673]'/>,
      paragraph: "We say no if we're not the right fit—then refer you to someone who is. That's rare in our industry, and we're proud of it.",
    },
    {
      icon: <MoveRight className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px] text-[#28B673]'/>,
      paragraph: "A search is never just about a CV—it's about fit, ambition, and sometimes, a gut feeling.",
    },
    {
      icon: <MoveRight className='w-[20px] h-[20px] lg:w-[36px] lg:h-[36px] text-[#28B673]'/>,
      paragraph: "We treat every client's problem like it's our own. (Because tomorrow, it might be.",
    },
  ];

const WhoWeAre = () => {
  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />

        <div className='pt-[120px] w-full h-full'>
            {/* Hero Section */}
            <div className='w-full px-4 lg:ml-[285px] lg:mr-[285px] lg:p-16 py-8'>
                <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px]'>
                    Who We Are
                </h1>
                <h2 className='font-medium text-[18px] lg:text-[24px] leading-[20px] lg:leading-[40px] text-[#28B673] mt-4'>
                    "Unwritten Rules, Unmatched Results"
                </h2>
            </div>

            {/* Beliefs Section */}
            <div>
                <h1 className='px-4 lg:ml-[285px] lg:mr-[285px] lg:px-16 text-xl lg:text-[30px] leading-tight'>
                    Let's skip the jargon. Here's what we believe at Cirrcle Up:
                </h1>
                <VerticalInfoList
                    items={verticalItems}
                    wrapperClassName="lg:ml-[285px] lg:mr-[285px]"
                    showDivider={false}
                />
            </div>

            {/* Info Sections */}
            <div className='flex flex-col'>
                <div className='mb-8 lg:mb-12'>
                    <div className='px-4 lg:ml-[285px] lg:mr-[285px] lg:px-16 mt-4 lg:mt-16 space-y-4 lg:space-y-6'>
                        <h1 className='text-[24px] lg:text-[30px] font-medium leading-tight'>Did you know?</h1>
                        <p className='text-[16px] lg:text-[20px] leading-relaxed'>
                            "80% of our clients first found us through word-of-mouth. The other 20%? LinkedIn stalking (we see you)."
                        </p>
                    </div>
                    <div className='px-4 lg:ml-[285px] lg:mr-[285px] lg:px-16 mt-16 lg:mt-32 space-y-4 lg:space-y-6'>
                        <h1 className='text-[24px] lg:text-[30px] font-medium leading-tight'>The Human Side:</h1>
                        <p className='text-[16px] lg:text-[20px] leading-relaxed'>
                            A rolling feed of team stories—why they joined, the most meaningful placement they made, what keeps them up at night.
                        </p>
                    </div>
                </div>

                {/* Video Section */}
                <div className='flex flex-col lg:flex-row lg:justify-between px-4 lg:ml-[285px] lg:mr-[285px] lg:px-16 gap-4 pb-8 lg:pb-12'>
                    <div className='relative w-full lg:w-1/2 h-[200px] lg:h-[250px] overflow-hidden text-white mt-6 lg:mt-8 cursor-pointer rounded-lg lg:rounded-none'>
                        <Image 
                            src='/who2.png'
                            alt='Team story video'
                            fill
                            className="object-cover object-center z-10"
                            priority
                        />

                        <div className="relative z-10 w-full h-full flex justify-center items-center">
                            <PlayCircleIcon className='text-black w-16 h-16 lg:w-[70px] lg:h-[70px] opacity-50'/>
                        </div>
                    </div>
                    <div className='relative w-full lg:w-1/2 h-[200px] lg:h-[250px] overflow-hidden text-white mt-6 lg:mt-8 cursor-pointer rounded-lg lg:rounded-none lg:py-12'>
                        <Image 
                            src='/who1.png'
                            alt='Team story video'
                            fill
                            className="object-cover object-center z-10"
                            priority
                        />

                        <div className="relative z-10 w-full h-full flex justify-center items-center">
                            <PlayCircleIcon className='text-black w-16 h-16 lg:w-[70px] lg:h-[70px] opacity-50'/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Founder Profile - Animesh */}
            <div className='px-4 lg:ml-[285px] lg:mr-[285px] lg:p-16 py-8'>
                <div className='shadow-[#28B673] border-2 border-[#28B673] shadow-md rounded-[25px] p-4 lg:p-4 flex flex-col gap-4 lg:gap-6'>
                    <div>
                        <h2 className='text-xl lg:text-[28px] font-semibold'>Animesh Singh Rao</h2>
                        <h3 className='text-sm lg:text-[16px] font-semibold'>Founder & CEO, Cirrcle Up</h3>
                    </div>
                    
                    <p className='text-[14px] lg:text-[18px] leading-relaxed'>
                        With a reputation for building businesses from the ground up, Animesh Singh Rao is the driving force behind Cirrcle Up's disruptive approach to executive search and HR consulting. A serial entrepreneur by instinct and a people-first leader by choice, Animesh brings a unique blend of operational experience and strategic vision to the table. 
                        <br /> <br />
                        Starting his career in his family business before launching ventures across packaging, technology, and hospitality, Animesh has spent over a decade understanding what it really takes to scale teams—and cultures—across diverse industries. He's known for his no-nonsense approach, willingness to challenge industry conventions, and relentless focus on real impact over hollow metrics.
                        <br /><br />
                        At Cirrcle Up, Animesh is not just a founder—he's a hands-on mentor, driving the team to blend instinct with insight in every search. Clients value his honest feedback, deep market knowledge, and a knack for spotting leaders who shape the future, not just fit the present.
                    </p>

                    <div className='border shadow-lg w-full lg:max-w-[650px] p-3 rounded-[15px]'>
                        <h2 className='italic text-sm lg:text-[16px] leading-relaxed'>
                            "Leadership is never a transaction—it's a transformation. Every great hire changes the trajectory of a company, and that's what gets me out of bed every morning."
                        </h2>
                        <h3 className='text-right font-semibold text-base lg:text-[18px] mt-3'>- Animesh Singh Rao</h3>
                    </div>
                </div>
            </div>

            {/* Partner Profile - Bijender */}
            <div className='px-4 lg:ml-[285px] lg:mr-[285px] lg:p-16 py-8'>
                <div className='shadow-[#28B673] border-2 border-[#28B673] shadow-md rounded-[25px] p-4 lg:p-4 flex flex-col gap-4 lg:gap-6'>
                    <div>
                        <h2 className='text-xl lg:text-[28px] font-semibold'>Bijender Singh Rao</h2>
                        <h3 className='text-sm lg:text-[16px] font-semibold'>Senior Partner, Cirrcle Up</h3>
                    </div>
                    
                    <p className='text-[14px] lg:text-[18px] leading-relaxed'>
                        Bijender Singh Rao is a veteran business leader whose career has spanned over three decades, including senior leadership roles with global giants like Perfetti Van Melle. He is widely recognized for his operational excellence, steady judgment, and ability to build organizations that last. 
                        <br/> <br />
                        Known for his methodical approach and deep understanding of what makes people tick, Bijender has led diverse teams through growth, change, and transformation. His insights into talent strategy, organizational design, and leadership development have shaped the success stories of multiple blue-chip companies. 
                        <br /> <br />
                        At Cirrcle Up, Bijender is the anchor—providing both strategic guidance and hands-on expertise. He's a trusted advisor to clients and a mentor to the next generation of leaders, bringing a blend of old-school wisdom and modern thinking to every engagement.
                    </p>

                    <div className='border shadow-lg w-full lg:max-w-[650px] p-3 rounded-[15px]'>
                        <h2 className='italic text-sm lg:text-[16px] leading-relaxed'>
                            "The foundation of every great business is the people behind it. Invest in them, and success follows."
                        </h2>
                        <h3 className='text-right font-semibold text-base lg:text-[18px] mt-3'>- Bijender Singh Rao</h3>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className='flex justify-center px-4 pb-10 lg:pb-0'>
                <CallToAction3
                    heading="Shape What's Next, Right Now."
                    description="Ready to work with a team that sees you as more than a transaction?"
                    buttons={[{ title: "Get in Touch", href: "/Contact/GetInTouch" }]}
                />
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default WhoWeAre;