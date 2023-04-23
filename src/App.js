
import './App.css';
import Compteur from "./components/compteur";
import Child from "./components/child";
import { useState } from 'react';


function App() {
  /* on va passer le name en props vers le composant enfant child */
  const [name, setName]= useState("Souli")
  const changeName = () =>{
    setName("Elodie")
  }
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  const details =[
    {
      name: "Elodie",
      age: 28,
    },
    {
      name: "toto",
      age: 2,
    },
    {
      name: "tata",
      age: 48,
    },
    {
      name: "kjdfnk",
      age: 18,
    },
    {
      name: "titi",
      age: 81,
    },
];
  return (
    <div className="App">
      <Compteur/>
      <Child name={name} changeName={changeName}/>
      <ul>
        {numbers.map(num =>{
          return <li key={num}>{num}</li>
        })}
      </ul>


      <ul>
        {details.map((detail, index) =>{
          return (
            <div key={index}>
            <li>{detail.name}</li>
            <li>{detail.age}</li>
            </div>
          );
          
        })}
      </ul>


    </div>
    
  );
}

export default App;
