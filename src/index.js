import React from 'react';
import ReactDOM from 'react-dom';


class Hello extends React.Component
{
  render()
  {
    return(
      <h1>
        
        "this is first program with React"
      </h1>
    )
  }
}

class Timer extends React.Component
{
  render(){
    return(
      <h3>
        Time is : {new Date().toLocaleTimeString()}
      </h3>
    )
  }
}

class App extends React.Component
{
  render()
  {
    return(
      <div>
      <Hello/>
      <Timer/>
      </div>
    )
  }
}

const tick = () => {

  ReactDOM.render(<App/>,document.getElementById('root'));
}




setInterval(() => {
 tick();
}, 1000)
