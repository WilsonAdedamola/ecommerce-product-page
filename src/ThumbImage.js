import React from 'react'

const ThumbImage = ({image, onClick}) => {

  return (
    <div>
      <img src={image} alt="image" className='thumb-img' onClick={()=>onClick()} />
    </div>
  )
}

export default ThumbImage
