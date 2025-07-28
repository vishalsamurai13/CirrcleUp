/* eslint-disable react/no-unescaped-entities */
import { ArrowRight, Twitter, MessageCircle, Facebook, Youtube, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col h-[580px] md:h-[580px] items-center justify-center w-full px-4 md:px-0'>
        {/* Mobile Layout */}
        <div className='flex md:hidden flex-col w-full max-w-md space-y-8'>
            {/* Newsletter Section - Mobile */}
            <div className='flex flex-col space-y-4'>
                <h2 className='text-[14px] uppercase text-[#5C5C5C] font-medium'>SHAPE WHAT'S NEXT, RIGHT NOW</h2>
                <h1 className='text-[40px] text-[#28B673] leading-[40px] font-medium'>Sign up for Next, our exclusive leadership newsletter.</h1>
                
                {/* Email Input - Mobile */}
                <div className="flex flex-col space-y-4 mt-6">
                    <div className="relative">
                        <input 
                            className="w-full border-b-2 border-gray-300 pb-2 outline-none text-gray-700 placeholder-gray-400 bg-transparent focus:border-[#28B673] transition-colors duration-200" 
                            placeholder="Email Address: *" 
                            type="email"
                        />
                        <button className="absolute right-0 top-0 p-1 hover:scale-105 transition-transform duration-200">
                            <ArrowRight size={20} className="text-gray-600 hover:text-[#28B673] transition-colors duration-200" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Links Section - Mobile */}
            <div className='flex justify-between w-full mt-12'>
                {/* Quick Links - Mobile */}
                <div className='flex flex-col space-y-4'>
                    <h2 className='uppercase text-[14px] text-[#5C5C5C] font-medium'>QUICK LINKS</h2>
                    <div className='leading-[24px] text-[16px] font-semibold flex flex-col space-y-1'>
                        <Link href='/' className='hover:text-[#28B673] transition-colors duration-200'>People</Link>
                        <Link href='/' className='hover:text-[#28B673] transition-colors duration-200'>Who We Are</Link>
                        <Link href='/' className='hover:text-[#28B673] transition-colors duration-200'>Careers</Link>
                        <Link href='/' className='hover:text-[#28B673] transition-colors duration-200'>Newsroom</Link>
                        <Link href='/' className='hover:text-[#28B673] transition-colors duration-200'>Locations</Link>
                    </div>
                </div>

                {/* Office Info - Mobile */}
                <div className='flex flex-col space-y-4 max-w-[140px]'>
                    <h2 className='uppercase text-[14px] text-[#5C5C5C] font-medium'>OUR OFFICE</h2>
                    <p className='text-[12px] text-[#5C5C5C] leading-relaxed'>7th Floor, IndiQube, Tower B, Unitech Cyberpark, Sector 39, Gurgaon (Haryana) 122052</p>
                </div>
            </div>

            {/* Social Media Icons - Mobile */}
            <div className='flex justify-center items-center gap-4'>
                <div className='p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group'>
                    <Twitter size={20} className="text-[#1DA1F2] group-hover:text-[#0d8bd9] transition-colors duration-200" />
                </div>
                <div className='p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group'>
                    <MessageCircle size={20} className="text-[#25D366] group-hover:text-[#128C7E] transition-colors duration-200" />
                </div>
                <div className='p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group'>
                    <Facebook size={20} className="text-[#1877F2] group-hover:text-[#166fe5] transition-colors duration-200" />
                </div>
                <div className='p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group'>
                    <Youtube size={20} className="text-[#FF0000] group-hover:text-[#cc0000] transition-colors duration-200" />
                </div>
                <div className='p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group'>
                    <Linkedin size={20} className="text-[#0077B5] group-hover:text-[#005885] transition-colors duration-200" />
                </div>
            </div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className='hidden md:flex w-[1080px] px-4 justify-between'>
            {/* Left Container */}
            <div className='max-w-[137px] flex flex-col space-y-6'>
                <h2 className='uppercase text-[14px] text-[#5C5C5C] font-medium'>Quick Links</h2>
                <div className='leading-[28px] text-[19px] font-semibold flex flex-col'>
                    <Link href='/' className='hover:text-[#28B673] transition-colors duration-200'>People</Link>
                    <Link href='/' className='hover:text-[#28B673] transition-colors duration-200'>Who We Are</Link>
                    <Link href='/' className='hover:text-[#28B673] transition-colors duration-200'>Careers</Link>
                    <Link href='/' className='hover:text-[#28B673] transition-colors duration-200'>Newsroom</Link>
                    <Link href='/' className='hover:text-[#28B673] transition-colors duration-200'>Location</Link>
                </div>
            </div>

            {/* middle Container */}
            <div className='max-w-[137px] flex flex-col space-y-6 ml-18'>
                <h2 className='uppercase text-[14px] text-[#5C5C5C] font-medium'>OUR OFFICE</h2>
                <p className='text-[12px] text-[#5C5C5C] leading-relaxed'>7th Floor, IndiQube, Tower B, Unitech Cyberpark, Sector 39, Gurgaon (Haryana) 122052</p>
            </div>

            {/* right Container */}
            <div className='max-w-[313px] flex flex-col space-y-6 text-right'>
                <h2 className='text-[14px] uppercase text-[#5C5C5C] font-medium'>SHAPE WHAT'S NEXT, RIGHT NOW</h2>
                <h1 className='text-[33px] text-[#28B673] leading-[39px] font-medium'>Sign up for Next, our exclusive leadership newsletter.</h1>
            </div>
        </div>
        
        {/* Bottom Section with improved layout - Desktop Only */}
        <div className='hidden md:flex flex-row mt-12 px-4 w-[1080px] justify-between items-center'>
            
            {/* Social Media Icons */}
            <div className='flex items-center gap-4'>
                <div className='p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group'>
                    <Twitter size={20} className="text-[#1DA1F2] group-hover:text-[#0d8bd9] transition-colors duration-200" />
                </div>
                <div className='p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group'>
                    <MessageCircle size={20} className="text-[#25D366] group-hover:text-[#128C7E] transition-colors duration-200" />
                </div>
                <div className='p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group'>
                    <Facebook size={20} className="text-[#1877F2] group-hover:text-[#166fe5] transition-colors duration-200" />
                </div>
                <div className='p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group'>
                    <Youtube size={20} className="text-[#FF0000] group-hover:text-[#cc0000] transition-colors duration-200" />
                </div>
                <div className='p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group'>
                    <Linkedin size={20} className="text-[#0077B5] group-hover:text-[#005885] transition-colors duration-200" />
                </div>
            </div>

            {/* Email Subscription */}
            <div className="flex items-center bg-white rounded-full shadow-md px-6 py-3 min-w-[320px] hover:shadow-lg transition-shadow duration-300">
                <input 
                    className="flex-1 outline-none border-0 text-gray-700 placeholder-gray-400 bg-transparent" 
                    placeholder="Enter your email address" 
                    type="email"
                />
                <button className="ml-4 p-2 bg-[#28B673] hover:bg-[#239d63] rounded-full transition-all duration-200 hover:scale-105 group">
                    <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform duration-200" />
                </button>
            </div>
        </div>
    </div>
  )
}