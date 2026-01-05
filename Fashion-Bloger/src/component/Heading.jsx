import React from 'react'

function Heading({ Headings, className }) {
  return (
     <>
        <h1 className={` text-2xl lg:text-3xl font-bold py-10 px-2 ${className}`}>{Headings}</h1>
     </>
  )
}

export default Heading