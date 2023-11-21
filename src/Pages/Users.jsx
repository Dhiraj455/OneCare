import React from 'react'
import Table from '../Components/Table'
import { getAllUsers } from "../Services/student";

function Users() {
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        getAllUsers().then((doc) => {
            setUsers(doc);
        });
    }, []);
    return (
        <div>
            <Table userData={users}/>
        </div>
    )
}

export default Users