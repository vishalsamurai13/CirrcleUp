/* eslint-disable react/no-unescaped-entities */
"use client";

import { ArrowRight, ChevronDown, ChevronRight, Globe, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close any open dropdowns when toggling mobile menu
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Capabilities', id: 'capabilities', component: <Capabilities /> },
    { name: 'Case Studies', id: 'articles', component: <Articles /> },
    { name: 'About', id: 'about', component: <About /> },
    { name: 'Contact Us', id: 'careers', component: <Careers /> },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      {/* Top Container */}
      <div className='w-full max-w-[1080px] h-[90px] flex flex-row items-center justify-between pr-4 lg:px-0'>
        {/* Left Container - Logo */}
        <Link href='/'>
          <div>
            <Image
              src="/logo/black_text_logo.png"
              alt='black_logo'
              width={200}
              height={60}
              className='w-[150px] lg:w-[200px]'
            />
          </div>
        </Link>

        {/* Desktop Nav Links - Hidden on mobile */}
        <div className='hidden lg:flex items-center gap-8'>
          <div className='flex gap-[123px] items-center'>
            <div className='text-black text-[14px] font-bold flex gap-[40px] uppercase'>
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  className={`flex items-center gap-[3px] cursor-pointer transition-colors duration-200 no-underline ${
                    activeDropdown === link.id ? 'text-[#28B673]' : 'text-black'
                  }`}
                  onClick={() => handleDropdownToggle(link.id)}
                >
                  {link.name}
                  {activeDropdown === link.id ? <ChevronRight /> : <ChevronDown />}
                </div>
              ))}
            </div>
          </div>

          {/* Right Container */}
          <div className='flex space-x-8'>
            <div className='bg-black h-[30px] w-[2px] ml-10'/>
            <div className='flex items-center text-black gap-[6px]'>
              <Globe size={20} />
              <div className='flex gap-[2px] items-center'>
                <span className='text-[14px] font-bold'>EN</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className='lg:hidden text-black' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Divider */}
      <div className='hidden lg:block bg-black h-[2px] w-[1080px]'/>

      {/* Desktop Dropdown Menus */}
      <div className='hidden lg:block w-full'>
        {navLinks.map((link) => activeDropdown === link.id && (
          <div key={link.id}>{link.component}</div>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden w-full bg-white shadow-md transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-screen opacity-100 overflow-auto' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className='flex flex-col px-4 py-4'>
          {navLinks.map((link) => (
            <div key={link.id} className='py-2 border-b border-gray-100 last:border-b-0'>
              <div
                className='flex items-center justify-between text-black text-[14px] font-bold uppercase cursor-pointer no-underline py-2'
                onClick={() => handleDropdownToggle(link.id)}
              >
                {link.name}
                {activeDropdown === link.id ? <ChevronRight size={20} /> : <ChevronDown size={20} />}
              </div>
              {activeDropdown === link.id && (
                <div className='mt-2 pb-2'>{link.component}</div>
              )}
            </div>
          ))}
          
          {/* Mobile Language Selector */}
          <div className='flex items-center gap-2 py-4 text-black border-t border-gray-200 mt-2'>
            <Globe size={20} />
            <span className='text-[14px] font-bold'>EN</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {(activeDropdown || isMobileMenuOpen) && (
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Capabilities', id: 'capabilities', component: <Capabilities /> },
    { name: 'Case Studies', id: 'articles', component: <Articles /> },
    { name: 'About', id: 'about', component: <About /> },
    { name: 'Contact Us', id: 'careers', component: <Careers /> },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-md' : 'bg-transparent'
    }`}>
      {/* Top Container */}
      <div className='w-full max-w-[1080px] h-[90px] flex flex-row items-center justify-between pr-4 lg:px-0'>
        {/* Left Container - Logo */}
        <Link href='/'>
          <div>
            <Image
              src="/logo/white_text_logo.png"
              alt='white_logo'
              width={200}
              height={60}
              className='w-[150px] lg:w-[200px]'
            />
          </div>
        </Link>

        {/* Desktop Nav Links - Hidden on mobile */}
        <div className='hidden lg:flex items-center gap-8'>
          <div className='flex gap-[123px] items-center'>
            <div className='text-white text-[14px] font-bold flex gap-[40px] uppercase'>
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  className={`flex items-center gap-[3px] cursor-pointer transition-colors duration-200 no-underline ${
                    activeDropdown === link.id ? 'text-[#28B673]' : 'text-white'
                  }`}
                  onClick={() => handleDropdownToggle(link.id)}
                >
                  {link.name}
                  {activeDropdown === link.id ? <ChevronRight /> : <ChevronDown />}
                </div>
              ))}
            </div>
          </div>

          {/* Right Container */}
          <div className='flex space-x-8'>
            <div className='bg-white h-[30px] w-[2px] ml-10'/>
            <div className='flex items-center text-white gap-[6px]'>
              <Globe size={20} />
              <div className='flex gap-[2px] items-center'>
                <span className='text-[14px] font-bold'>EN</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className='lg:hidden text-white' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Divider */}
      <div className='hidden lg:block bg-white h-[2px] w-[1080px]'/>

      {/* Desktop Dropdown Menus */}
      <div className='hidden lg:block w-full'>
        {navLinks.map((link) => activeDropdown === link.id && (
          <div key={link.id}>{link.component}</div>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden w-full bg-black shadow-md transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-screen opacity-100 overflow-auto' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className='flex flex-col px-4 py-4'>
          {navLinks.map((link) => (
            <div key={link.id} className='py-2 border-b border-gray-700 last:border-b-0'>
              <div
                className='flex items-center justify-between text-white text-[14px] font-bold uppercase cursor-pointer no-underline py-2'
                onClick={() => handleDropdownToggle(link.id)}
              >
                {link.name}
                {activeDropdown === link.id ? <ChevronRight size={20} /> : <ChevronDown size={20} />}
              </div>
              {activeDropdown === link.id && (
                <div className='mt-2 pb-2'>{link.component}</div>
              )}
            </div>
          ))}
          
          {/* Mobile Language Selector */}
          <div className='flex items-center gap-2 py-4 text-white border-t border-gray-700 mt-2'>
            <Globe size={20} />
            <span className='text-[14px] font-bold'>EN</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {(activeDropdown || isMobileMenuOpen) && (
        <div 
          className='fixed inset-0 bg-transparent z-[-1]' 
          onClick={closeAllDropdowns}
        />
      )}
    </div>
  )
}

export const Capabilities = () => {
  const subNavLinks = [
    {
      name: 'Search',
      id: 'search',
      links: [
        { href: '/Capabilities/Search/BoardSearch', label: 'Board Search' },
        { href: '/Capabilities/Search/CeoSearch', label: 'CEO Search' },
        { href: '/Capabilities/Search/ExecutiveSearch', label: 'Executive Search' },
      ],
    },
    {
      name: 'Succession',
      id: 'succession',
      links: [
        { href: '/Capabilities/Succession/BoardSuccession', label: 'Board Succession' },
        { href: '/Capabilities/Succession/CeoSuccession', label: 'CEO Succession' },
        { href: '/Capabilities/Succession/CsuiteSuccession', label: 'C-Suite Succession' },
      ],
    },
    {
      name: 'Performance',
      id: 'performance',
      links: [
        { href: '/Capabilities/Performance/A&B', label: 'Assessment & Benchmarking' },
        { href: '/Capabilities/Performance/CeoTransistion', label: 'CEO Transitions' },
        { href: '/Capabilities/Performance/Leadership', label: 'Development & Transitions' },
        { href: '/Capabilities/Performance/TeamEffectiveness', label: 'Team Effectiveness' },
      ],
    },
    {
      name: 'Accelerators',
      id: 'accelerators',
      links: [
        { href: '/Capabilities/Accelerators/ExecutiveMentoring', label: 'Executive Mentoring' },
      ],
    },
    {
      name: 'Transformation',
      id: 'transformation',
      links: [
        { href: '/Capabilities/Transformation/I&C', label: 'Inclusion & Culture' },
        { href: '/Capabilities/Transformation/Sustainability', label: 'Sustainability' },
      ],
    },
  ];

  return (
    <div className='w-full h-auto lg:h-[652px] flex z-10 shadow-lg animate-fadeIn'>
      <div className='bg-[#dddddd] w-full lg:w-6/8'>
        <div className='ml-4 lg:ml-[285px] mt-2 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-8 lg:space-y-12'>
          {subNavLinks.map((subNav) => (
            <div key={subNav.id} className='flex flex-col gap-4 text-black max-w-[190px]'>
              <Link href={`/Capabilities/${subNav.name}`} className='text-[26px] hover:text-[#28B673] transition-colors duration-200 no-underline'>
                <h1 className='font-light'>{subNav.name}</h1>
              </Link>
              <ul className='flex flex-col space-y-3 text-[13px]'>
                {subNav.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='hover:text-[#28B673] transition-colors duration-200 no-underline'
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='hidden lg:block bg-[#28B673] w-2/8 p-3'>
        <h1 className='text-[46px] leading-tight font-semibold text-white'>The Science Behind C-Suite Success: Your CxOs Need This Skill</h1>
        <p className='text-[15px] text-white mt-8'>The requirements of a high-performing CxO have fundamentally shifted - it's time for a new approach</p>
        <Link href='/Capabilities/Search'>
          <ArrowRight className='text-white mt-4 w-8 h-8' />
        </Link>
      </div>
    </div>
  )
}

export const Articles = () => {
  return (
    <div className='w-full h-auto lg:h-[652px] flex z-10 shadow-lg animate-fadeIn'>
      <div className='bg-[#dddddd] w-full lg:w-6/8'>
        <div className='ml-4 lg:ml-[285px] space-y-8 lg:space-y-32 mt-2 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 p-6'>
          <div className='flex flex-col gap-4 text-black max-w-[300px]'>
            <Link href="/Articles/Article1" className='text-[26px] hover:text-[#28B673] transition-colors duration-200 no-underline'>
              <div className='flex items-center justify-between'>
                <h1 className='font-light text-[26px] text-muted-foreground'>The Silent Crisis</h1>
                <ChevronRight />
              </div>
            </Link>
          </div>
          <div className='flex flex-col gap-4 text-black max-w-[300px]'>
            <Link href="/Articles/Article2" className='text-[26px] hover:text-[#28B673] transition-colors duration-200 no-underline'>
              <div className='flex items-center justify-between'>
                <h1 className='font-light text-[26px] text-muted-foreground'>Hired or Harmed</h1>
                <ChevronRight />
              </div>
            </Link>
          </div>
          <div className='flex flex-col gap-4 text-black max-w-[300px]'>
            <Link href="/Articles/Article3" className='text-[26px] hover:text-[#28B673] transition-colors duration-200 no-underline'>
              <div className='flex items-center justify-between'>
                <h1 className='font-light text-[26px] text-muted-foreground max-w-[195px]'>The Future of Work Isn't Remote—It's Flexible</h1>
                <ChevronRight />
              </div>
            </Link>
          </div>
          <div className='flex flex-col gap-4 text-black max-w-[300px]'>
            <Link href="/Articles/Article4" className='text-[26px] hover:text-[#28B673] transition-colors duration-200 no-underline'>
              <div className='flex items-center justify-between'>
                <h1 className='font-light text-[26px] text-muted-foreground'>Beyond the CV</h1>
                <ChevronRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden lg:block bg-[#28B673] w-2/8 p-3'>
        <h1 className='text-[46px] leading-tight font-semibold text-white'>Board & CEO Advisory</h1>
        <p className='text-[15px] text-white mt-8'>Is your board ready for what is next? We help boards and CEOs face the unprecedented challenges that shape our world—from disruptive technology to shifting demographics to pressure from investors and regulators.</p>
        <Link href='/Capabilities/Search'>
          <ArrowRight className='text-white mt-4 w-8 h-8' />
        </Link>
      </div>
    </div>
  )
}

export const About = () => {
  return (
    <div className='w-full h-auto lg:h-[652px] flex z-10 shadow-lg animate-fadeIn'>
      <div className='bg-[#dddddd] w-full lg:w-6/8'>
        <div className='ml-4 lg:ml-[285px] mt-2 lg:mt-8 flex flex-col space-y-8 p-6'>
          <div className='text-black max-w-lg'>
            <Link href="/About/People" className='text-[26px] flex items-center justify-between hover:text-[#28B673] transition-colors duration-200 no-underline'>
              <h1 className='font-light'>People</h1>
              <ChevronRight />
            </Link>
          </div>
          <div className='text-black max-w-lg'>
            <Link href="/About/WhoWeAre" className='text-[26px] flex items-center justify-between hover:text-[#28B673] transition-colors duration-200 no-underline'>
              <h1 className='font-light'>Who we are</h1>
              <ChevronRight />
            </Link>
          </div>
          <div className='text-black max-w-lg'>
            <Link href="/About/Careers" className='text-[26px] flex items-center justify-between hover:text-[#28B673] transition-colors duration-200 no-underline'>
              <h1 className='font-light'>Careers</h1>
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden lg:block bg-[#28B673] w-2/8 p-3'>
        <h1 className='text-[46px] leading-tight font-semibold text-white'>Consultant Directory</h1>
        <p className='text-[15px] text-white mt-8'>We share the latest CEO turnover data across listed companies globally. Each quarter, you'll find the proportion of CEO departures and appointments globally, as well as trends on CEO appointments by gender, tenure, and whether CEOs are internal or external hires.</p>
        <Link href='/Capabilities/Search'>
          <ArrowRight className='text-white mt-4 w-8 h-8' />
        </Link>
      </div>
    </div>
  )
}

export const Careers = () => {
  return (
    <div className='w-full h-auto lg:h-[652px] flex z-10 shadow-lg animate-fadeIn'>
      <div className='bg-[#dddddd] w-full lg:w-6/8'>
        <div className='ml-4 lg:ml-[285px] mt-2 lg:mt-8 flex flex-col space-y-8 p-6'>
          <div className='text-black max-w-lg'>
            <Link href="/Contact/GetInTouch" className='text-[26px] flex items-center justify-between hover:text-[#28B673] transition-colors duration-200 no-underline'>
              <h1 className='font-light'>Get in Touch</h1>
              <ChevronRight />
            </Link>
          </div>
          <div className='text-black max-w-lg'>
            <Link href="/Contact/CareerAdvance" className='text-[26px] flex items-center justify-between hover:text-[#28B673] transition-colors duration-200 no-underline'>
              <h1 className='font-light'>Advance Your Career</h1>
              <ChevronRight />
            </Link>
          </div>
          <div className='text-black max-w-lg'>
            <Link href="/Capabilities/Search" className='text-[26px] flex items-center justify-between hover:text-[#28B673] transition-colors duration-200 no-underline'>
              <h1 className='font-light'>Join the Conversation</h1>
              <ChevronRight />
            </Link>
          </div>
          <div className='text-black max-w-lg'>
            <Link href="/Contact/LocalOffice" className='text-[26px] flex items-center justify-between hover:text-[#28B673] transition-colors duration-200 no-underline'>
              <h1 className='font-light'>Find a Local Office</h1>
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden lg:block bg-[#28B673] w-2/8 p-3'>
        <h1 className='text-[46px] leading-tight font-semibold text-white'>Request for Consultation</h1>
        <p className='text-[15px] text-white mt-8'>We share the latest CEO turnover data across listed companies globally. Each quarter, you'll find the proportion of CEO departures and appointments globally, as well as trends on CEO appointments by gender, tenure, and whether CEOs are internal or external hires.</p>
        <Link href='/Capabilities/Search'>
          <ArrowRight className='text-white mt-4 w-8 h-8' />
        </Link>
      </div>
    </div>
  )
}