import React from 'react';
// import WeeklyWeather from './WeeklyWeather';
import '../styles/forecast.css';

function Forecast(props) {
  console.log(props.data);
  function timeConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp * 1000);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = `${date} ${month} ${year} ${hour}:${min}:${sec}`;
    return time;
  }
  console.log(timeConverter(1599469200));

  const getTemp = props.data.map(item => <div>{item.main.temp}</div>);

  return <div className="">{props.data ? getTemp : 'loading'}</div>;
}

export default Forecast;
