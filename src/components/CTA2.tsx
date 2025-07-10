import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CTAButton {
  title: string
  href: string
}

interface ConnectWithExpertsProps {
  heading: string
  description: string
  buttons: CTAButton[]
}

const ConnectWithExperts: React.FC<ConnectWithExpertsProps> = ({
  heading,
  description,
  buttons,
}) => {
  return (
    <div className="relative w-[890px] h-[307px] overflow-hidden rounded-md text-white">
      {/* Background image */}
      <Image
        src='/Cta2.png'
        alt="Background"
        fill
        className="object-cover object-center z-10"
        priority
      />

      {/* Content */}
      <div className="absolute z-20 inset-0 bg-black/50 px-12 py-10 flex flex-col justify-between">
        <div>
          <h1 className="text-[32px] mb-3 font-light">{heading}</h1>
          <p className="text-[18px] leading-[28px] max-w-[700px]">{description}</p>
        </div>

        <div className="flex gap-12 mt-6">
          {buttons.map((btn, idx) => (
            <Link key={idx} href={btn.href}>
              <div className="border-b border-white pb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide hover:opacity-80 transition cursor-pointer">
                {btn.title} <span className="text-xl">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConnectWithExperts
