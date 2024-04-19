import { useEffect, useState } from 'react';
import './CurrentWeather.css';
import PropTypes from 'prop-types';

export default function CurrentWeather({parks}){
    const [weather, setWeather] = useState('')

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${parks[0].latitude}&lon=${parks[0].longitude}&appid=${process.env.REACT_APP_API_SECRET_KEY}&units=imperial`)
        .then(res => res.json())
        .then(data => setWeather(data.main))
    }, [])

    return (
        <div>
            <img className='weather-img' src="https://cdn-icons-png.flaticon.com/256/1248/1248023.png"/>
            <h4>{new Date().toLocaleDateString()}</h4>
            <p>current temperature: {weather.temp}℉</p>
            <p>temperature high: {weather.temp_max}℉</p>
            <p>temperature low: {weather.temp_min}℉</p>
            <p>feels like: {weather.feels_like}℉</p>
            <p>humidity: {weather.humidity}%</p>
        </div>
    )
}

CurrentWeather.propTypes ={
    parks: PropTypes.arrayOf(
        PropTypes.shape({
           latitude: PropTypes.string.isRequired, 
           longitude: PropTypes.string.isRequired

        })
    )
}