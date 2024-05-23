import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(10)

//let counter=15

const addValue = () =>{
  //console.log("Value added", Math.random());
 // console.log("Clicked", counter);

  //counter =counter+1
  //setCounter(counter+2)
  setCounter(prevCounter => prevCounter + 1)
  // setCounter(prevCounter => prevCounter + 1 )
  // setCounter(prevCounter => prevCounter + 1)
  // setCounter(prevCounter => prevCounter + 1)
}

const removeValue =() =>{

setCounter(counter -10)
} 
 return (
    <>
      <h1>Dark Side Hacker</h1>
      <h2>Almost Counter Target is Portal Bugs:{counter}</h2>
      <button onClick={addValue}>Hack{counter}</button><br/>
      <button onClick={removeValue}>IIT{counter}</button>
<p>footer{counter}</p>
    </>
  )
}

export default App