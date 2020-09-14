import React from 'react';
// import WeeklyWeather from './WeeklyWeather';
import '../styles/forecast.css';

function Forecast(props) {
  const dataArray = props.data;
  const getTemp = dataArray.map(item => item.main.temp);
  const getTime = dataArray.map(item => timeConverter(item.dt));
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

  return (
    <table id='dtTableContainer' className='tableContainer table-borderless'>
      <thead>
        <tr>
          <th key={dataArray.dt}>{getTime}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td key={dataArray.dt}>{getTemp}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Forecast;
