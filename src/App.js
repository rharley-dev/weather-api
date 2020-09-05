import React from 'react';
import "./App.css";
import Weather from './component/Weather.jsx';
import Form from './component/Form.jsx'
// import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

const apiKey = '87ef27d93fbc8f922380ae25b08fa55b';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      temp: undefined,
      tempMax: undefined,
      tempMin: undefined,
      desc: '',
      error: false,
    };
    this.getWeather();
    //using weather icons with weather-icons.css
    this.weatherIcon = {
      Thunderstorm: 'wi-thunderstorm',
      Drizzle: 'wi-sleet',
      Rain: 'wi-storm-showers',
      Snow: 'wi-snow',
      Atmosphere: 'wi-fog',
      Clear: 'wi-day-sunny',
      Clouds: 'wi-day-fog',
    };
  }

  getWeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  calcFahrenheit(temp) {
    const cell = Math.floor((temp - 273.15) * (9 / 5) + 32);
    return cell;
  }

  getWeather = async () => {
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Minneapolis,us&appid=${apiKey}`
    );
    const response = await apiCall.json();
    console.log(response);
    this.setState({
      city: response.name,
      country: response.sys.country,
      temp: this.calcFahrenheit(response.main.temp),
      tempMax: this.calcFahrenheit(response.main.temp_max),
      tempMin: this.calcFahrenheit(response.main.temp_min),
      desc: response.weather[0].description,
    });
    this.getWeatherIcon(this.weatherIcon, response.weather[0].id);
  };

  render() {
    return (
      <div className="App">
        <Form />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          tempMax={this.state.tempMax}
          tempMin={this.state.tempMin}
          desc={this.state.desc}
          icon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
