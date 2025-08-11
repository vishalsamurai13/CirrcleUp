/* eslint-disable react/no-unescaped-entities */
import CallToAction3 from '@/components/CTA3'
import JobCard from '@/components/Job'
import { Footer } from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { MoveRight, PlayCircleIcon} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const verticalItems = [
    {
      icon: <MoveRight className='w-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
      heading: "Impact on Day One:",
      paragraph: "Your work doesn’t get lost in layers. You’ll see the impact of your effort—on clients, on candidates, on the company—from the start.",
    },
    {
      icon: <MoveRight className='w-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
      heading: "Entrepreneurial Freedom:",
      paragraph: "Want to try something new? Pitch it, own it, make it real. Innovation isn’t a buzzword here—it’s how we operate.",
    },
    {
      icon: <MoveRight className='w-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
      heading: "Learning Never Stops:",
      paragraph: "Access mentoring from leaders who’ve built companies, not just climbed the ladder. We invest in your growth, with learning budgets, real-world projects, and exposure to the sharpest minds in the business.",
    },
    {
      icon: <MoveRight className='w-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>,
      heading: "Real Diversity:",
      paragraph: "Different backgrounds, non-linear careers, side hustles, career breaks—bring your whole self.",
    },
];

const verticalItems3 = [
    {
      icon: <MoveRight className='w-[17px] h-[36px] text-[#28B673]'/>,
      heading: "Apply: ",
      paragraph: "Your story matters more than your resume",
    },
    {
      icon: <MoveRight className='w-[17px] h-[36px] text-[#28B673]'/>,
      heading: "Meet Us: ",
      paragraph: "Conversation, not interrogation",
    },
    {
      icon: <MoveRight className='w-[17px] h-[36px] text-[#28B673]'/>,
      heading: "Case/Project:",
      paragraph: "Show us how you think",
    },
    {
      icon: <MoveRight className='w-[17px] h-[36px] text-[#28B673]'/>,
      heading: "Culture Fit Chat: ",
      paragraph: "Meet your future teammates",
    },
    {
        icon: <MoveRight className='w-[17px] h-[36px] text-[#28B673]'/>,
        heading: "Offer & Onboarding:",
        paragraph: " Quick, clear, and supportive",
      },
];

const verticalItems4 = [
    {
      icon: <MoveRight className='w-[17px] h-[36px] text-[#28B673]'/>,
      paragraph: "Learning & development budget for every team member",
    },
    {
      icon: <MoveRight className='w-[17px] h-[36px] text-[#28B673]'/>,
      paragraph: "Wellness days, not just sick days",
    },
    {
      icon: <MoveRight className='w-[17px] h-[36px] text-[#28B673]'/>,
      paragraph: "Annual company offsite in a new city every year",
    },
    {
      icon: <MoveRight className='w-[17px] h-[36px] text-[#28B673]'/>,
      paragraph: "Open-door leadership and transparent performance feedback",
    },
];

const verticalItems2 = [
    {
      heading: "Hungry, not entitled",
    },
    {
      heading: "Learner for life",
    },
    {
      heading: "Courage to speak up (and listen)",
    },
    {
      heading: "Integrity, always",
    },
    {
      heading: "Team player, but can lead from the front when needed",
    },
];

