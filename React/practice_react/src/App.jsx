import React from 'react'
import WeatherCard from "./components/WeatherCard"
const App = () => {
  return (
<>
<WeatherCard
data ="40" 
pic="https://media.istockphoto.com/id/510978989/photo/hawa-mahal-palace-in-jaipur-rajasthan.jpg?s=612x612&w=0&k=20&c=-2ijZ9kpofMH1jJhaxFF1hJ5oqjdXfOtIu0BlwXwdls="
Location={"Jaipur"}
/>

<WeatherCard 
data = "30" 
pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoHP_uzR2BMYxEy6Rgr4RBgJ2m48SaChhkA&s"
Location={"Agra"}
/>
</>


  )
}

export default App
