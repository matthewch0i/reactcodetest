import React from 'react'
import styles from '../../../styles/Home.module.css';
const Index = ({ data }: any) => {
    return (
        <table className={styles.tableMain}>
            <thead>
                <tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>PHONE</th></tr>
            </thead>
            <tbody>
                {/* max 9 */}
                {data.length > 0 ? data.map((user: any, index: number) => (<tr key={index}><th>{user.id}</th><td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td></tr>)) : <tr><td colSpan={4}>No data</td></tr>}
            </tbody>
        </table>
    )
}

export default Index;