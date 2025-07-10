 
"use client";

import { ArrowRight, ChevronDown, ChevronRight, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      {/* Top Container */}
      <div className='w-[1080px] h-[90px] flex flex-row items-center gap-8'>
        {/* Left Container */}
        <div className='flex gap-[123px] items-center'>
            <Link href='/'>
              <div>
                  <Image
                  src="/logo/black_text_logo.png"
                  alt='black_logo'
                  width={200}
                  height={60}
                  />
              </div>
            </Link>
            <div className='text-black text-[14px] font-bold flex gap-[40px] uppercase'>
                <div 
                  className={`flex items-center gap-[3px] cursor-pointer transition-colors duration-200 ${
                    activeDropdown === 'capabilities' ? 'text-[#28B673]' : 'text-black'
                  }`} 
                  onClick={() => handleDropdownToggle('capabilities')}
                > 
                  Capabilities
                  {activeDropdown === 'capabilities' ? <ChevronRight /> : <ChevronDown />}
                </div>
                <div 
                  className={`flex items-center gap-[3px] cursor-pointer transition-colors duration-200 ${
                    activeDropdown === 'articles' ? 'text-[#28B673]' : 'text-black'
                  }`} 
                  onClick={() => handleDropdownToggle('articles')}
                > 
                  Case Studies
                  {activeDropdown === 'articles' ? <ChevronRight /> : <ChevronDown />}
                </div>
                <div 
                  className={`flex items-center gap-[3px] cursor-pointer transition-colors duration-200 ${
                    activeDropdown === 'about' ? 'text-[#28B673]' : 'text-black'
                  }`} 
                  onClick={() => handleDropdownToggle('about')}
                > 
                  About
                  {activeDropdown === 'about' ? <ChevronRight /> : <ChevronDown />}
                </div>
                <div 
                  className={`flex items-center gap-[3px] cursor-pointer transition-colors duration-200 ${
                    activeDropdown === 'careers' ? 'text-[#28B673]' : 'text-black'
                  }`} 
                  onClick={() => handleDropdownToggle('careers')}
                > 
                  Contact Us
                  {activeDropdown === 'careers' ? <ChevronRight /> : <ChevronDown />}
                </div>
            </div>
        </div>

        {/* Right Container */}
        <div className='flex space-x-8 '>
          <div className='bg-black h-[30px] w-[2px] ml-10'/>
          <div className='flex items-center text-black gap-[6px]'>
            <Globe />
            <div className='flex gap-[2px] items-center'>
              <span className='text-[14px] font-bold'>EN</span>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='bg-black h-[2px] w-[1080px]'/>

      {/* Dropdown Menus */}
      {activeDropdown === 'capabilities' && <Capabilities />}
      {activeDropdown === 'articles' && <Articles />}
      {activeDropdown === 'about' && <About />}
      {activeDropdown === 'careers' && <Careers />}

      {/* Overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className='fixed inset-0 bg-transparent z-[-1]' 
          onClick={closeAllDropdowns}
        />
      )}
    </div>
  )
}

export function WhiteNavbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-md' : 'bg-transparent'
    }`}>
      {/* Top Container */}
      <div className='w-[1080px] h-[90px] flex flex-row items-center gap-8'>
        {/* Left Container */}
        <div className='flex gap-[123px] items-center'>
            <Link href='/'>
              <div>
                  <Image
                  src="/logo/white_text_logo.png"
                  alt='black_logo'
                  width={200}
                  height={60}
                  />
              </div>
            </Link>
            <div className='text-white text-[14px] font-bold flex gap-[40px] uppercase'>
                <div 
                  className={`flex items-center gap-[3px] cursor-pointer transition-colors duration-200 ${
                    activeDropdown === 'capabilities' ? 'text-[#28B673]' : 'text-white'
                  }`} 
                  onClick={() => handleDropdownToggle('capabilities')}
                > 
                  Capabilities
                  {activeDropdown === 'capabilities' ? <ChevronRight /> : <ChevronDown />}
                </div>
                <div 
                  className={`flex items-center gap-[3px] cursor-pointer transition-colors duration-200 ${
                    activeDropdown === 'articles' ? 'text-[#28B673]' : 'text-white'
                  }`} 
                  onClick={() => handleDropdownToggle('articles')}
                > 
                  Case Studies
                  {activeDropdown === 'articles' ? <ChevronRight /> : <ChevronDown />}
                </div>
                <div 
                  className={`flex items-center gap-[3px] cursor-pointer transition-colors duration-200 ${
                    activeDropdown === 'about' ? 'text-[#28B673]' : 'text-white'
                  }`} 
                  onClick={() => handleDropdownToggle('about')}
                > 
                  About
                  {activeDropdown === 'about' ? <ChevronRight /> : <ChevronDown />}
                </div>
                <div 
                  className={`flex items-center gap-[3px] cursor-pointer transition-colors duration-200 ${
                    activeDropdown === 'careers' ? 'text-[#28B673]' : 'text-white'
                  }`} 
                  onClick={() => handleDropdownToggle('careers')}
                > 
                  Contact Us
                  {activeDropdown === 'careers' ? <ChevronRight /> : <ChevronDown />}
                </div>
            </div>
        </div>

        {/* Right Container */}
        <div className='flex space-x-8 '>
          <div className='bg-white h-[30px] w-[2px] ml-10'/>
          <div className='flex items-center text-white gap-[6px]'>
            <Globe />
            <div className='flex gap-[2px] items-center'>
              <span className='text-[14px] font-bold'>EN</span>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='bg-white h-[2px] w-[1080px]'/>

      {/* Dropdown Menus */}
      {activeDropdown === 'capabilities' && <Capabilities />}
      {activeDropdown === 'articles' && <Articles />}
      {activeDropdown === 'about' && <About />}
      {activeDropdown === 'careers' && <Careers />}

      {/* Overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className='fixed inset-0 bg-transparent z-[-1]' 
          onClick={closeAllDropdowns}
        />
      )}
    </div>
  )
}

export const Capabilities = () => {
  return (
    <div className='w-full h-[652px] flex z-10 shadow-lg animate-fadeIn'>
      <div className='bg-[#F2F2F2] w-6/8'>

        {/* Quick Links */}
        <div className='ml-[285px] h-full mt-8 grid grid-cols-3'>

          {/* Search */}
          <div className='flex flex-col gap-4 h-full text-black max-w-[177px]'>
            <Link href="/Capabilities/Search" className='text-[26px] font-medium'>Search</Link>
            <ul className='flex flex-col space-y-3 text-[13px]'>
              <li>
                <Link href="/Capabilities/Search/BoardSearch">Board Search</Link>
              </li>
              <li>
                <Link href="/Capabilities/Search/CeoSearch">CEO Search</Link>
              </li>
              <li>
                <Link href="/Capabilities/Search/ExecutiveSearch">Executive Search</Link>
              </li>
            </ul>
          </div>

          {/* Succession */}
          <div className='flex flex-col gap-4 h-full text-black max-w-[177px]'>
            <Link href="/Capabilities/Succession" className='text-[26px] font-medium'>Succession</Link>
            <ul className='flex flex-col space-y-3 text-[13px]'>
              <li>
                <Link href="/Capabilities/Succession/BoardSuccession">Board Succession</Link>
              </li>
              <li>
                <Link href="/Capabilities/Succession/CeoSuccession">CEO Succession</Link>
              </li>
              <li>
                <Link href="/Capabilities/Succession/CsuiteSuccession">C-Suite Succession</Link>
              </li>
            </ul>
          </div>

          {/* Performance */}
          <div className='flex flex-col gap-4 h-full text-black max-w-[190px]'>
            <Link href="/Capabilities/Performance" className='text-[26px] font-medium'>Performance</Link>
            <ul className='flex flex-col space-y-3 text-[13px]'>
              <li>
                <Link href="/Capabilities/Performance/A&B">Assessment & Benchmarking</Link>
              </li>
              <li>
                <Link href="/Capabilities/Performance/CeoTransistion">CEO Transitions</Link>
              </li>
              <li>
                <Link href="/Capabilities/Performance/Leadership">Development & Transitions</Link>
              </li>
              <li>
                <Link href="/Capabilities/Performance/TeamEffectiveness">Team Effectiveness</Link>
              </li>
            </ul>
          </div>

          {/* Accelerators */}
          <div className='flex flex-col gap-4 h-full text-black max-w-[177px]'>
            <Link href="/Capabilities/Accelerators" className='text-[26px] font-medium'>Accelerators</Link>
            <ul className='flex flex-col space-y-3 text-[13px]'>
              <li>
                <Link href="/Capabilities/Accelerators/ExecutiveMentoring">Executive Mentoring</Link>
              </li>
            </ul>
          </div>

          {/* Transformation */}
          <div className='flex flex-col gap-4 h-full text-black max-w-[177px]'>
            <Link href="/Capabilities/Transformation" className='text-[26px] font-medium'>Transformation</Link>
            <ul className='flex flex-col space-y-3 text-[13px]'>
              <li>
                <Link href="/Capabilities/Transformation/I&C">Inclusion & Culture</Link>
              </li>
              <li>
                <Link href="/Capabilities/Transformation/Sustainability">Sustainability</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className='bg-[#28B673] w-2/8 p-3'> 
        <h1 className='text-[32px] font-semibold text-white'>The Science Behind C-Suite Success: Your CxOs Need This Skill</h1>
        <p className='text-[15px] text-white'>The requirements of a high-performing CxO have fundamentally shifted - its time for a new approach</p>
        <Link href='/Capabilities/Search'>
          <ArrowRight className='text-white mt-4 w-8 h-8' />
        </Link>
      </div>
    </div>
  )
}

