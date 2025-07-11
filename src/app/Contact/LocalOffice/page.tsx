import { Footer } from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Image from 'next/image'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />
        <div className='pt-[120px] w-full h-full'>
            <div className='ml-[285px] mr-[285px] p-16 flex flex-col gap-12'>
                <h1 className='text-[67px] leading-[70px] text-[#28B673] font-medium'>
                    Office Locations
                </h1>
                <p className='text-[22px]'>“Every Market Has Its Own Beat—We Dance to All of Them”</p>
            </div>

            <div className='w-full bg-gray-100'>
                <div className='ml-[285px] mr-[285px] p-16 '>
                    <p className='font-medium text-[26px]'>Why do we care so much about where we work from? Because leadership is always local—no matter how global your ambitions.
                        <br /> <br/> Cirrcle Up’s offices aren’t just addresses; they’re our listening posts in the world’s most dynamic business cities.
                    </p>
                </div>
            </div>

            <div className='ml-[285px] mr-[285px] pt-16 pl-16 pr-16 mt-12'>
                <h2 className='text-[20px] mb-8'>Find us in:</h2>
                <div className='w-full flex flex-col gap-4'>
                    <div className='bg-[#FFFBFB] flex gap-4 shadow-md'>
                        <Image 
                          src='/gurgaon.png'
                          alt='Artboard 1' 
                          className="object-cover relative"
                          width={400} 
                          height={300}
                        />
                        <div className='flex flex-col gap-4 p-4'>
                            <h1 className='font-medium text-[22px]'>Gurgaon</h1>
                            <p className='text-[16px]'>Where it all began—at a single desk, lots of tea, and even more hustle.</p>
                        </div>
                    </div>
                    <div className='bg-[#FFFBFB] flex gap-4 shadow-md'>
                        <Image 
                          src='/dubai.png'
                          alt='Artboard 1' 
                          className="object-cover relative"
                          width={400} 
                          height={300}
                        />
                        <div className='flex flex-col gap-4 p-4'>
                            <h1 className='font-medium text-[22px]'>Dubai</h1>
                            <p className='text-[16px]'>The launchpad for big ideas and cross-continental careers.</p>
                        </div>
                    </div>
                    <div className='bg-[#FFFBFB] flex gap-4 shadow-md'>
                        <Image 
                          src='/cities.png'
                          alt='Artboard 1' 
                          className="object-cover relative"
                          width={400} 
                          height={300}
                        />
                        <div className='flex flex-col gap-4 p-4'>
                            <h1 className='font-medium text-[22px]'>…and counting</h1>
                            <p className='text-[16px]'>If there’s a market we don’t serve yet, we’re probably working on it.</p>
                        </div>
                    </div>
                </div>
                <div className='relative w-full h-[200px] overflow-hidden text-white mt-32'>
                    <Image 
                        src='/cta3-bg.png'
                        alt='video'
                        fill
                        className="object-cover object-center z-10"
                        priority
                    />

                    <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-4 px-12">
                        <h1 className='text-[33px] font-light'>Looking for us in your city—or want us to be?</h1>
                        <div className='uppercase bg-white text-black px-4 py-2 cursor-pointer font-bold hover:bg-gray-200 transition duration-300'>
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