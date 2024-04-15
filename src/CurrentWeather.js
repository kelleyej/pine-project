import { useEffect } from 'react';

export default function CurrentWeather({parks}){
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${parks[0].latitude}&lon=${parks[0].longitude}&appid=f962fe6dc01d07061642d772a8ee9592`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

}