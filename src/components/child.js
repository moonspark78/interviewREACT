import React from 'react'

export  default function Child ({name, changeName}) {
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={changeName}>Change  name</button>
    </div>
  )
}
