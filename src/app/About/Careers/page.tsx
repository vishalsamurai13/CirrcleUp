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
      icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
      heading: "Impact on Day One:",
      paragraph: "Your work doesn’t get lost in layers. You’ll see the impact of your effort—on clients, on candidates, on the company—from the start.",
    },
    {
      icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
      heading: "Entrepreneurial Freedom:",
      paragraph: " Want to try something new? Pitch it, own it, make it real. Innovation isn’t a buzzword here—it’s how we operate.",
    },
    {
      icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
      heading: "Learning Never Stops:",
      paragraph: "Access mentoring from leaders who’ve built companies, not just climbed the ladder. We invest in your growth, with learning budgets, real-world projects, and exposure to the sharpest minds in the business.",
    },
    {
      icon: <MoveRight className='w-[35px] h-[36px] text-[#28B673]'/>,
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

const verticalItems1 = [
    {
      heading: "●      Hungry, not entitled",
    },
    {
      heading: "●      Learner for life",
    },
    {
      heading: "●      Courage to speak up (and listen)",
    },
    {
      heading: "●      Integrity, always",
    },
    {
      heading: "●     Team player, but can lead from the front when needed",
    },
];

const Careers = () => {
  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />

        <div className='pt-[120px] w-full h-full'>

            <div className='ml-[285px] mr-[285px] p-16'>
                <h1 className='text-[67px] leading-[70px] text-[#28B673] font-medium'>Careers at Cirrcle Up</h1>
                <h2 className='text-[28px] ml-1 leading-[70px]'>Where Grit Meets Growth</h2>
                <p className='text-[25px] text-[#28B673] italic mt-6'>Forget what you know about consulting careers. At Cirrcle Up, we don’t offer jobs—we offer launchpads. Whether you’re a curious graduate, a seasoned recruiter, or a leader seeking a new challenge, this is the place where you’ll outgrow even your own expectations.
                    <br/><br />
                    We are a young company built by founders who know what it’s like to start with nothing but hustle and ambition. We don’t hire for pedigrees—we hire for potential, passion, and the will to make things happen.</p>
            </div>

            <div className='w-full bg-gray-100'>
                <div className='ml-[285px] mr-[285px] p-16 '>
                    <h1 className='text-[49px] font-medium'>What We Offer</h1>
                    <div className="space-y-4">
                        {verticalItems.map((item, index) => (
                            <div className='flex flex-col mt-16' key={index}>
                                <div className='flex items-center gap-4 mb-3'>
                                    {item.icon}
                                    <h1 className="text-[38px] font-light">{item.heading}</h1>
                                </div>
                                <p className="text-gray-700 mb-4 leading-relaxed text-[18px]">{item.paragraph}</p>
                            </div>
                        ))}
                    </div> 
                </div>
            </div>
            

            <div className='ml-[285px] mr-[285px] p-16 py-24 flex flex-col gap-12'>
                <h1 className='text-[49px]'>Real Voices: Employee Stories</h1>
                <div className='flex flex-col items-center gap-12'>
                    <div className='w-[793px] py-5 bg-[#d9d9d9] rounded-[15px] px-5 mt-12 shadow-lg flex flex-col gap-6'>
                        <p className='text-[#28B673] text-[20px] italic'>“I joined as an associate, pitched a new process in month two, and now lead a team. Here, merit is everything.”</p>
                        <h2 className='font-semibold text-[22px] text-right mr-12'>-XXXX</h2>
                    </div>
                    <div className='w-[793px] py-5 bg-[#d9d9d9] rounded-[15px] px-5 shadow-lg flex flex-col gap-6'>
                        <p className='text-[#28B673] text-[20px]'>“I came back to work after a three-year break—nobody asked me to justify it. They just asked what I wanted to build next.”</p>
                        <h2 className='font-semibold text-[22px] text-right mr-12'>-XXXX</h2>
                    </div>
                </div>
                <div className=''>
                    <Link className='hover:opacity/50 transition-opacity flex justify-center items-center flex-col' href='/'>
                        <h2 className='uppercase text-[16px] font-semibold'>read more stories</h2>
                        <span className='w-[172px] h-[2px] bg-black'/>
                    </Link>
                </div>
            </div>

            
            <div className='ml-[285px] mr-[285px] p-16 '>
                <h1 className='text-[49px] font-medium'>What We Offer</h1>
                <p className='text-[30px] mt-6 mb-12'>We don’t believe in copy-paste job specs. But if these words describe you, let’s talk:</p>
                <div className="space-y-4">
                    {verticalItems1.map((item, index) => (
                        <div className='flex flex-col' key={index}>
                            <div className='flex items-center gap-1'>
                                <h1 className="text-[32px] font-light">{item.heading}</h1>
                            </div>
                        </div>
                    ))}
                </div> 
            </div>

            <div className='w-full bg-gray-100'>
                <div className='ml-[285px] mr-[285px] p-16 '>
                    <h1 className='text-[49px] font-medium'>Open Roles</h1>
                    <h2 className='text-[26px] mt-4 mb-12'>Current Openings</h2>
                    <div className='grid grid-cols-3 gap-[12px]'>
                        <JobCard
                            jobId="17892102"
                            title="Recruitment Consultants"
                            experience="3-5 Years"
                            location="Remote"
                            skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                            applyLink="#"
                            viewLink="#"
                        />
                        <JobCard
                            jobId="17892102"
                            title="Recruitment Consultants"
                            experience="3-5 Years"
                            location="Remote"
                            skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                            applyLink="#"
                            viewLink="#"
                        />
                        <JobCard
                            jobId="17892102"
                            title="Recruitment Consultants"
                            experience="3-5 Years"
                            location="Remote"
                            skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                            applyLink="#"
                            viewLink="#"
                        />
                        <JobCard
                            jobId="17892102"
                            title="Recruitment Consultants"
                            experience="3-5 Years"
                            location="Remote"
                            skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                            applyLink="#"
                            viewLink="#"
                        />
                        <JobCard
                            jobId="17892102"
                            title="Recruitment Consultants"
                            experience="3-5 Years"
                            location="Remote"
                            skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                            applyLink="#"
                            viewLink="#"
                        />
                        <JobCard
                            jobId="17892102"
                            title="Recruitment Consultants"
                            experience="3-5 Years"
                            location="Remote"
                            skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                            applyLink="#"
                            viewLink="#"
                        />
                    </div>
                    <div className='mt-12'>
                        <Link className='hover:opacity/50 transition-opacity flex justify-center items-center flex-col' href='/'>
                            <h2 className='uppercase text-[16px] font-semibold'>See all roles</h2>
                            <span className='w-[125px] h-[2px] bg-black'/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='ml-[285px] mr-[285px] p-16'>
                <h1 className='text-[49px] font-medium'>Growth, Recognition, and Rewards</h1>
                <div className='flex flex-col gap-6 mt-4'>
                    <p className='text-[22px]'>●      4.8/5 – Our average team rating on internal culture, mentorship, and work-life balance</p>
                    <p className='text-[22px]'>●      Quarterly Bonuses for performance and innovation</p>
                    <p className='text-[22px]'>●      “Recognition Fridays” – Your work, celebrated by everyone</p>
                </div>
                <div className='grid grid-cols-3 space-y-[6px] gap-[12px] mt-12 w-full'>
                    <div>
                        <Image 
                          src='/c1.png'
                          alt='Artboard 1' 
                          className="object-cover relative"
                          width={310} 
                          height={250}
                        />
                    </div>
                    <div>
                        <Image 
                          src='/c2.png'
                          alt='Artboard 1' 
                          className="object-cover relative"
                          width={310} 
                          height={250}
                        />
                    </div>
                    <div>
                        <Image 
                          src='/c3.png'
                          alt='Artboard 1' 
                          className="object-cover relative"
                          width={310} 
                          height={250}
                        />
                    </div>
                    <div>
                        <Image 
                          src='/c4.png'
                          alt='Artboard 1' 
                          className="object-cover relative"
                          width={310} 
                          height={250}
                        />
                    </div>
                    <div>
                        <Image 
                          src='/c5.png'
                          alt='Artboard 1' 
                          className="object-cover relative"
                          width={310} 
                          height={250}
                        />
                    </div>
                    <div>
                        <Image 
                          src='/c6.png'
                          alt='Artboard 1' 
                          className="object-cover relative"
                          width={310} 
                          height={250}
                        />
                    </div>
                </div>
                <div className='relative w-full h-[300px] overflow-hidden text-white mt-2 cursor-pointer border border-black'>
                    <Image 
                        src='/c7.png'
                        alt='video'
                        fill
                        className="object-cover object-center z-10"
                        priority
                    />

                    <div className="relative z-10 w-full h-full flex justify-center items-center gap-24 px-12">
                        <PlayCircleIcon className='text-black w-[70px] h-[70px] opacity-50 font-light'/>
                    </div>
                </div>
                <div className='w-full flex gap-2 mt-12'>
                    <div className='w-1/2 bg-[#d9d9d9] p-4'>
                        <h1 className='font-medium text-xl mb-4'>Perks and Benefits</h1>
                        {verticalItems4.map((item, index) => (
                            <div className='flex flex-col' key={index}>
                                <div className='flex items-center gap-4 mb-2'>
                                    {item.icon}
                                    <p className="text-gray-700 leading-relaxed text-[12px]">{item.paragraph}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>

                    <div className='w-1/2 bg-[#d9d9d9] p-4'>
                        <h1 className='font-medium text-xl mb-4'>Our Hiring Process: Transparent & Respectful</h1>
                        {verticalItems3.map((item, index) => (
                            <div className='flex flex-col' key={index}>
                                <div className='flex items-center gap-4 mb-2'>
                                    {item.icon}
                                    <h2 className="text-[12px] font-medium">{item.heading}</h2>
                                    <p className="text-gray-700 leading-relaxed text-[12px]">{item.paragraph}</p>
                                </div>
                            </div>
                        ))}
                        <p className='italic text-[12px]'>You’ll always hear back from us. Every application gets a response.</p>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-center gap-6 mt-12'>
                <CallToAction3
                    heading="Your Next Move"
                    description="Are you ready to grow faster than you ever thought possible? Ready to work with a team that cares about your story, not just your output? Let’s build something extraordinary together."
                    buttons={[{ title: "APPLY NOW", href: "/contact" }, { title: "SEND US YOUR STORY", href: "/contact" }]}
                />
                <CallToAction3
                    heading="Not looking, but know someone who is?"
                    description="and if we hire them, you get a thank you from us."
                    buttons={[{ title: "REFER A FRIEND", href: "/contact" }]}
                />
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Careers