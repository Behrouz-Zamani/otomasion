import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'


var interval;
class Timer extends React.Component 
{
constructor()
{
  super();
  this.state=
  {
    time : new Date().toLocaleTimeString()
  }
}

componentDidMount()
{
    interval =   setInterval(() => {
        this.setState({
          time:new Date().toLocaleTimeString()
        })
      }, 1000)
}

  render()
  {

    return(
      <h3 className='timer'>
        Time is : {new Date().toLocaleTimeString()}
      </h3>
    )
  }
}

export default Timer;