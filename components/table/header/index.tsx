import React, { useState } from 'react'
import styles from '../../../styles/Home.module.css';
import { BiSortAlt2, BiSearch } from 'react-icons/bi'
const Index = ({ searchHandler }: any) => {

    const [sortMenuDisplay, setSortMenuDisplay] = useState(false);

    const sortMenuHandler = () => {
        setSortMenuDisplay(!sortMenuDisplay);
    }

    return (
        <div className={styles.tableHeader}>
            <div className={styles.inputSearchGroup}>
                <div><BiSearch size={24} color="777986" /></div>
                <input type="search" onChange={searchHandler} placeholder='Search user ...' />
            </div>
            <div className={styles.inputSortGroup}>
                <div className={styles.sortMenu}>
                    <label>Sort By</label>
                    <ul>
                        <li>ID</li>
                        <li>NAME</li>
                        <li>EMAIL</li>
                        <li>PHONE</li>
                    </ul>
                </div>
                <button onClick={sortMenuHandler}><BiSortAlt2 size={24} color="777986" /></button>
            </div>
        </div>
    )
}

export default Index;