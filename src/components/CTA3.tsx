import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface CTAButton {
  title: string
  href: string
}

interface CallToActionProps {
  heading: string
  description: string
  buttons: CTAButton[]
  className?: string
}

const CallToAction3: React.FC<CallToActionProps> = ({
  heading,
  description,
  buttons,
  className = '',
}) => {
  const validButtons = buttons.slice(0, 3)

  return (
    <div
      className={`relative w-full lg:w-[950px] lg:h-[315px] overflow-hidden text-white ${className}`}
    >
      {/* Background image */}
      <Image
        src='/cta3-bg.png'
        alt="Background"
        fill
        className="object-cover object-center z-10"
        priority
      />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 lg:px-12 px-4 py-5">
        {/* Heading & description */}
        <div className="mb-8 flex flex-col">
          <h1 className="text-[24px] lg:text-[28px] font-medium mb-6">{heading}</h1>
          <p className="text-[14px] lg:text-[16px] max-w-[500px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Buttons (stacked) */}
        <div className="flex flex-col gap-4 lg:gap-12 max-w-[400px]">
          {validButtons.map((button, index) => (
            <Link key={index} href={button.href}>
              <button className="bg-white text-black font-bold text-[12px] w-[250px] py-3 px-4 uppercase cursor-pointer tracking-wide hover:bg-gray-200 transition duration-300">
                {button.title}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CallToAction3
