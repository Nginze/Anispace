import React from 'react'

const AnimePreviewCard = ({
    imgUrl,
    rating,
    title
}) => {
  return (
    <div>
        <div>
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