export const Articles = () => {
  return (
    <div className='w-full h-[652px] flex z-10 shadow-lg animate-fadeIn'>
      <div className='bg-[#F2F2F2] w-6/8'>

        {/* Quick Links */}
        <div className='ml-[285px] h-full mt-8 grid grid-cols-2'>

          {/* Article 1 */}
          <div className='flex flex-col gap-4 h-full text-black max-w-[215px]'>
            <Link href="/Capabilities/Search" className='text-[26px] font-medium space-y-8'>
              <div className='flex items-center justify-between'>Article 1 <ChevronRight /></div>
              <p className='text-[16px] text-muted-foreground'>The Silent Crisis </p>
            </Link>
          </div>

          {/* Article 2 */}
          <div className='flex flex-col gap-4 h-full text-black max-w-[215px]'>
            <Link href="/Capabilities/Search" className='text-[26px] font-medium space-y-8'>
              <div className='flex items-center justify-between'>Article 2 <ChevronRight /></div>
              <p className='text-[16px] text-muted-foreground'>Hired or Harmed  </p>
            </Link>
          </div>

          {/* Article 3 */}
          <div className='flex flex-col gap-4 h-full text-black max-w-[215px]'>
            <Link href="/Capabilities/Search" className='text-[26px] font-medium space-y-8'>
              <div className='flex items-center justify-between'>Article 3 <ChevronRight /></div>
              <p className='text-[16px] text-muted-foreground'>The Future of Work Isn&apos;t Remote—It&apos;s Flexible</p>
            </Link>
          </div>

          {/* Article 4 */}
          <div className='flex flex-col gap-4 h-full text-black max-w-[215px]'>
            <Link href="/Capabilities/Search" className='text-[26px] font-medium space-y-8'>
              <div className='flex items-center justify-between'>Article 4 <ChevronRight /></div>
              <p className='text-[16px] text-muted-foreground'>Beyond the CV</p>
            </Link>
          </div>

        </div>
      </div>

      <div className='bg-[#28B673] w-2/8 p-3'> 
        <h1 className='text-[32px] font-semibold text-white'>Board & CEO Advisory</h1>
        <p className='text-[15px] text-white'>Is your board ready for what is next? We help boards and CEOs face the unprecedented challenges that shape our world—from disruptive technology to shifting demographics to pressure from investors and regulators.</p>
        <Link href='/Capabilities/Search'>
          <ArrowRight className='text-white mt-4 w-8 h-8' />
        </Link>
      </div>
    </div>
  )
}

