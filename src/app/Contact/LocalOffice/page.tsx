/* eslint-disable react/no-unescaped-entities */
import { Footer } from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Image from 'next/image'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />
        <div className='pt-[120px] w-full h-full'>
            {/* Hero Section */}
            <div className='px-4 lg:ml-[285px] lg:mr-[285px] lg:p-16 py-8 flex flex-col gap-8 lg:gap-12'>
                <h1 className='text-[30px] lg:text-[60px] leading-tight lg:leading-[70px] text-[#28B673] font-medium'>
                    Office Locations
                </h1>
                <p className='text-[15px] lg:text-base leading-relaxed'>
                    "Every Market Has Its Own Beat—We Dance to All of Them"
                </p>
            </div>

            {/* Mission Statement */}
            <div className='w-full bg-gray-100'>
                <div className='px-4 lg:ml-[285px] lg:mr-[285px] lg:p-16 py-8'>
                    <p className='font-medium text-[16px] lg:text-[20px] leading-relaxed'>
                        Why do we care so much about where we work from? Because leadership is always local—no matter how global your ambitions.
                        <br /> <br/> 
                        Cirrcle Up's offices aren't just addresses; they're our listening posts in the world's most dynamic business cities.
                    </p>
                </div>
            </div>

            {/* Locations Section */}
            <div className='px-4 lg:ml-[285px] lg:mr-[285px] lg:pt-16 lg:pl-16 lg:pr-16 py-8 mt-8 lg:mt-12'>
                <h2 className='text-lg lg:text-[20px] mb-6 lg:mb-8'>Find us in:</h2>
                <div className='w-full flex flex-col gap-6 lg:gap-4'>
                    {/* Gurgaon */}
                    <div className='bg-[#FFFBFB] flex flex-col lg:flex-row gap-4 shadow-md rounded-lg lg:rounded-none overflow-hidden lg:max-h-[140px]'>
                        <div className='w-full lg:w-1/3 flex-shrink-0'>
                            <Image 
                              src='/gurgaon.jpg'
                              alt='Gurgaon office location' 
                              className="object-cover relative w-full h-48 lg:h-full"
                              width={400} 
                              height={300}
                            />
                        </div>
                        <div className='flex flex-col gap-3 lg:gap-4 p-4'>
                            <h1 className='font-medium text-xl lg:text-[22px]'>Gurgaon</h1>
                            <p className='text-sm lg:text-[16px] leading-relaxed'>
                                Where it all began—at a single desk, lots of tea, and even more hustle.
                            </p>
                        </div>
                    </div>
                    
                    {/* Dubai */}
                    <div className='bg-[#FFFBFB] flex flex-col lg:flex-row gap-4 shadow-md rounded-lg lg:rounded-none overflow-hidden lg:max-h-[140px]'>
                        <div className='w-full lg:w-1/3 flex-shrink-0'>
                            <Image 
                              src='/dubai.webp'
                              alt='Dubai office location' 
                              className="object-cover relative w-full h-48 lg:h-full"
                              width={400} 
                              height={300}
                            />
                        </div>
                        <div className='flex flex-col gap-3 lg:gap-4 p-4'>
                            <h1 className='font-medium text-xl lg:text-[22px]'>Dubai</h1>
                            <p className='text-sm lg:text-[16px] leading-relaxed'>
                                The launchpad for big ideas and cross-continental careers.
                            </p>
                        </div>
                    </div>
                    
                    {/* Future Locations */}
                    <div className='bg-[#FFFBFB] flex flex-col lg:flex-row gap-4 shadow-md rounded-lg lg:rounded-none overflow-hidden lg:max-h-[140px]'>
                        <div className='w-full lg:w-1/3 flex-shrink-0'>
                            <Image 
                              src='/cities.jpg'
                              alt='Future office locations' 
                              className="object-cover relative w-full h-48 lg:h-full"
                              width={400} 
                              height={300}
                            />
                        </div>
                        <div className='flex flex-col gap-3 lg:gap-4 p-4'>
                            <h1 className='font-medium text-xl lg:text-[22px]'>…and counting</h1>
                            <p className='text-sm lg:text-[16px] leading-relaxed'>
                                If there's a market we don't serve yet, we're probably working on it.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* CTA Banner */}
                <div className='relative w-full h-[180px] lg:h-[200px] overflow-hidden text-white mt-16 lg:mt-32 rounded-lg lg:rounded-none'>
                    <Image 
                        src='/cta3-bg.png'
                        alt='Contact us banner'
                        fill
                        className="object-cover object-center z-10"
                        priority
                    />

                    <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-4 px-4 lg:px-12">
                        <h1 className='text-xl lg:text-[33px] font-light text-center leading-tight'>
                            Looking for us in your city—or want us to be?
                        </h1>
                        <div className='uppercase bg-white text-black px-4 py-2 cursor-pointer font-bold hover:bg-gray-200 transition duration-300 text-xs lg:text-sm text-center'>
                            ADD LOCATION FOR BOTH THE OFFICES
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default GetInTouch