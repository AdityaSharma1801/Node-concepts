import React from 'react'
import "./WeatherCard.css"
const WeatherCard = ({Location ,pic,data}) => {
  return (
    <div>
      <main className="main">
  <div className="left">
    <div className="date">
      Friday, 9 August 2024    </div>
    <div className="city">
      {Location}
    </div>
    <div className="tempreture">
      <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="icon" className="left-img" />
      {data}°
    </div>
  </div>
  <div className="right">
    <div className="city-img">
      <img src={pic} alt="tajmahal" className="right-img" />
    </div>
  </div>
</main>
    </div>
  )
}

export default WeatherCard
