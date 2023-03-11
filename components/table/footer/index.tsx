import React from 'react'
import styles from '../../../styles/Home.module.css';
import Pagination from '../pagination';
const Index = ({ usersPerPage, totalUsers, paginate }: any) => {
    return (
        <div className={styles.tableFooter}>
            <Pagination usersPerPage={usersPerPage} totalUsers={totalUsers} paginate={paginate} />
        </div>
    )
}

export default Index;