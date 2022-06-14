import React, { } from 'react'

export default function Details(props) {
    const url = `the movie poster for ${props.filmTitle} `
    return (
        <>
            <img src={props.url} alt={url} />
        </>
    )
}
