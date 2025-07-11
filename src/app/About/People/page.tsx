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

            <div className='w-full ml-[285px] mr-[285px] p-16'>
                <h1 className='text-[67px] leading-[70px] text-[#28B673] font-medium'>People</h1>
                <h2 className='text-[28px] font-bold ml-1 leading-[70px]'>Leadership</h2>
                <p className='text-[16px]'>“The Story Behind Every Decision”</p>
            </div>

            <div className='h-1/2 bg-gray-100'>
                <div className='ml-[285px] mr-[285px] pr-16 pl-16 py-24'>
                    <p className='text-[23px] font-medium'>
                        Ever wondered who’s really at the helm? At Cirrcle Up, our leadership team isn’t just a list of names and faces—they’re a mix of builders, dreamers, and relentless doers.
                        <br /> <br />
                        Walk into a meeting with us and you’ll see: these are leaders who’ve rolled up their sleeves in every kind of market, not just talked about it.
                        <br /> <br />
                        We believe in radical transparency. Want to know who’s driving your search or leading your project? Here’s your answer.
                    </p>
                </div>
            </div>

            <div className='w-full ml-[285px] mr-[285px] p-16 py-24 flex flex-col gap-12'>
                <div className='flex gap-8 items-center max-w-[890px]'>
                    <div className='max-w-[445px]'>
                        <Image 
                        src='/people3.png' 
                        alt='Artboard 1' 
                        className='object-cover relative'
                        width={438} 
                        height={304}
                        /> 
                    </div>
                    <div className='max-w-[420px]'>
                        <h2 className='text-[28px] font-semibold'>50+ years of combined leadership experience</h2>
                    </div>
                </div>

                <div className='flex gap-8 items-center max-w-[890px]'>
                    <div className='max-w-[420px]'>
                        <h2 className='text-[28px] font-semibold'>5 industries led by founders before Cirrcle Up even started</h2>
                    </div>
                    <div className='max-w-[445px]'>
                        <Image 
                        src='/people2.png' 
                        alt='Artboard 1' 
                        className='object-cover relative'
                        width={438} 
                        height={304}
                        /> 
                    </div>
                </div>

                <div className='flex gap-8 items-center max-w-[890px]'>
                    <div className='max-w-[445px]'>
                        <Image 
                        src='/people1.png' 
                        alt='Artboard 1' 
                        className='object-cover relative'
                        width={438} 
                        height={304}
                        /> 
                    </div>
                    <div className='max-w-[420px]'>
                        <h2 className='text-[28px] font-semibold'>2 leaders who’ve actually started their own companies (and failed at least once—just the way we like it!)</h2>
                    </div>
                </div>
            </div>

            <div className='w-full px-16 bg-gray-100'>
                <div className='ml-[285px] mr-[285px] py-10'>
                    <h1 className='font-light text-[30px]'>Meet the Minds:</h1>
                    <p className='text-[22px] mt-4'>Each leader’s profile isn’t a “bio”—it’s a 3-minute read on their biggest failure, favorite client success story, and the boldest decision they made last year.</p>
                    
                    <div className='relative w-full h-[300px] overflow-hidden text-white mt-8 cursor-pointer'>
                        <Image 
                          src='/video.png'
                          alt='video'
                          fill
                          className="object-cover object-center z-10"
                          priority
                        />

                        <div className="relative z-10 w-full h-full flex justify-center items-center gap-24 px-12">
                            <PlayCircleIcon className='text-black w-[70px] h-[70px] opacity-50 font-light'/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='w-full px-16'>
                <div className='ml-[285px] mr-[285px] py-10 flex flex-col items-center'>
                    
                    <div className='relative w-full h-[200px] overflow-hidden text-white mt-8'>
                        <Image 
                          src='/cta3-bg.png'
                          alt='video'
                          fill
                          className="object-cover object-center z-10"
                          priority
                        />

                        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-4 px-12">
                            <h1 className='text-[33px] font-light'>Curious who’s running the show?</h1>
                            <div className='uppercase bg-white text-black px-4 py-2 cursor-pointer font-bold hover:bg-gray-200 transition duration-300'>
                                Read their stories
                            </div>
                        </div>
                    </div>

                    <div className='w-[793px] py-5 bg-[#d9d9d9] rounded-[15px] px-5 mt-24 shadow-lg flex flex-col gap-6'>
                        <h2 className='font-semibold text-[27px]'>Quick Fact:</h2>
                        <p className='text-[#28B673] text-[20px]'>“Over 70% of our successful C-suite placements involved two or more markets—because the best talent often isn’t next door.”</p>
                    </div>
                </div>
            </div>

        </div>

        <Footer />
    </div>
  )
}

export default People