export const About = () => {
  return (
    <div className='w-full h-[652px] flex z-10 shadow-lg animate-fadeIn'>
      <div className='bg-[#F2F2F2] w-6/8'>

        {/* Quick Links */}
        <div className='ml-[285px] h-full mt-8 flex flex-col space-y-8'>

          {/* Article 1 */}
          <div className=' text-black max-w-lg'>
            <Link href="/Capabilities/Search" className='text-[26px] font-medium flex items-center justify-between'>
              People
              <ChevronRight />
            </Link>
          </div>

          {/* Article 2 */}
          <div className=' text-black max-w-lg'>
            <Link href="/Capabilities/Search" className='text-[26px] font-medium flex items-center justify-between'>
              Who we are
              <ChevronRight />
            </Link>
          </div>

          {/* Article 3 */}
          <div className=' text-black max-w-lg'>
            <Link href="/Capabilities/Search" className='text-[26px] font-medium flex items-center justify-between'>
              Careers
              <ChevronRight />
            </Link>
          </div>

        </div>
      </div>

      <div className='bg-[#28B673] w-2/8 p-3'> 
        <h1 className='text-[32px] font-semibold text-white'>Consultant Directory</h1>
        <p className='text-[15px] text-white'>We share the latest CEO turnover data across listed companies globally. Each quarter, you&apos;ll find the proportion of CEO departures and appointments globally, as well as trends on CEO appointments by gender, tenure, and whether CEOs are internal or external hires.</p>
        <Link href='/Capabilities/Search'>
          <ArrowRight className='text-white mt-4 w-8 h-8' />
        </Link>
      </div>
    </div>
  )
}

