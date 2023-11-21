import "./App.css";
import Users from "./Pages/Users";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AddAndUpdateUser from "./Pages/AddAndUpdateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <h1>Bharat One Care - TASK</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/add" element={<AddAndUpdateUser />} />
            <Route path="/update/:id" element={<AddAndUpdateUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
