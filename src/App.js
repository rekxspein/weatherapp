import axios from 'axios'
import React, { useState } from 'react'
import './App.css'

export default function App() {
  const apiKey = '904c55231af7c4945ddfc2dc7a143431'
  const apikey2 = "eeac188914e521cc6c4c4720d662cce0"
  const [weatherData, setWeatherData] = useState ([{}])
  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if (event.key == "Enter") {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${apikey2}&query=${city}`).then(
          res => {
          setWeatherData(res.data);
          setCity('')
        });
    }
  }

  return (
    <div className='container'>
      <h4 className='heading'>Weather App</h4>
      <input 
        className='input' 
        placeholder='Type a city..'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyDown={getWeather}
        />
      
    </div>
  )
}
