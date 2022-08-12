import * as React from 'react';
import './clock.css';

const Clock = () => {
  const [seconds, setSeconds] = React.useState('');
  const [minutes, setMinutes] = React.useState('');
  const [hours, setHours] = React.useState('');

  const getTime = async () => {
    const response = await fetch('https://worldtimeapi.org/api/ip');
    const data = await response.json();
    const date = new Date(data.datetime);

    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;

    setHours(`rotateZ(${hh + mm / 12}deg)`);
    setMinutes(`rotateZ(${mm}deg)`);
    setSeconds(`rotateZ(${ss}deg)`);
  };

  React.useEffect(() => {
    const time = setInterval(() => {
      getTime();
    }, 1000);
    return () => clearInterval(time);
  }, []);

  return (
    <React.Fragment>
      <div className="half__circle"></div>
      <div className="clock__circle">
        <span className="clock__twelve"></span>
        <span className="clock__three"></span>
        <span className="clock__six"></span>
        <span className="clock__nine"></span>

        <div className="clock__hour" style={{ transform: hours }}></div>
        <div className="clock__minutes" style={{ transform: minutes }}></div>
        <div className="clock__seconds" style={{ transform: seconds }}></div>
      </div>
      <div className="half__circle"></div>
    </React.Fragment>
  );
};

export default Clock;
