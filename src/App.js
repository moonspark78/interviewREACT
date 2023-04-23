
import './App.css';
import Compteur from "./components/compteur";
import Child from "./components/child";
import { useState } from 'react';


function App() {
  const [name, setName]= useState("Souli")
  return (
    <div className="App">
      <Compteur/>
      <Child name={name}/>

      <button onClick={() => setName("Elodie")}>Change Name</button>
    </div>
    
  );
}

export default App;
