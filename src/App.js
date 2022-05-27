import React, { useState } from 'react'
import { Button, Card} from "react-bootstrap";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const apikey = "eeac188914e521cc6c4c4720d662cce0"
  const [weatherData, setWeatherData] = useState ()
  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`http://api.weatherstack.com/current?access_key=${apikey}&query=${city}`)
      .then(response => {console.log(response); return response.json()})
      .then(
          data => {
            setWeatherData(data)
            setCity("");
          }
        );
    }
  }

  return (
    <div className="card">
      <h4 className="heading">Weather App</h4>
      <input
        className="input"
        placeholder="Type a city.."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyDown={getWeather}
      />

      {!weatherData ? (
        <div>
          <p className="cityinput">Type a city to start!</p>
        </div>
      ) : (
        <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
          <div className="flexbox-container">
            <div className={weatherData.current.temperature > 16 ? "card app warm" : "card app"}>
              <img src={weatherData.current.weather_icons} alt="weather icon" width="40" height = "40"/>
              <div className="flexbox-item-1">Location - {weatherData.location.name}</div>
              <div className="flexbox-item-2">{weatherData.current.weather_descriptions}</div>
              <div className="flexbox-item-3">{weatherData.current.temperature}&#176;C</div>
              <div className="">UV index - {weatherData.current.uv_index}</div>
              <div className="card app forecast">
                  <Button variant="primary">Weather History</Button>
              </div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
