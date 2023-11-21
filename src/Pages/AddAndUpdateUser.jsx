import React from "react";
// import { addStudent, updateUser } from "../Services/student";
import { Box, Typography, Container } from "@mui/material";
import UserForm from "../Components/Form";
import { useParams } from "react-router-dom";

export default function AddAndUpdateUser() {
  let { id } = useParams();
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" mb={2}>
          {!id ? "Add User" : "Update User"}
        </Typography>
        <UserForm id={id ? id : 1} />
      </Box>
    </Container>
  );
}
