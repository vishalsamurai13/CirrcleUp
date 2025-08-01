import Form from '@/components/Form'
import { Footer } from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />
        <div className='lg:pt-[120px] pt-[80px] w-full h-full pb-20 lg:pb-0'>
            <div className='px-4 lg:ml-[285px] lg:mr-[285px] lg:p-16 py-8 flex flex-col gap-8 lg:gap-12'>
                <h1 className='text-[30px] lg:text-[60px] leading-tight lg:leading-[70px] text-[#28B673] font-medium'>
                    Request for Consultation
                </h1>
                <p className='text-[15px] lg:text-base leading-relaxed'>
                    Thank you for your interest. Please tell us about your business needs so we can connect you with one of our expert consultants.
                </p>
                <p className='text-[15px] lg:text-base leading-relaxed'>
                    Would you like to share your CV? Submit it <span className='font-medium underline cursor-pointer'>here </span>for consideration.
                </p>
            </div>
            <Form />
        </div>
        <Footer />
    </div>
  )
}

export default GetInTouch