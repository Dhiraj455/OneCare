import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import { getAllUsers } from "../Services/users";
import { Box, Button } from "@mui/material";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((doc) => {
      setUsers(doc);
    });
  }, []);

  return (
    <div>
      <Table userData={users} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: 2,
        }}
      >
        <Button variant="contained" color="primary" href="/add">
          Add User
        </Button>
      </Box>
    </div>
  );
}

export default Users;
