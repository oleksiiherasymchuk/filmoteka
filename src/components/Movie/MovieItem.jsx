import React from "react";
import styles from "../Movie/Movie.module.css";
import MovieDescription from "./MovieDesription";
import MovieImage from "./MovieImage";


const MovieItem = ({movies}) => {

    return <div>
        <div className={styles.movieItem}>
                <MovieImage movies={movies}/>
            
            <span className={styles.movieDescription}>
                <MovieDescription movies={movies}/>
            </span>
           
        </div>
    </div>
}

export default MovieItem;