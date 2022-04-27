import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Paginator from "../UI/Paginator";
import SelectSort from "../UI/SelectSort";
import Movie from "./Movie";
import styles from "./Movie.module.css"

const Movies = () => {
    // Set Movies from API without rendering
    const [movies, setMovies] = useState([]);
    async function fetchMovies(){
        const response = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_835s3zf0')
        setMovies(response.data.items)
    }
    useEffect( ()=> {
        fetchMovies()
    }, [])

    //  Sorting and Searching Movies
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedMovie = useMemo( () => {
        if(selectedSort) {
           return [...movies].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return movies
    }, [selectedSort, movies])

    const sortedAndSearchedPosts = useMemo( () => {
        return sortedMovie.filter(movie => movie.fullTitle.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedMovie])


    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    // Paginator
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(10)


    const lastMovieIndex = currentPage * moviesPerPage
    const firstMovieIndex = lastMovieIndex - moviesPerPage
    const currentMoviePage = movies.slice(firstMovieIndex, lastMovieIndex)
    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return <div>
        <button onClick={fetchMovies} className={styles.getMovieButton}>Get Movies</button>
        <input value={searchQuery}
                onChange= { event => setSearchQuery(event.target.value)}
                placeholder='Search for...' />
        <SelectSort 
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка по..."
                options={[
                    {value:'title', name:'Сортировка по названию'},
                    {value:'year', name:'Сортировка по годам'},
                    {value:'imDbRating', name:'Сортировка по рейтингу'}
                ]}/>
        <Paginator  
                moviesPerPage={moviesPerPage}
                totalMovies={movies.length}
                paginate={paginate}
                />
        {sortedAndSearchedPosts.length
            ? <Movie 
                movies={sortedAndSearchedPosts}
                // movies={currentMoviePage}
            />
        : <h1>Movies not found</h1> }
    </div>
}

export default Movies;

 // let  Users = (probs) => {
    
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${probs.currentPage}&count=${probs.pageSize}`)
//         .then(response => {
//         probs.setUser(response.data.items);
//         probs.setTotalUsersCount(response.data.totalCount)
//         });
//     let onPageChanged = (pageNumber) => {
//                         probs.setCurrentPage(pageNumber);
//                         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${probs.pageSize}`)
//                             .then(response => {
//                                 probs.setUser(response.data.items);
//                             });
//                     }
//     let pagesCount = Math.ceil (probs.totalUsersCount / probs.pageSize);
//     let pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i);
//     }
  
  
//   return <div>
//       <div>
//         {pages.map ( p => {
//          return <span className={probs.currentPage === p && styles.selectedPage} onClick={ () => {onPageChanged(p)}}
//          >{p}</span> 
//         })}
//         </div>

