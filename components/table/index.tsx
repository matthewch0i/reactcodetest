import React, { useCallback, useEffect, useState } from 'react'
import TableHeader from './header/index';
import TableMain from './main/index';
import TableFooter from './footer/index';
import styles from '../../styles/Home.module.css';


const sortData = ({ tableData, sortKey, reverse }: {
    tableData: any,
    sortKey: string,
    reverse: boolean
}) => {
    if (!sortKey) return tableData

    const sortedData = tableData.sort((a:any, b:any) => {
        return a[sortKey] > b[sortKey] ? 1 : -1
    })
    if (reverse) {
        sortedData.reverse();
    }
    return tableData
}


const Table = ({ data }: any) => {
    //sort
    const [sortKey, setSortKey] = useState('id');
    const [sortOrder, setSortOrder] = useState('ascn');

    const sortedData = useCallback(
        () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }), [data, sortKey, sortOrder]
    )

    //pagination
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(3);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    //search 
    const [inputSearch, setInputSearch] = useState("");
    const searchKeys = ['name', 'email', 'phone'];
    const searchHandler = (e: any) => {
        setInputSearch(e.target.value);
    };
    const searchFilter = sortedData().filter((user: any, index: number) =>
        searchKeys.some((key) => user[key].toLowerCase().includes(inputSearch)) ||
        searchKeys.some((key) => user[key].toUpperCase().includes(inputSearch)) ||
        searchKeys.some((key) => user[key].includes(inputSearch))
    );
    const dataFilter = () => {
        if (inputSearch !== "") {
            return searchFilter.slice(indexOfFirstUser, indexOfLastUser);
        } else {
            return currentUsers
        }
    }

    useEffect(() => {
        setUsers(data);
    }, [])
    return (
        <div className={styles.tableGroup}>
            <TableHeader searchHandler={searchHandler} />
            <TableMain data={dataFilter()} />
            <TableFooter usersPerPage={usersPerPage} totalUsers={inputSearch === "" ? users.length : searchFilter.length} paginate={paginate} />
        </div>
    )
}

export default Table;