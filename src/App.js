import "./App.css";
import Users from "./Pages/Users";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AddAndUpdateUser from "./Pages/AddAndUpdateUser";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <h1>Hello Guys</h1>
        <Users />
        {/* <AddAndUpdateUser id={"CYXV2RriIIUjMO3eihnx"}/> */}
      </ThemeProvider>
  );
}

export default App;
