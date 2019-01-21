import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

class TimeUntil extends Component {

  state = {
    deadline: 'May, 17, 2019',
    hour: 0,
    min: 0,
    sec: 0,
    day: 0
  }

  componentDidMount(){
    setInterval(()=>{
      let time;
      time = Date.parse(this.state.deadline) - Date.parse(new Date())
      let sec = (Math.floor((time/1000)%60))
      let min = (Math.floor((time/1000/60)%60))
      let hour = (Math.floor((time/(1000*3600))%24))
      let day = (Math.floor((time/(1000*3600*24))))
      this.setState({
        hour, min, sec, day
      })
    },1000)
  }

  render() {
    console.log(this.state)
    let {day, hour, min, sec} = this.state;
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
        <div className="countdown_top">
          Event Starts in
        </div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">{day}</div>
            <div className="countdown_tag">days</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{hour}</div>
            <div className="countdown_tag">hours</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{min}</div>
            <div className="countdown_tag">mins</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{sec}</div>
            <div className="countdown_tag">sec</div>
          </div>
        </div>
      </div>
      </Slide>
    )
  }
}

export default TimeUntil
