import React, { useState } from 'react'
import styles from '../../../styles/Home.module.css';
import { BiSortAlt2, BiSearch } from 'react-icons/bi'
const Index = ({ searchHandler, setSortData }: any) => {

    const [sortBy, setSortBy] = useState("id,asc");
    const [sortMenuDisplay, setSortMenuDisplay] = useState(false);
    const sortByHandler = (e: any) => {
        setSortBy(e.target.value);
        const data = e.target.value.split(',');
        setSortData(data[0], data[1]);
    }

    const sortMenuHandler = () => {
        setSortMenuDisplay(!sortMenuDisplay);
    }




    return (
        <div className={styles.tableHeader}>
            <div className={styles.inputSearchGroup}>
                <div><BiSearch size={24} color="777986" /></div>
                <input type="text" onChange={searchHandler} placeholder='Search user ...' />
            </div>
            <div className={styles.inputSortGroup}>
                {sortMenuDisplay ? (<div className={styles.sortMenu}>
                    <label>Sort By</label>
                    <div className={styles.sortContainer}>
                        <ul>
                            <li><input name="sortby" type="radio" defaultChecked={sortBy === "id,asc"} onChange={sortByHandler} value="id,asc" id="sortby_ID_ASC" /><label htmlFor='sortby_ID_ASC'>ID (ASC)</label></li>
                            <li><input name="sortby" type="radio" defaultChecked={sortBy === "name,asc"} onChange={sortByHandler} value="name,asc" id="sortby_NAME_ASC" /><label htmlFor='sortby_NAME_ASC'>NAME (ASC)</label></li>
                            <li><input name="sortby" type="radio" defaultChecked={sortBy === "email,asc"} onChange={sortByHandler} value="email,asc" id="sortby_EMAIL_ASC" /><label htmlFor='sortby_EMAIL_ASC'>EMAIL (ASC)</label></li>
                            <li><input name="sortby" type="radio" defaultChecked={sortBy === "phone,asc"} onChange={sortByHandler} value="phone,asc" id="sortby_PHONE_ASC" /><label htmlFor='sortby_PHONE_ASC'>PHONE (ASC)</label></li>
                        </ul>
                        <ul>
                            <li><input name="sortby" type="radio" defaultChecked={sortBy === "id,desc"} onChange={sortByHandler} value="id,desc" id="sortby_ID_DESC" /><label htmlFor='sortby_ID_DESC'>ID (DESC)</label></li>
                            <li><input name="sortby" type="radio" defaultChecked={sortBy === "name,desc"} onChange={sortByHandler} value="name,desc" id="sortby_NAME_DESC" /><label htmlFor='sortby_NAME_DESC'>NAME (DESC)</label></li>
                            <li><input name="sortby" type="radio" defaultChecked={sortBy === "email,desc"} onChange={sortByHandler} value="email,desc" id="sortby_EMAIL_DESC" /><label htmlFor='sortby_EMAIL_DESC'>EMAIL (DESC)</label></li>
                            <li><input name="sortby" type="radio" defaultChecked={sortBy === "phone,desc"} onChange={sortByHandler} value="phone,desc" id="sortby_PHONE_DESC" /><label htmlFor='sortby_PHONE_DESC'>PHONE (DESC)</label></li>
                        </ul>

                    </div>
                </div>) : <></>}

                <button onClick={sortMenuHandler}><BiSortAlt2 size={24} color="777986" /></button>
            </div>
        </div>
    )
}

export default Index;