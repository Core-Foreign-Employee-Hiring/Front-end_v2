import { Dispatch, SetStateAction, useState } from 'react'
import { GrayStarIcon, StarIcon } from '@/assets/svgComponents'

export default function StarRating({
  initialRating = 0,
  maxRating = 5,
  rating,
  setRating,
}: {
  initialRating?: number
  maxRating?: number
  rating: number
  setRating: Dispatch<SetStateAction<number>>
}) {
  const [hoverRating, setHoverRating] = useState(0)

  const handleStarClick = (starIndex: number) => {
    const newRating = starIndex + 1
    setRating(newRating)
  }

  const handleStarHover = (starIndex: number) => {
    setHoverRating(starIndex + 1)
  }

  const handleMouseLeave = () => {
    setHoverRating(0)
  }

  const displayRating = hoverRating || rating

  return (
    <section className="flex flex-col gap-y-2">
      <div className="flex items-center gap-x-1" onMouseLeave={handleMouseLeave}>
        {Array.from({ length: maxRating }, (_, index) => {
          const isActive = index < displayRating

          return (
            <div
              key={index}
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => handleStarClick(index)}
              onMouseEnter={() => handleStarHover(index)}
            >
              {isActive ? (
                <StarIcon width={28} height={27} />
              ) : (
                <div className="mx-[1.5px]">
                  <GrayStarIcon width={25} height={24} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
