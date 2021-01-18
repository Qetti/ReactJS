
import React, {Component} from "react";
import CountdownTimer from "./Countdown";
import {addSeconds} from 'date-fns';

class Timer extends Component {

    onTimerExpire() {
      console.log("დრო გავიდა ჩემო ძმაო");
    }
  
    render() {

      const countdownDate = addSeconds(new Date(), 12);
  
      return (
        <div>
          <CountdownTimer endDate={countdownDate} onTimerExpire={this.onTimerExpire.bind(this)}/>
        </div>
      );
    }
  
  }
  
  export default Timer;