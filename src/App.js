import React, {useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Hello from "./Hello";
import Timer from './Timer';

const App = () => {
  const [title, setTitle] = useState("Hi there");
  const [isLight, setIsLight] = useState(false);

  useEffect(()=>{
    console.log("useEffect");
    return()=>{

    }
  },[isLight])

  const handleSetIsLight =() => 
  {
    setIsLight(!isLight)
  }

  return(
    <div className='main' style={{background: isLight ? "gray" : "black"}}>
    <Hello title={title}/>
    <Timer isLight={isLight} handleSetIsLight={handleSetIsLight}/>
  </div>
  )
  
}

export default App;
