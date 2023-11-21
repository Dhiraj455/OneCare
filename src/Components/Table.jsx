import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ userData }) {
  function createData(fname, lname, email, age, gender, country, state, city) {
    return { fname, lname, email, age, gender, country, state, city };
  }

  const rows = [];

  useEffect(() => {
    console.log(userData);
  }, []);

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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.fname}
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
