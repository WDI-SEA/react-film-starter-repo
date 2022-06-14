import React from 'react'

const Poster = ({ posterUrl, title }) => {
  return <img src={posterUrl} alt={title} />
}

export default Poster
