import React from 'react';
import ReactDOM from 'react-dom';

const tick =()=>{
  const elem = 
  (
    <div>
      <h4>
        Time is {new Date().toLocaleTimeString()}
      </h4>
    </div>
  )
  ReactDOM.render(elem,document.getElementById('root'));

}

setInterval(() => {
  tick()
}, 1000);
