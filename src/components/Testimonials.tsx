/* eslint-disable react/no-unescaped-entities */
"use client"

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TestimonialsCarousel = () => {
  const teamMembers = [
    {
      name: "Akshay Khurana",
      image: "/AkshayKhurana.png",
      description:
        "Working with Cirrcle Up changed the way we look at hiring. They didn't just send CVs, they brought us leaders who shaped our strategy. The partnership feels less like recruitment and more like growth.",
    },
    {
      name: "Aditi Kapur",
      image: "/AditiKapur.jpg",
      description:
        "We were struggling to attract senior talent. Cirrcle Up not only found us the right candidate, they gave us insights on how to structure the role better. That's rare in this business.",
    },
    {
      name: "Tanuj Gulati",
      image: "/TanujGulati.png",
      description:
        "Every consultant talks about 'fit'. Cirrcle Up actually delivered it. The person we hired is now driving operations in a way we couldn't have imagined.",
    },
    {
      name: "Sanya Gujral",
      image: "/SanyaGujral.png",
      description:
        "Cirrcle Up has been an extension of my HR team. They understood the nuances of our industry and delivered leaders who blended into our culture almost instantly.",
    },
    {
      name: "Nirbhay Malik",
      image: "/NirbhayMalik.png",
      description:
        "Cirrcle Up's knowledge of both India and global markets is impressive. For us, they weren't just recruiters, they were advisors on how to set up and scale our India office. Exactly the kind of partner you need in a competitive environment.",
    },
  ]

  const [startIndex, setStartIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const [cardWidth, setCardWidth] = useState(320)

  useEffect(() => {
    const updateLayout = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth
        if (width < 768) {
          setVisibleCount(1)
          setCardWidth(Math.min(width - 48, 400))
        } else if (width < 1024) {
          setVisibleCount(2)
          setCardWidth(360)
        } else {
          setVisibleCount(3)
          setCardWidth(320)
        }
      }
    }

    updateLayout()
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateLayout)
      return () => window.removeEventListener("resize", updateLayout)
    }
  }, [])

  useEffect(() => {
    setStartIndex(0)
  }, [visibleCount])

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, teamMembers.length - visibleCount))
  }

  const canGoPrev = startIndex > 0
  const canGoNext = startIndex < teamMembers.length - visibleCount

  return (
    <div className="bg-[#eeeeee] pt-16 pb-80 relative z-0">
      <div className="lg:ml-[240px] lg:mr-[240px] px-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 lg:mb-16">
          <div>
            <h1 className="text-[40px] lg:text-[45px] font-light text-black text-balance">Our Testimonials</h1>
            <p className="text-[14px] lg:text-[18px] mt-3 lg:mt-6 text-black">
              Real feedback from leaders we've partnered with
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className="cursor-pointer group w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#29B573] hover:bg-[#29B573] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-300 disabled:hover:bg-transparent disabled:hover:text-gray-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className="cursor-pointer group w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#29B573] hover:bg-[#29B573] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-300 disabled:hover:bg-transparent disabled:hover:text-gray-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${startIndex * (cardWidth + (visibleCount > 1 ? 32 : 0))}px)`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: `${cardWidth}px`,
                  marginRight: visibleCount > 1 ? "32px" : "0px",
                }}
              >
                <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="text-[#29B573] mb-4 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-black text-[14px] lg:text-[16px] leading-relaxed mb-6 lg:mb-8 flex-grow text-pretty">
                    "{member.description}"
                  </blockquote>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-4 lg:pt-6 border-t border-gray-200">
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover ring-2 ring-gray-100"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black text-[14px] lg:text-[16px]">{member.name}</h3>
                      <p className="text-gray-600 text-[12px] lg:text-[14px]">Client</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8 lg:mt-12 md:hidden">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index >= startIndex && index < startIndex + visibleCount
                  ? "bg-[#29B573] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCarousel
