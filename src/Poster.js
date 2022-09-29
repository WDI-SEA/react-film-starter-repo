import React, { useState } from "react";

export default function Poster(props) {
    return (
        <img src={`https://image.tmdb.org/t/p/w780/${props.url}`} alt={props.film.title} />
    )
}
