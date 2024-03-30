import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'


var interval;
class Timer extends React.Component {
  constructor() {
    super();
    this.state =
    {
      hour: 0,
      minute: 0,
      secound: 0,
      isStrat: false
    }
  }


  startInterval = () => {
    if (this.state.isStrat == false) {
      this.setState({
        isStrat: true
      })
      interval = setInterval(() => {
        this.setState({
          secound: this.state.secound + 1
        })
        if (this.state.secound == 60) {
          this.setState(
            {

              minute: this.state.minute + 1,
              secound: 0
            }
          )
        }

        if (this.state.minute == 60) {
          this.setState({
            hour: this.state.hour + 1,
            minute: 0,
            secound: 0
          })
        }
      }, 1000)
    }
  }
  stopInterval = () => {
    this.setState({
      isStrat: false
    })
    clearInterval(interval);
  }

  // componentDidMount()
  // {
  //    this.startInterval();
  // }

  restartInterval = () => {
    this.stopInterval()
    this.setState(
      {
        hour: 0,
        minute: 0,
        secound: 0,

      }
    )

  }


  render() {
    let h = this.state.hour
    let m = this.state.minute
    let s = this.state.secound

    return (
      <>
        <h3 className='timer'>

          {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}
        </h3>
        <div>
          <button className='action-button start' onClick={this.startInterval}>Start</button>
          <button className='action-button stop' onClick={this.stopInterval}>ُStop</button>
          <button className='action-button restart' onClick={this.restartInterval}>ُRestart</button>
          <button className='action-button isLight' onClick={this.props.handleSetIsLight}>BG</button>
        </div>


      </>
    )
  }
}

export default Timer;