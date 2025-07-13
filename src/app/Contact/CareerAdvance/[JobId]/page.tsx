"use client";

import { Footer } from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import JobDetailsComponent from '@/components/JobDetails' // Adjust path as needed
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const JobDetailsPage = () => {
    const params = useParams()
    const router = useRouter()
    const jobId = params.jobId as string

    // You can fetch job details based on jobId here
    // For now, using static data as example
    const jobData = {
        jobNumber: jobId,
        title: "Recruitment Consultants (All levels)",
        aboutTheJob: "We are hiring Recruitment Consultants with a minimum of 1 year of experience to join our dynamic team. In this role, you'll handle end-to-end recruitment, build client relationships, and source top talent across industries. We're looking for motivated individuals who thrive in fast-paced environments and are eager to grow their careers. Join us for a supportive work culture, performance-based incentives, and opportunities for professional advancement.",
        responsibilities: [
            "Manage the full recruitment lifecycle from job posting to candidate onboarding.",
            "Source and screen candidates through databases, job portals, and networking.",
            "Build and maintain strong relationships with clients to understand their hiring needs.",
            "Coordinate and schedule interviews, ensuring a smooth recruitment process.",
            "Provide regular updates and reports to clients on recruitment progress.",
            "Meet monthly/quarterly targets and contribute to team performance goals."
        ],
        requirements: [
            "Minimum 1 year of experience in recruitment or talent acquisition.",
            "Excellent communication, negotiation, and interpersonal skills.",
            "Ability to work independently and manage multiple roles simultaneously."
        ],
        benefits: [
            "Attractive performance-based incentives and bonuses.",
            "Opportunities for career growth and internal promotions.",
            "Supportive work environment with ongoing training and mentorship.",
            "Flexible work options and a healthy work-life balance."
        ],
        closingText: "This role is perfect for individuals eager to grow their career in recruitment, gain hands-on experience with real clients, and contribute to impactful hiring solutions. If you're passionate about connecting the right talent with the right opportunities and thrive in a fast-paced environment, we invite you to apply and grow with us!"
    }

    const handleApply = () => {
        // Navigate to the application form
        router.push(`/Contact/CareerAdvance/${jobData.jobNumber}/apply`);
    }

    const handleSave = () => {
        // Handle save logic
        console.log(`Saving job ${jobId}`)
        // You can save to localStorage, database, etc.
    }

    return (
        <div className='text-black bg-white min-h-screen overflow-x-hidden'>
            <Navbar />
            <div className='pt-[120px] w-full h-full'>
                {/* Back Button */}
                <div className='ml-[285px] mr-[285px] p-4'>
                    <button 
                        onClick={() => router.push(`/Contact/CareerAdvance`)}
                        className='flex items-center gap-2 text-[#28B673] hover:text-[#22a05e] transition-colors cursor-pointer'
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Back to Open Roles
                    </button>
                </div>
                
                <div className='flex justify-center items-center p-16 pt-8'>
                    <JobDetailsComponent 
                        jobNumber={jobData.jobNumber}
                        title={jobData.title}
                        aboutTheJob={jobData.aboutTheJob}
                        responsibilities={jobData.responsibilities}
                        requirements={jobData.requirements}
                        benefits={jobData.benefits}
                        closingText={jobData.closingText}
                        onApply={handleApply}
                        onSave={handleSave}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JobDetailsPage