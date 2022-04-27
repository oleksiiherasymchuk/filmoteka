import React from "react";
import styles from "../Movie/Movie.module.css";

const MovieDescription = ({movies}) => {
    
    return (
        <div>
            <span className={styles.movieDescription}></span>
            <h3>{movies.title}, {movies.year}</h3>
            <h4>{movies.crew}</h4>
            <h4>imDbRating: {movies.imDbRating}</h4>
        </div>
    )
}

export default MovieDescription;