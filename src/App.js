import React from 'react';
import './App.css';
import Weather from './component/Weather.jsx';
import Form from './component/Form.jsx';
import Navbar from './component/Navbar.jsx';
import Forecast from './component/Forecast';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

const apiKey = '87ef27d93fbc8f922380ae25b08fa55b';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      icon: undefined,
      temp: undefined,
      tempMax: undefined,
      tempMin: undefined,
      wind: undefined,
      desc: '',
      error: false,
      data: [],
      forecastError: false,
    };
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
    this.getWeather.bind(this);
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

  getWeather = async event => {
    // to overide page from loading when called
    event.preventDefault();

    // calling name var in input doc to retrieve value
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    if (city && country) {
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
        )
        .then(response => {
          const data = response.data;
          this.setState({
            location: `${data.name}, ${data.sys.country}`,
            temp: this.calcFahrenheit(data.main.temp),
            tempMax: this.calcFahrenheit(data.main.temp_max),
            tempMin: this.calcFahrenheit(data.main.temp_min),
            wind: data.wind.speed,
            desc: data.weather[0].description,
            error: false,
          });
          this.getWeatherIcon(this.weatherIcon, data.weather[0].id);
          return data;
        });

      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}`
        )
        .then(response => {
          const data = response.data;
          this.setState({
            data: data.list,
            forecastError: false,
          });
          return data;
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(this.state.data);
    } else {
      this.setState({ error: true, forecastError: true });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Form loadWeather={this.getWeather} error={this.state.error} />
        <Weather
          location={this.state.location}
          temp={this.state.temp}
          tempMax={this.state.tempMax}
          tempMin={this.state.tempMin}
          wind={this.state.wind}
          desc={this.state.desc}
          icon={this.state.icon}
        />
        <Forecast data={this.state.data} />
      </div>
    );
  }
}

export default App;
