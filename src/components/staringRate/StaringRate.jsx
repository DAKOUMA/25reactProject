import React, { useState } from 'react'
import { FaRegStar } from "react-icons/fa";

const StaringRate = () => {
  const [selectedStar, setSelectedStar] = useState(false)

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex)
  }

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex)
  }

  const handleMouseLeave = () => {
    setHover(rating)
  }

  const handleExit = () => {
    setHover(0)
    setRating(0)
  }

  return (
    <div className='staringRate-container'>
      <h1>Rate</h1>
      <div className='starContainer'>
        {
          [...Array(8)].map((_, index) => {
            index += 1

            return (
              <FaRegStar
              className={`${index <= (hover || rating) ? 'active' : 'inactive'} stars`}
                size={'4rem'}
                key={index}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
            )
          })
        }
      </div>
      <button
      onClick={handleExit}
      >
        Disable Rate
      </button>
    </div>
  )
}

export default StaringRate