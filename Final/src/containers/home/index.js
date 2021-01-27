import React from 'react';
import Fade from "react-reveal/Fade";
import Typical from 'react-typical'
import { Ghost } from 'react-kawaii'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
	if (remainingTime === 0) {
	  return <div className="timer" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>ჩაბარებულიააააა</div>;
	}
  
	return (
	  <div className="timer">
		<div className="text" style={{color: '#aaa'}}>დარჩენილიიაა</div>
		<div className="value" style={{fontSize: '40px'}}>{remainingTime}</div>
		<div className="text"style={{color: '#aaa'}}>წამიიი</div>
	  </div>
	);
  };

const Home = () => {
	return (
		<Fade bottom cascade>
				<div style={{height: '800px', margin: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
					<div style={{textAlign: 'center'}}> 
					<Ghost size={240} mood="blissful" color="#E0E4E8" />
					<br />
					<Typical style={{fontSize: '30px'}}
						steps={['მოგესალმებათ ქეთევან ოთიაშვილი 👋', 2000, 'ზან ზან მაგარ საიტზე 🤣', 1000]}
						loop={Infinity}
						wrapper="h1"
					/>
					<br />
					<br />

					<h4>რეაქტის საგნის დასრულებამდე დარჩენილიიიიიიააააააააა</h4>
					<br />
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<CountdownCircleTimer
							isPlaying
							duration={10}
							colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
							onComplete={() => [true, 2000]}
							>
							{renderTime}
						</CountdownCircleTimer>
					</div>
					</div>
				</div>
		</Fade>
	)
};

export default Home;