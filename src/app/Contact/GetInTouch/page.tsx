import Form from '@/components/Form'
import { Footer } from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />
        <div className='pt-[120px] w-full h-full'>
            <div className='ml-[285px] mr-[285px] p-16 flex flex-col gap-12'>
                <h1 className='text-[67px] leading-[70px] text-[#28B673] font-medium'>
                    Request for Consultation
                </h1>
                <p>Thank you for your interest. Please tell us about your business needs so we can connect you with one of our expert consultants.</p>
                <p>Would you like to share your CV? Submit it <span className='font-medium underline cursor-pointer'>here </span>for consideration.</p>
                
            </div>
            <Form />
            
        </div>
        <Footer />
    </div>
  )
}

export default GetInTouch