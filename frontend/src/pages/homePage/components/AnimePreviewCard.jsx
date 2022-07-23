import React from 'react'

const AnimePreviewCard = ({
    imgUrl,
    rating,
    title
}) => {
  return (
    <div className = 'w-36 cursor-pointer '>
        <div className='w-full'>
            <img src = {imgUrl} />
            <div>
                <span>{title}</span>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default AnimePreviewCard