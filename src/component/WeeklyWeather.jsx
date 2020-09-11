import React from 'react';

function WeeklyWeather({ data }) {
  return (
    <div className="table-responsive">
      <table id="tableContainer" className="table table-borderless">
        <thead>
          <tr>
            <th>
              {data.list.main.temp}
            </th>
          </tr>
        </thead>
        {/* <tbody>
          <tr>
            <td>{data.list.weather.icon}</td>
          </tr>
          <tr>
            <td>{data.list.dt}</td>
          </tr>
        </tbody> */}
      </table>
    </div>
  );
}

export default WeeklyWeather;