import React, { useState } from 'react'

export default function Compteur () {
    const [compteur, setCompteur] = useState(0);
  return (
    <div className='App'>
        <h1>Tester</h1>
        <p>{compteur}</p>
        <button onClick={() => setCompteur(compteur-1)}>Incrémente</button>
    </div>
  )
}
