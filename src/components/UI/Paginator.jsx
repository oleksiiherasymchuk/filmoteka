import React from "react";
import styles from "../UI/UI.module.css"

const Paginator = ({ moviesPerPage, totalMovies, paginate }) => {

    const pageNumbers = []

    const pageCount = Math.ceil(totalMovies / moviesPerPage) 

    // const onPageChange = (p) => {paginate(p)}

    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i)
    }

    return <div className={styles.paginatorsItem}>
        {
            pageNumbers.map( p => (
                <button onClick={() => {paginate(p)}} key={p} className={styles.selectedPage}>{p}</button>
            ))
        }
    </div>
}

export default Paginator;