/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Navbar from '@/components/layout/Navbar'
import JobApplicationForm from '@/components/JobApplicationForm' // Adjust path as needed
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const JobApplicationPage = () => {
    const params = useParams()
    const router = useRouter()
    const jobId = params.jobId as string

    // You can fetch job details based on jobId here
    // For now, using static data as example
    const getJobDataRecord = (jobId: string) => {
        const jobsData: Record<string, { title: string; department: string; type: string }> = {
            "17892102": {
                title: "Recruitment Consultants (All levels)",
                department: "HR",
                type: "Full-time"
            },
            "17892103": {
                title: "Senior Developer",
                department: "Engineering",
                type: "Full-time"
            },
            "17892104": {
                title: "Product Manager",
                department: "Product",
                type: "Full-time"
            },
            "17892105": {
                title: "UI/UX Designer",
                department: "Design",
                type: "Full-time"
            },
            "17892106": {
                title: "Data Scientist",
                department: "Analytics",
                type: "Full-time"
            }
        };

        return jobsData[jobId] || {
            title: "Unknown Position",
            department: "Unknown",
            type: "Unknown"
        };
    };

    const jobData = getJobDataRecord(jobId);

    const handleFormSubmit = (formData: any) => {
        console.log("Application submitted:", formData);
        // Here you would typically:
        // 1. Send the data to your backend API
        // 2. Show a success message
        // 3. Redirect to a thank you page
        
        // For now, just show an alert and redirect
        alert("Application submitted successfully!");
        router.push(`/Contact/CareerAdvance/${jobId}`);
    };

    return (
        <div className='text-black bg-white min-h-screen overflow-x-hidden'>
            <Navbar />
            <div className='pt-[120px] w-full h-full'>
                {/* Back Button */}
                <div className='px-4 lg:ml-[285px] lg:mr-[285px] lg:p-16 py-4'>
                    <button 
                        onClick={() => router.back()}
                        className='flex items-center gap-2 text-[#28B673] hover:text-[#22a05e] transition-colors text-sm lg:text-base'
                    >
                        <svg width="16" height="16" className='lg:w-5 lg:h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Back to Job Details
                    </button>
                </div>
                
                <div className='flex justify-center items-center px-4 py-8 lg:p-16 lg:pt-8'>
                    <JobApplicationForm 
                        jobNumber={jobId}
                        title={jobData.title}
                        onSubmit={handleFormSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default JobApplicationPage