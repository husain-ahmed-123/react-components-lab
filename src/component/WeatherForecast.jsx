import './WeatherForecast.css'
function WeatherForecast({day,img,imgAlt,conditions,time}){
  
    return(
<div className="weather">
  <h2>Day of the Week</h2>
  <img src="" alt="" />
  <p><span>conditions:{conditions} </span>current weather conditions</p>
  <p><span>time:{time} </span>time of day{time}</p>
</div>
    )
}

export default WeatherForecast