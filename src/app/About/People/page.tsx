/* eslint-disable react/no-unescaped-entities */
import { Footer } from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { PlayCircleIcon} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const People = () => {
  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />

        <div className='pt-[120px] w-full h-full'>

            <div className='w-full lg:ml-[285px] lg:mr-[285px] lg:p-16 px-4 pb-10'>
                <h1 className='font-medium text-[35px] leading-[40px] lg:text-[46px] lg:leading-[60px]'>Driven by People, Built on Trust</h1>
                <h2 className='font-medium text-[20px] lg:text-[24px] leading-[20px] lg:leading-[40px] text-[#28B673] mt-4'>Leadership</h2>
                <p className='text-[14px] lg:text-[18px] leading-[30px] mt-2'>“The Story Behind Every Decision”</p>
            </div>

            <div className='h-1/2 bg-gray-100'>
                <div className='lg:ml-[285px] lg:mr-[285px] lg:pr-16 lg:pl-16 lg:py-24 px-4 py-5'>
                    <p className='text-[16px] lg:text-[18px] font-medium'>
                        Ever wondered who’s really at the helm? At Cirrcle Up, our leadership team isn’t just a list of names and faces—they’re a mix of builders, dreamers, and relentless doers.
                        <br /> <br />
                        Walk into a meeting with us and you’ll see: these are leaders who’ve rolled up their sleeves in every kind of market, not just talked about it.
                        <br /> <br />
                        We believe in radical transparency. Want to know who’s driving your search or leading your project? Here’s your answer.
                    </p>
                </div>
            </div>

            <div className='w-full lg:ml-[285px] lg:mr-[285px] lg:p-16 lg:py-24 flex flex-col gap-8 lg:gap-12 px-4 py-20'>
                {/* First Section */}
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 items-center max-w-[890px]'>
                    <div className='w-full lg:max-w-[445px] order-1 lg:order-1'>
                        <Image 
                        src='/people3.png' 
                        alt='Leadership team with 50+ years experience' 
                        className='object-cover relative w-full h-auto rounded-lg'
                        width={438} 
                        height={304}
                        /> 
                    </div>
                    <div className='w-full lg:max-w-[420px] order-2 lg:order-2 text-center lg:text-left'>
                        <h1 className='text-xl lg:text-[28px] font-regular leading-tight'>
                            50+ years of combined leadership experience
                        </h1>
                    </div>
                </div>

                {/* Second Section */}
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 items-center max-w-[890px]'>
                    <div className='w-full lg:max-w-[420px] order-2 lg:order-1 text-center lg:text-left'>
                        <h1 className='text-xl lg:text-[28px] font-regular leading-tight'>
                            5 industries led by founders before Cirrcle Up even started
                        </h1>
                    </div>
                    <div className='w-full lg:max-w-[445px] order-1 lg:order-2'>
                        <Image 
                        src='/people2.png' 
                        alt='Founders with multi-industry experience' 
                        className='object-cover relative w-full h-auto rounded-lg'
                        width={438} 
                        height={304}
                        /> 
                    </div>
                </div>

                {/* Third Section */}
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 items-center max-w-[890px]'>
                    <div className='w-full lg:max-w-[445px] order-1 lg:order-1'>
                        <Image 
                        src='/people1.png' 
                        alt='Experienced entrepreneurs who have learned from failure' 
                        className='object-cover relative w-full h-auto rounded-lg'
                        width={438} 
                        height={304}
                        /> 
                    </div>
                    <div className='w-full lg:max-w-[420px] order-2 lg:order-2 text-center lg:text-left'>
                        <h1 className='text-xl lg:text-[28px] font-regular leading-tight'>
                            2 leaders who&apos;ve actually started their own companies (and failed at least once—just the way we like it!)
                        </h1>
                    </div>
                </div>
            </div>

            <div className='w-full lg:px-16 bg-gray-100'>
                <div className='lg:ml-[285px] lg:mr-[285px] lg:py-10 px-4 py-8'>
                    <h1 className='text-[30px] lg:text-[40px] font-medium leading-tight'>Meet the Minds:</h1>
                    <p className='text-[14px] lg:text-[20px] mt-4 leading-relaxed'>
                        Each leader's profile isn't a "bio"—it's a 3-minute read on their biggest failure, favorite client success story, and the boldest decision they made last year.
                    </p>
                    
                    <div className='relative w-full h-[250px] lg:h-[300px] overflow-hidden text-white mt-6 lg:mt-8 cursor-pointer rounded-lg lg:rounded-none'>
                        <Image 
                        src='/video.png'
                        alt='Meet the leadership team video'
                        fill
                        className="object-cover object-center z-10"
                        priority
                        />

                        <div className="relative z-10 w-full h-full flex justify-center items-center">
                            <PlayCircleIcon className='text-black w-16 h-16 lg:w-[70px] lg:h-[70px] opacity-50 font-light'/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='w-full px-4 lg:px-16 pb-10 lg:pb-0'>
                <div className='lg:ml-[285px] lg:mr-[285px] py-8 lg:py-10 flex flex-col items-center'>
                    
                    <div className='relative w-full h-[180px] lg:h-[200px] overflow-hidden text-white mt-6 lg:mt-8 rounded-lg lg:rounded-none'>
                        <Image 
                        src='/cta3-bg.png'
                        alt='Call to action background'
                        fill
                        className="object-cover object-center z-10"
                        priority
                        />

                        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-8 px-4 lg:px-12">
                            <h1 className='text-2xl lg:text-[33px] font-light text-center leading-tight'>
                                Curious who's running the show?
                            </h1>
                            <div className='uppercase bg-white text-black px-4 py-2 cursor-pointer font-bold hover:bg-gray-200 transition duration-300 text-sm lg:text-base'>
                                Read their stories
                            </div>
                        </div>
                    </div>

                    <div className='w-full py-6 lg:py-5 border rounded-[15px] px-5 mt-12 lg:mt-24 shadow-lg flex flex-col gap-4 lg:gap-6'>
                        <h1 className=' text-xl lg:text-[27px]'>Quick Fact:</h1>
                        <p className='text-[#28B673] text-lg lg:text-[20px] leading-relaxed'>
                            "Over 70% of our successful C-suite placements involved two or more markets—because the best talent often isn't next door."
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default People