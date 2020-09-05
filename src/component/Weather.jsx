import React from 'react';
import '../styles/weather.css';
import '../index.css';

function Weather(props) {
  return (
    <div className="container text-light">
      <div className="cards pt-4">
        <h1>{props.location}</h1>
        <h4 className="">{props.desc}</h4>
        <h5 className="py-4">
          <i className={`wi ${props.icon} display-1`}></i>
        </h5>
        {props.temp ? <h1 className="py-2">{props.temp}&deg;</h1> : null}
        {minmaxTemp(props.tempMin, props.tempMax)}
        {props.wind ? <h4 className='py-2'>wind: {props.wind}</h4> : null}
        
      </div>
    </div>
  );
}

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  } else {
    return null;
  }
}

export default Weather;
