import { useEffect } from 'react';

export default function CurrentWeather({parks}){
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${parks[0].latitude}&lon=${parks[0].longitude}&appid=${process.env.REACT_APP_API_SECRET_KEY}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

}