import React from 'react'

function Image({ src, alt, classname }) {
  return (
    <>
    <img src={src} alt={alt} className={`px-5 lg:pt-0 pt-5 ${classname}`} />
    </>
   )
}

export default Image