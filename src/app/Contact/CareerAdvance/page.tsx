"use client";

import { JobCard2 } from '@/components/Job'
import { Footer } from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { Pagination } from '@/components/layout/Pagination'

import React, { useState } from 'react'

const CareerAdvance = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    // Sample job data - you can replace this with actual data from API/database
    const jobData = [
        {
            id: "17892102",
            title: "Recruitment Consultants",
            experience: "3-5 Years",
            location: "Remote",
            skills: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
            openings: 10
        },
        {
            id: "17892103",
            title: "Senior Developer",
            experience: "5-7 Years",
            location: "Mumbai",
            skills: ['React', 'TypeScript', 'Next.js', 'PostgreSQL'],
            openings: 5
        },
        {
            id: "17892104",
            title: "Product Manager",
            experience: "4-6 Years",
            location: "Bangalore",
            skills: ['Product Strategy', 'Agile', 'Data Analysis', 'Leadership'],
            openings: 3
        },
        {
            id: "17893105",
            title: "UI/UX Designer",
            experience: "2-4 Years",
            location: "Remote",
            skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
            openings: 8
        },
        {
            id: "17892108",
            title: "Data Scientist",
            experience: "3-5 Years",
            location: "Delhi",
            skills: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
            openings: 6
        }
    ];

    return (
        <div className='text-black bg-white min-h-screen overflow-x-hidden'>
            <Navbar />
            <div className='lg:pt-[120px] pt-[80px] w-full h-full'>
                <div className='lg:ml-[285px] lg:mr-[285px] lg:p-16 px-4 py-10 flex flex-col gap-8 lg:gap-12'>

                    <h1 className='text-[40px] lg:text-[60px] leading-[50px] text-[#28B673] font-medium'>
                        Open Roles
                    </h1>

                    <p>Discover all Job Openings in our company →</p>

                    <div className='flex flex-col gap-8 mt-6'>
                        {jobData.map((job) => (
                            <JobCard2
                                key={job.id}
                                openings={job.openings}
                                jobId={job.id}
                                title={job.title}
                                experience={job.experience}
                                location={job.location}
                                skills={job.skills}
                                applyLink={`/Contact/CareerAdvance/${job.id}/apply`}
                                viewLink={`/Contact/CareerAdvance/${job.id}`}
                            />
                        ))}
                    </div>

                    <div>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                            siblingCount={1}
                            className="my-4"
                        />
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CareerAdvance;