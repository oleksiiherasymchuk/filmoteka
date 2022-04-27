import React from "react";
import styles from "../Movie/Movie.module.css";

const MovieImage = ({movies}) => {

    return <div>
        <img src={movies.image} className={styles.image} alt='movieImage'/>
        </div>
}

export default MovieImage;