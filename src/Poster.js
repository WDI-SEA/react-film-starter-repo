import React from "react"

export default function Poster(props) {
  // States
  // Necessary Variables
  const posterUrl = 'https://image.tmdb.org/t/p/w780/'
  
  // Handlers
  // Output
  return (
    <>
      <img 
        src={`${posterUrl}${props.poster}`}
        alt={`${props.alt} Poster`}
      />
    </>
  )
}