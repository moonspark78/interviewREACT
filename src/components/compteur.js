import React, { useState, useEffect } from 'react'
import axios from 'axios';







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






export default function Compteur () {
    const [compteur, setCompteur] = useState(0);
  /*   const [randomDataJSON, setRandomDataJSON] = useState(" ");
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() =>{
        fetchRandomData().then(randomData =>{
            setRandomDataJSON(randomData);
            setUserInfo(randomData.results);
        });
    },[])

    const getFullUserName = (userInfo) =>{
      const {name: {first, last}} = userInfo;
      return `${first} ${last}`;
  } */
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchUser = async () => {
        const response = await axios.get("https://randomuser.me/api");
        setUser(response.data.results[0]);
      };
      fetchUser();
    }, []);

    if (!user) {
      return <div>Loading...</div>;
    }

    const { first, last } = user.name;
    const { large } = user.picture;
    
  return (
    <div className='App'>
        <h1>Tester</h1>
        <p>{compteur}</p>
        <button onClick={() => setCompteur(compteur+1)}>Incrémente</button>
        <button onClick={fetchRandomData}>Fetch les datas</button>
       {/*  {
          userInfo?.map((userInfo,id) =>(
            <div key={id}> 
              <p>{getFullUserName(userInfo)}</p>
              <img alt="" src={userInfo.picture.thumbnail}/>
            </div>

          ))
        }
        <p>{randomDataJSON}</p>  */}
        <div>
          <h1>{`${first} ${last}`}</h1>
          <img src={large} alt={`${first} ${last}`} />
        </div>
    </div>
  )
}
