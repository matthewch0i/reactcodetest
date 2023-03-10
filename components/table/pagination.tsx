import React from 'react'
import styles from '../../styles/Home.module.css';
const Pagination = ({ usersPerPage, totalUsers, paginate }: any) => {
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className={styles.pagination}>
                {pageNumbers.map(number => (<li key={number}>
                    <a href="#" onClick={() => paginate(number)}>{number}</a>
                </li>))}
            </ul>
        </nav>
    )
}

export default Pagination;