export const Careers = () => {
  return (
    <div className='w-full h-[652px] flex z-10 shadow-lg animate-fadeIn'>
      <div className='bg-[#F2F2F2] w-6/8'>

        {/* Quick Links */}
        <div className='ml-[285px] h-full mt-8 flex flex-col space-y-8'>

          {/* Article 1 */}
          <div className=' text-black max-w-lg'>
            <Link href="/Capabilities/Search" className='text-[26px] font-medium flex items-center justify-between'>
              Get in Touch
              <ChevronRight />
            </Link>
          </div>

          {/* Article 2 */}
          <div className=' text-black max-w-lg'>
            <Link href="/Capabilities/Search" className='text-[26px] font-medium flex items-center justify-between'>
              Advance Your Career
              <ChevronRight />
            </Link>
          </div>

          {/* Article 3 */}
          <div className=' text-black max-w-lg'>
            <Link href="/Capabilities/Search" className='text-[26px] font-medium flex items-center justify-between'>
              Join the Conversation
              <ChevronRight />
            </Link>
          </div>

          {/* Article 4 */}
          <div className=' text-black max-w-lg'>
            <Link href="/Capabilities/Search" className='text-[26px] font-medium flex items-center justify-between'>
              Find a Local Office
              <ChevronRight />
            </Link>
          </div>

        </div>
      </div>

      <div className='bg-[#28B673] w-2/8 p-3'> 
        <h1 className='text-[32px] font-semibold text-white'>Request for Consultation</h1>
        <p className='text-[15px] text-white'>We share the latest CEO turnover data across listed companies globally. Each quarter, you&apos;ll find the proportion of CEO departures and appointments globally, as well as trends on CEO appointments by gender, tenure, and whether CEOs are internal or external hires.</p>
        <Link href='/Capabilities/Search'>
          <ArrowRight className='text-white mt-4 w-8 h-8' />
        </Link>
      </div>
    </div>
  )
}