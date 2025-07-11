"use client";

import { JobCard2 } from '@/components/Job'
import { Footer } from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { Pagination } from '@/components/layout/Pagination'

import React, { useState } from 'react'

const CareerAdvance = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

  return (
    <div className='text-black bg-white min-h-screen overflow-x-hidden'>
        <Navbar />
        <div className='pt-[120px] w-full h-full'>
            <div className='ml-[285px] mr-[285px] p-16 flex flex-col gap-12'>

                <h1 className='text-[67px] leading-[70px] text-[#28B673] font-medium'>
                    Open Roles
                </h1>

                <p>Discover all Job Openings in our company →</p>

                <div className='flex flex-col gap-8'>
                    <JobCard2
                        openings={10}
                        jobId="17892102"
                        title="Recruitment Consultants"
                        experience="3-5 Years"
                        location="Remote"
                        skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                        applyLink="#"
                        viewLink="#"
                    />
                    <JobCard2
                        openings={10}
                        jobId="17892102"
                        title="Recruitment Consultants"
                        experience="3-5 Years"
                        location="Remote"
                        skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                        applyLink="#"
                        viewLink="#"
                    />
                    <JobCard2
                        openings={10}
                        jobId="17892102"
                        title="Recruitment Consultants"
                        experience="3-5 Years"
                        location="Remote"
                        skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                        applyLink="#"
                        viewLink="#"
                    />
                    <JobCard2
                        openings={10}
                        jobId="17892102"
                        title="Recruitment Consultants"
                        experience="3-5 Years"
                        location="Remote"
                        skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                        applyLink="#"
                        viewLink="#"
                    />
                    <JobCard2
                        openings={10}
                        jobId="17892102"
                        title="Recruitment Consultants"
                        experience="3-5 Years"
                        location="Remote"
                        skills={['JavaScript', 'Node.js', 'Express.js', 'MongoDB']}
                        applyLink="#"
                        viewLink="#"
                    />
                </div>

                <div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        siblingCount={1} // optional, defaults to 1
                        className="my-4" // optional additional classes
                    />
                </div>
                
            </div>

            
        </div>
        <Footer />
    </div>
  )
}

export default CareerAdvance;