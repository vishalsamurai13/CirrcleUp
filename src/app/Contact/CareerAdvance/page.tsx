/* eslint-disable react/no-unescaped-entities */
 
"use client";

import { JobCard2 } from '@/components/Job'
import { Footer } from '@/components/layout/Footer'
import { WhiteNavbar } from '@/components/layout/Navbar'
import { Pagination } from '@/components/layout/Pagination'
import { MapPin, Search, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

import React, { useState } from 'react'

const CareerAdvance = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [expandedFilters, setExpandedFilters] = useState({
        experience: true,
        location: true,
        jobType: true,
        skills: false
    });
    
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
    ];

    const toggleFilterExpansion = (filterName: keyof typeof expandedFilters) => {
        setExpandedFilters(prev => ({
            ...prev,
            [filterName]: !prev[filterName]
        }));
    };

    const FilterSection = ({ isMobile = false }) => (
        <div className={`${isMobile ? 'w-full' : 'w-80'} bg-white ${isMobile ? '' : 'border border-gray-200 rounded-lg p-6'}`}>
            <h3 className="text-xl font-bold mb-6">Filters</h3>
            
            {/* Experience Level Filter */}
            <div className="mb-6">
                <div 
                    className="flex items-center justify-between cursor-pointer mb-3"
                    onClick={() => toggleFilterExpansion('experience')}
                >
                    <h4 className="font-semibold text-gray-800">Experience Level</h4>
                    {expandedFilters.experience ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
                {expandedFilters.experience && (
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Entry Level (0-2 Years)</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Mid Level (3-5 Years)</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Senior Level (5+ Years)</span>
                        </label>
                    </div>
                )}
            </div>

            {/* Location Filter */}
            <div className="mb-6">
                <div 
                    className="flex items-center justify-between cursor-pointer mb-3"
                    onClick={() => toggleFilterExpansion('location')}
                >
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    {expandedFilters.location ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
                {expandedFilters.location && (
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Remote</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Mumbai</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Delhi</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Bangalore</span>
                        </label>
                    </div>
                )}
            </div>

            {/* Job Type Filter */}
            <div className="mb-6">
                <div 
                    className="flex items-center justify-between cursor-pointer mb-3"
                    onClick={() => toggleFilterExpansion('jobType')}
                >
                    <h4 className="font-semibold text-gray-800">Job Type</h4>
                    {expandedFilters.jobType ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
                {expandedFilters.jobType && (
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Full Time</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Part Time</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Contract</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Internship</span>
                        </label>
                    </div>
                )}
            </div>

            {/* Skills Filter */}
            <div className="mb-6">
                <div 
                    className="flex items-center justify-between cursor-pointer mb-3"
                    onClick={() => toggleFilterExpansion('skills')}
                >
                    <h4 className="font-semibold text-gray-800">Skills</h4>
                    {expandedFilters.skills ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
                {expandedFilters.skills && (
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">JavaScript</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">React</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Node.js</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Python</span>
                        </label>
                    </div>
                )}
            </div>

            {/* Apply Filters Button */}
            <button className="w-full bg-[#28B673] text-white py-2 px-4 rounded-md font-medium">
                Apply Filters
            </button>
        </div>
    );

    // Mobile Filter Modal
    const MobileFilterModal = () => (
        <div className={`fixed inset-0 z-50 transition-all duration-300 ${showMobileFilters ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileFilters(false)} />
            <div className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white transition-transform duration-300 ${showMobileFilters ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 h-full overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-[10px]">Apply Your Dedicated Filters from below</h3>
                        <button 
                            onClick={() => setShowMobileFilters(false)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <FilterSection isMobile={true} />
                </div>
            </div>
        </div>
    );

    return (
        <div className='text-black bg-white min-h-screen overflow-x-hidden'>
            <div className='relative lg:pt-[50px] pt-[80px] h-[500px] lg:h-[600px] w-full'>
        
                {/* Background Image */}
                <div className='absolute inset-0 z-0'>
                    <Image
                        src="/board_ceo.jpg"
                        alt="Leadership background"
                        fill
                        className='object-cover'
                        priority
                    />
                    {/* Optional overlay for better text readability */}
                    <div className='absolute inset-0 bg-black/60'></div>
                </div>

                <WhiteNavbar />
                
                {/* Content Overlay */}
                <div className='relative z-10 flex flex-col justify-center items-center gap-6 h-full lg:ml-[285px] lg:mr-[285px] lg:px-16 px-4 lg:pt-0'>
                    <div className='max-w-4xl space-y-4 lg:space-y-6 flex flex-col items-center justify-center'>
                        <h2 className='font-bold text-[14px] lg:text-[18px] text-white'>
                            Find the career of your dreams
                        </h2>
                        <h1 className='font-bold text-center text-[35px] lg:text-[46px] leading-[40px] text-white'>
                            We're more than just a workplace.
                        </h1>
                        <p className='text-white text-center text-[14px] lg:text-[18px] font-medium'>We know that finding a meaningful and rewarding job can be a long journey. Our goal is to make that process as easy as possible for you, and to create a work environment that's satisfying - one where you'll look forward to coming to every day. Start your journey with us by browsing available jobs.</p>
                    </div>
                    <div className='border border-white px-6 py-2 bg-[#28B673] text-white rounded-md mt-4 cursor-pointer font-medium text-[14px]'>
                        View Openings
                    </div>
                </div>
            </div>

            <div className='lg:pt-[50px] pt-[20px] w-full h-full'>
                <div className='lg:ml-[285px] lg:mr-[285px] lg:p-16 px-4 py-10'>
                    
                    {/* Main Content Container */}
                    <div className='flex lg:flex-row flex-col lg:gap-8 gap-8'>
                        
                        {/* Left Section - Join Us */}
                        <div className='flex-1 lg:max-w-2xl'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <h1 className='text-[30px] font-bold'>Join Us</h1>
                                        <h2 className='text-gray-500'>Current Openings</h2>
                                    </div>
                                    {/* Mobile Filter Button */}
                                    <button 
                                        className='lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md'
                                        onClick={() => setShowMobileFilters(true)}
                                    >
                                        <Filter className='w-4 h-4' />
                                        <span className='text-sm'>Filters</span>
                                    </button>
                                </div>
                                
                                <div className='flex flex-col lg:flex-row lg:items-center gap-4 mt-4'>
                                    <div className='flex flex-col gap-1'>
                                        <div className='relative'>
                                            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                                            <input 
                                                type="text" 
                                                placeholder="Job Title or Skills" 
                                                className='w-full border border-gray-300 rounded-md p-2 pl-10 text-sm h-10 focus:outline-[#28B673]' 
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <div className='relative'>
                                            <MapPin className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                                            <input 
                                                type="text" 
                                                placeholder="City, State/Province or Country" 
                                                className='w-full lg:min-w-[300px] border border-gray-300 rounded-md p-2 pl-10 text-sm h-10 focus:outline-[#28B673]' 
                                            />
                                        </div>
                                    </div>
                                    <div className='mt-6 lg:mt-0'>
                                        <button className='bg-[#28B673] text-white p-2 rounded-md w-full h-10 flex items-center justify-center gap-3 cursor-pointer'><Search className='w-4 h-4'/> Search</button>
                                    </div>        
                                </div>

                                <div className='border shadow-lg border-gray-200 w-full mt-4 ' />
                            </div>

                            {/* Job Cards */}
                            <div className='flex flex-col gap-8 mt-8'>
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

                            {/* Pagination */}
                            <div className='mt-8'>
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                    siblingCount={1}
                                    className="my-4"
                                />
                            </div>
                        </div>

                        {/* Right Section - Desktop Filters */}
                        <div className='hidden lg:block lg:w-80 flex-shrink-0'>
                            <div className='sticky top-6'>
                                <FilterSection />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Modal */}
            <MobileFilterModal />

            <Footer />
        </div>
    )
}

export default CareerAdvance;