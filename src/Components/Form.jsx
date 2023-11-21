import React, { useEffect, useState } from "react";
import { Button, TextField, Box, Grid } from "@mui/material";
import { addUser, getUser, updateUser } from "../Services/student";
function UserForm({ id }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (id !== 1 && id != null && id !== undefined) {
      getUser(id).then((doc) => {
        setData(doc);
        console.log(doc);
      });
    }
  }, [id]);

  const addOrUpdateUser = (data) => {
    if (id === 1) {
      addUser(data);
    } else {
      updateUser(id, data);
    }
  };
  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            value={data.firstName}
            onChange={(e) => {
              setData({ ...data, firstName: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            value={data.lastName}
            onChange={(e) => {
              setData({ ...data, lastName: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={data.Email}
            onChange={(e) => {
              setData({ ...data, Email: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="age"
            label="Age"
            name="age"
            autoComplete="age"
            value={data.Age}
            onChange={(e) => {
              setData({ ...data, Age: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            id="country"
            label="Country"
            name="country"
            autoComplete="country"
            value={data.Country}
            onChange={(e) => {
              setData({ ...data, Country: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            id="state"
            label="State"
            name="state"
            autoComplete="state"
            value={data.State}
            onChange={(e) => {
              setData({ ...data, State: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            id="city"
            label="City"
            name="city"
            autoComplete="city"
            value={data.City}
            onChange={(e) => {
              setData({ ...data, City: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} alignSelf={"center"}>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => addOrUpdateUser(data)}
          >
            {id === 1 ? "Add" : "Update"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserForm;
