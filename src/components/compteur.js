import React, { useState, useEffect } from 'react'
import axios from 'axios';








const getFullUserName = (userInfo) =>{
  const {name: {first, last}} = userInfo;
  return `${first} ${last}`;
}

export default function Compteur () {
    const [compteur, setCompteur] = useState(0);
    const [randomDataJSON, setRandomDataJSON] = useState("");
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() =>{
        fetchRandomData().then(randomData =>{
            setRandomDataJSON(randomData);
            setUserInfo(randomData.results);
        });
    },[])
  return (
    <div className='App'>
        <h1>Tester</h1>
        <p>{compteur}</p>
        <button onClick={() => setCompteur(compteur-1)}>Incrémente</button>
        <button onClick={fetchRandomData}>Fetch les datas</button>
        {
          userInfo.map((userInfo,id) =>(
            <div key={id}> 
              <p>{getFullUserName(userInfo)}</p>
              <img alt="" src={userInfo.picture.thumbnail}/>
            </div>

          ))
        }
        <p>{randomDataJSON}</p>
    </div>
  )
}

const fetchRandomData = () => {
    return axios.get('https://randomuser.me/api')
    .then(({data}) => {
      // handle success
      console.log(data);
      return JSON.stringify(data, null, 2);
    })
    .catch(err => {
      // handle error
      console.error(err);
    })
}
