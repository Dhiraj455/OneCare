import { useEffect } from 'react';
import './App.css';
import { getAllUsers } from './Services/student';

function App() {

  useEffect(() => {
    getAllUsers();
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Guys</h1>
      </header>
    </div>
  );
}

export default App;
