import "./App.css";
import Compteur from "./components/compteur";
import Child from "./components/child";
import { useState } from "react";

function App() {
  /* on va passer le name en props vers le composant enfant child */
  const [name, setName] = useState("Souli");
  const changeName = () => {
    setName("Elodie");
  };
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const details = [
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
  /* cree un state on on va conserver les date des 4 inputs */
  const [objData, setObjData] = useState({});
  const getInputs = (value, name) => {
    let data = {[name]: value};
    setObjData({ ...objData, ...data})
  };
  const submit = (e) =>{
    e.preventDefault();
    console.log(objData);
  }

  return (
    <div className="App">
      <Compteur />
      <Child name={name} changeName={changeName} />
      <ul>
        {numbers.map((num) => {
          return <li key={num}>{num}</li>;
        })}
      </ul>

      <ul>
        {details.map((detail, index) => {
          return (
            <div key={index}>
              <li>{detail.name}</li>
              <li>{detail.age}</li>
            </div>
          );
        })}
      </ul>

      <br/><br/><h3> ------------------Form ---------------------</h3>

      <div className="form">
        <input
          className="to"
          placeholder="Write your Name ..."
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          name="name"
          type="text"
        />
        <input
          className="to"
          placeholder="Write your  Age ..."
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          name="age"
          type="number"
        />
        <input
          className="to"
          placeholder="Write your Hobbies ..."
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          name="hobbies"
          type="text"
        />
        <input
          className="to"
          placeholder="Write a Date ... "
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          name="date"
          type="date"
        />
        <button onClick={submit}>Submit</button>
        <button type="reset">Reset</button>
      </div>

      <br/><br/><h3> ------------------Dynamique Inputs ---------------------</h3>
      <div className="input-container">
          <input className="to" placeholder="Name"/>
          <input className="to" placeholder="Age"/>
          <input className="to"placeholder="Years of Experience"/>
      </div>
      <button className="btn">Add New Group</button><br/><br/><br/><br/>
    </div>
  );
}

export default App;
