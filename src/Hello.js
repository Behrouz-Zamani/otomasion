import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

class Hello extends React.Component
{
  render()
  {
    return(
      <h1 className='hello'>
        The first App by React
      </h1>
    )
  }
}

export default Hello;