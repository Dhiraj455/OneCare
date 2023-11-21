import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { addUser, getUser, updateUser } from "../Services/users";

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

  const addOrUpdateUser = async (data) => {
    console.log(data);
    let emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (
      data.firstName === undefined ||
      data.lastName === undefined ||
      data.firstName === "" ||
      data.lastName === ""
    ) {
      alert("Please enter your name");
      return;
    } else if (data.Email === "" || !emailRegex.test(data.Email)) {
      alert("Please enter valid email");
      return;
    } else if (data.Age === "") {
      alert("Please enter your age");
      return;
    } else if (data.Country === "" || data.State === "" || data.City === "") {
      alert("Please enter valid location");
      return;
    }
    if (id === 1) {
      await addUser(data);
      window.location.href = "/";
    } else {
      await updateUser(id, data);
      window.location.href = "/";
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
              setData({ ...data, firstName: e.target.value.trim() });
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
              setData({ ...data, lastName: e.target.value.trim() });
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
              setData({ ...data, Email: e.target.value.trim() });
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
              setData({ ...data, Age: e.target.value.trim() });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="Gender">Gender</InputLabel>
            <Select
              required
              id="gender"
              name="gender"
              value={data.Gender}
              label="Gender"
              onChange={(e) => {
                setData({ ...data, Gender: e.target.value });
              }}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
          {/* <TextField
            required
            fullWidth
            id="gender"
            label="Gender"
            name="gender"
            autoComplete="gender"
            value={data.Gender}
            onChange={(e) => {
              setData({ ...data, Gender: e.target.value.trim() });
            }}
          /> */}
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
              setData({ ...data, Country: e.target.value.trim() });
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
              setData({ ...data, State: e.target.value.trim() });
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
              setData({ ...data, City: e.target.value.trim() });
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