const Careers = () => {
  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />

        <div className='lg:pt-[120px] pt-[80px] w-full h-full'>

            <div className='lg:ml-[285px] lg:mr-[285px] lg:p-16 px-4 py-10'>
                <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] text-[#28B673] lg:leading-[60px]'>Careers at Cirrcle Up</h1>
                <h2 className='font-medium text-[18px] lg:text-[24px] leading-[20px] lg:leading-[40px]  mt-4'>Where Grit Meets Growth</h2>
                <p className='text-[14px] lg:text-[18px] leading-relaxed lg:leading-[30px] mt-6 italic text-[#28B673]'>Forget what you know about consulting careers. At Cirrcle Up, we don’t offer jobs—we offer launchpads. Whether you’re a curious graduate, a seasoned recruiter, or a leader seeking a new challenge, this is the place where you’ll outgrow even your own expectations.
                    <br/><br />
                    We are a young company built by founders who know what it’s like to start with nothing but hustle and ambition. We don’t hire for pedigrees—we hire for potential, passion, and the will to make things happen.</p>
            </div>

            <div className='w-full bg-gray-100'>
                <div className='lg:ml-[285px] lg:mr-[285px] lg:p-16 px-4 py-10'>
                    <h1 className='text-[30px] lg:text-[40px] font-medium'>What We Offer</h1>
                    <div className="lg:mt-12 mt-8 space-y-8 lg:space-y-12">
                        {verticalItems.map((item, index) => (
                            <div className='flex flex-col' key={index}>
                                <div className='flex items-center gap-4 mb-3'>
                                    {item.icon}
                                    <h1 className="text-[22px] lg:text-[28px] font-light">{item.heading}</h1>
                                </div>
                                <p className="text-gray-700 mb-4 leading-relaxed text-[14px] lg:text-[18px]">{item.paragraph}</p>
                            </div>
                        ))}
                    </div> 
                </div>
            </div>
            
            <div className='lg:ml-[285px] lg:mr-[285px] lg:p-16 lg:py-24 px-4 py-10 flex flex-col gap-8 lg:gap-12'>
                <h1 className='text-2xl lg:text-[40px] font-medium leading-tight'>Real Voices: Employee Stories</h1>
                <div className='flex flex-col items-center gap-8 lg:gap-12'>
                    <div className='w-full max-w-[793px] py-6 lg:py-5 bg-[#d9d9d9] rounded-[15px] px-5 mt-8 lg:mt-12 shadow-lg flex flex-col gap-4 lg:gap-6'>
                        <p className='text-[#28B673] text-lg lg:text-[20px] italic leading-relaxed'>
                            &quot;I joined as an associate, pitched a new process in month two, and now lead a team. Here, merit is everything.&quot;
                        </p>
                        <h2 className='font-semibold text-lg lg:text-[22px] text-right mr-0 lg:mr-12'>-XXXX</h2>
                    </div>
                    <div className='w-full max-w-[793px] py-6 lg:py-5 bg-[#d9d9d9] rounded-[15px] px-5 shadow-lg flex flex-col gap-4 lg:gap-6'>
                        <p className='text-[#28B673] text-lg lg:text-[20px] leading-relaxed'>
                            &quot;I came back to work after a three-year break—nobody asked me to justify it. They just asked what I wanted to build next.&quot;
                        </p>
                        <h2 className='font-semibold text-lg lg:text-[22px] text-right mr-0 lg:mr-12'>-XXXX</h2>
                    </div>
                </div>
                <div className=''>
                    <Link className='hover:opacity-50 transition-opacity flex justify-center items-center flex-col' href='/'>
                        <h2 className='uppercase text-sm lg:text-[16px] font-semibold'>read more stories</h2>
                        <span className='w-[150px] lg:w-[172px] h-[2px] bg-black'/>
                    </Link>
                </div>
            </div>

            
            <div className='lg:ml-[285px] lg:mr-[285px] lg:p-16 px-4 py-10'>
                <h1 className='text-[30px] lg:text-[40px] font-medium'>What We Offer</h1>
                <p className='text-[18px] lg:text-[22px] mt-6 mb-12'>We don’t believe in copy-paste job specs. But if these words describe you, let’s talk:</p>
                <div className="space-y-4">
                    {verticalItems2.map((item, index) => (
                        <div className='flex flex-col' key={index}>
                            <div className='flex items-center gap-3 lg:gap-8'>
                                <MoveRight className='w-[20px] lg:w-[35px] lg:h-[36px] text-[#28B673]'/>
                                <h1 className="text-[15px] lg:text-[24px]">{item.heading}</h1>
                            </div>
                        </div>
                    ))}
                </div> 
            </div>

            <div className='w-full bg-gray-100'>
                <div className='lg:ml-[285px] lg:mr-[285px] lg:p-16 px-4 py-5'>
                    <h1 className='lg:text-[40px] text-[30px] font-medium'>Open Roles</h1>
                    <h2 className='text-[18px] lg:text-[20px] mt-4 lg:mb-12 mb-8'>Current Openings</h2>
                    <div className='flex flex-col lg:grid lg:grid-cols-3 gap-[12px] space-y-6 lg:space-y-0'>
                        <JobCard
                            jobId="17892102"
                            title="Recruitment Consultants"
                            experience="3-5 Years"
                            location="Remote"
                            skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                            applyLink="/Contact/CareerAdvance/17892102/apply"
                            viewLink="/Contact/CareerAdvance/17892102"
                        />
                        <JobCard
                            jobId="17892102"
                            title="Recruitment Consultants"
                            experience="3-5 Years"
                            location="Remote"
                            skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                            applyLink="/Contact/CareerAdvance/17892102/apply"
                            viewLink="/Contact/CareerAdvance/17892102"
                        />
                        <JobCard
                            jobId="17892102"
                            title="Recruitment Consultants"
                            experience="3-5 Years"
                            location="Remote"
                            skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                            applyLink="/Contact/CareerAdvance/17892102/apply"
                            viewLink="/Contact/CareerAdvance/17892102"
                        />
                        <JobCard
                            jobId="17892102"
                            title="Recruitment Consultants"
                            experience="3-5 Years"
                            location="Remote"
                            skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                            applyLink="/Contact/CareerAdvance/17892102/apply"
                            viewLink="/Contact/CareerAdvance/17892102"
                        />
                        <JobCard
                            jobId="17892102"
                            title="Recruitment Consultants"
                            experience="3-5 Years"
                            location="Remote"
                            skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                            applyLink="/Contact/CareerAdvance/17892102/apply"
                            viewLink="/Contact/CareerAdvance/17892102"
                        />
                        <JobCard
                            jobId="17892102"
                            title="Recruitment Consultants"
                            experience="3-5 Years"
                            location="Remote"
                            skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                            applyLink="/Contact/CareerAdvance/17892102/apply"
                            viewLink="/Contact/CareerAdvance/17892102"
                        />
                    </div>
                    <div className='mt-12'>
                        <Link className='hover:opacity/50 transition-opacity flex justify-center items-center flex-col' href='/Contact/CareerAdvance'>
                            <h2 className='uppercase text-[16px] font-semibold'>See all roles</h2>
                            <span className='w-[125px] h-[2px] bg-black'/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='px-4 lg:ml-[285px] lg:mr-[285px] lg:p-16 py-10'>
                <h1 className='text-[30px] lg:text-[40px] font-medium leading-tight'>Growth, Recognition, and Rewards</h1>
                <div className='flex flex-col gap-4 lg:gap-6 mt-6 lg:mt-10'>
                    <p className='text-[16px] lg:text-[22px] leading-relaxed'>4.8/5 – Our average team rating on internal culture, mentorship, and work-life balance</p>
                    <p className='text-[16px] lg:text-[22px] leading-relaxed'>Quarterly Bonuses for performance and innovation</p>
                    <p className='text-[16px] lg:text-[22px] leading-relaxed'>"Recognition Fridays" – Your work, celebrated by everyone</p>
                </div>
                
                {/* Image Grid */}
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-[12px] mt-8 lg:mt-12 w-full'>
                    <div className='lg:space-y-[6px]'>
                        <Image 
                        src='/c1.png'
                        alt='Company culture image 1' 
                        className="object-cover relative w-full h-auto"
                        width={310} 
                        height={250}
                        />
                    </div>
                    <div className='lg:space-y-[6px]'>
                        <Image 
                        src='/c2.png'
                        alt='Company culture image 2' 
                        className="object-cover relative w-full h-auto"
                        width={310} 
                        height={250}
                        />
                    </div>
                    <div className='lg:space-y-[6px] '>
                        <Image 
                        src='/c3.png'
                        alt='Company culture image 3' 
                        className="object-cover relative w-full h-auto"
                        width={310} 
                        height={250}
                        />
                    </div>
                    <div className='lg:space-y-[6px]'>
                        <Image 
                        src='/c4.png'
                        alt='Company culture image 4' 
                        className="object-cover relative w-full h-auto"
                        width={310} 
                        height={250}
                        />
                    </div>
                    <div className='lg:space-y-[6px]'>
                        <Image 
                        src='/c5.png'
                        alt='Company culture image 5' 
                        className="object-cover relative w-full h-auto"
                        width={310} 
                        height={250}
                        />
                    </div>
                    <div className='lg:space-y-[6px]'>
                        <Image 
                        src='/c6.png'
                        alt='Company culture image 6' 
                        className="object-cover relative w-full h-auto"
                        width={310} 
                        height={250}
                        />
                    </div>
                </div>
                
                {/* Video Section */}
                <div className='relative w-full h-[200px] lg:h-[300px] overflow-hidden text-white mt-4 lg:mt-2 cursor-pointer border border-black rounded-lg lg:rounded-none'>
                    <Image 
                        src='/c7.png'
                        alt='Company culture video'
                        fill
                        className="object-cover object-center z-10"
                        priority
                    />

                    <div className="relative z-10 w-full h-full flex justify-center items-center">
                        <PlayCircleIcon className='text-black w-16 h-16 lg:w-[70px] lg:h-[70px] opacity-50 font-light'/>
                    </div>
                </div>
                
                {/* Benefits and Hiring Process */}
                <div className='w-full flex flex-col lg:flex-row gap-4 lg:gap-2 mt-8 lg:mt-12'>
                    <div className='w-full lg:w-1/2 bg-[#d9d9d9] p-4 rounded-lg lg:rounded-none'>
                        <h1 className='font-medium text-lg lg:text-xl mb-4'>Perks and Benefits</h1>
                        {verticalItems4.map((item, index) => (
                            <div className='flex flex-col' key={index}>
                                <div className='flex items-center lg:items-center gap-3 lg:gap-4 mb-3 lg:mb-2'>
                                    <div className='flex-shrink-0'>
                                        {item.icon}
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-sm lg:text-[12px]">{item.paragraph}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='w-full lg:w-1/2 bg-[#d9d9d9] p-4 rounded-lg lg:rounded-none'>
                        <h1 className='font-medium text-lg lg:text-xl mb-4'>Our Hiring Process: Transparent & Respectful</h1>
                        {verticalItems3.map((item, index) => (
                            <div className='flex flex-col' key={index}>
                                <div className='flex items-start lg:items-center gap-3 lg:gap-4 mb-3 lg:mb-2'>
                                    <div className='flex-shrink-0 mt-1 lg:mt-0'>
                                        {item.icon}
                                    </div>
                                    <div className='flex flex-col lg:flex-row lg:gap-2'>
                                        <h2 className="text-sm lg:text-[12px] font-medium">{item.heading}</h2>
                                        <p className="text-gray-700 leading-relaxed text-sm lg:text-[12px]">{item.paragraph}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <p className='italic text-sm lg:text-[12px] mt-2'>You'll always hear back from us. Every application gets a response.</p>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-center gap-8 lg:gap-6 mt-8 lg:mt-12 pb-10 lg:pb-0 px-4 lg:px-0'>
                <CallToAction3
                    heading="Your Next Move"
                    description="Are you ready to grow faster than you ever thought possible? Ready to work with a team that cares about your story, not just your output? Let's build something extraordinary together."
                    buttons={[{ title: "APPLY NOW", href: "/Contact/GetInTouch" }, { title: "SEND US YOUR STORY", href: "/Contact/GetInTouch" }]}
                />
                <CallToAction3
                    heading="Not looking, but know someone who is?"
                    description="and if we hire them, you get a thank you from us."
                    buttons={[{ title: "REFER A FRIEND", href: "/Contact/GetInTouch" }]}
                />
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Careers