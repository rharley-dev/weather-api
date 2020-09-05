import React from 'react';


function Weather(props) {
  return (
    <div className="container">
      <div className="cards">
        <h1>
          {props.city}, {props.country}
        </h1>
        <h5 className="py-4">
          <i className={`wi ${props.icon} display-1`}></i>
        </h5>
  <h1 className="py-2">{props.temp}&deg;</h1>
        {minmaxTemp(props.tempMax, props.tempMin)}

        <h4 className="py-4">{props.desc}</h4>
      </div>
    </div>
  );
}

function minmaxTemp(min, max) {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  );
}

export default Weather;
