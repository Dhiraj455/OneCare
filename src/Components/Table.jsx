import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteUser } from "../Services/users";

function BasicTable({ userData }) {
  function createData(
    id,
    fname,
    lname,
    email,
    age,
    gender,
    country,
    state,
    city
  ) {
    return { id, fname, lname, email, age, gender, country, state, city };
  }

  const [rows, setRows] = useState([]);

  useEffect(() => {
    userData.map((user) => {
      setRows((prev) => [
        ...prev,
        createData(
          user.id,
          user.firstName,
          user.lastName,
          user.Email,
          user.Age,
          user.Gender,
          user.Country,
          user.State,
          user.City
        ),
      ]);
    });
  }, [userData]);

  const updateUser = (id) => {
    window.location.href = `/update/${id}`;
  };

  const deleteUsers = (id) => {
    deleteUser(id).then((res) => {
      alert("User Deleted Successfully");
      window.location.reload();
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="centre">Name</TableCell>
            <TableCell align="centre">Email</TableCell>
            <TableCell align="centre">Age</TableCell>
            <TableCell align="centre">Gender</TableCell>
            <TableCell align="centre">Country</TableCell>
            <TableCell align="centre">State</TableCell>
            <TableCell align="centre">City</TableCell>
            <TableCell align="centre">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="centre">
                {row.fname} {row.lname}
              </TableCell>
              <TableCell align="centre">{row.email}</TableCell>
              <TableCell align="centre">{row.age}</TableCell>
              <TableCell align="centre">{row.gender}</TableCell>
              <TableCell align="centre">{row.country}</TableCell>
              <TableCell align="centre">{row.state}</TableCell>
              <TableCell align="centre">{row.city}</TableCell>
              <TableCell align="centre">
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    color="warning"
                    startIcon={<EditIcon />}
                    onClick={() => updateUser(row.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteUsers(row.id)}
                  >
                    Delete
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
