import React, { useState } from 'react'

const Usestate = () => {
    const [text,setText]=useState('')
    const [words,setWords]=useState([])
    
  return (
    <div>
      <p>{text}</p>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
      <button onClick={()=>{
        setWords((state)=>[...state,text]
        )

      }}>add word</button>
      {words.map((word, idx) => (
        <div key={idx}>{word}</div>
      ))}
    </div>
  )
}

export default Usestate
