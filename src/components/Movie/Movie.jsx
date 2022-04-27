import React from "react";
import MovieItem from "./MovieItem";

const Movie = ({movies}) => {

    
    return <div>
        {movies.map(movies => (
            <MovieItem movies={movies} />
        ))}
    
    </div>
}

export default Movie;



