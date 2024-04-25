
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import EntranceFees from '../EntranceFees/EntranceFees';
import OperatingHours from '../OperatingHours/OperatingHours';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NotFound from '../NotFound/NotFound'
import './ParkDetails.css';
import parkCodes from '../../data/parkCodes';

export default function ParkDetails(){
    const parkName = useParams().park
    const [specificPark, setSpecificPark] = useState([])
    const [error, setError] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch(`https://developer.nps.gov/api/v1/parks/?api_key=${process.env.REACT_APP_API_KEY}&parkCode=${parkName}&limit=62`)
        .then(res => {
            if(!res.ok){
            setError('Something went wrong. Please try again later')
            } else {
                return res.json()
            }
        })
    .then(data => {
        setSpecificPark(data.data)
    })
    .catch(error => setError(error.message))
    }, [])

   if(!parkCodes.includes(parkName)){
        return (
            <NotFound />
        )
    }

    if(error){
        return (
            <ErrorMessage error={error}/>
        )
    }
 console.log(loaded)
    if(!specificPark.length){
        return (
            <Loading />
        )
    } else {
        return (
            <section className='park-details'>
                <div className='heading'>
                    <a className='link' href={specificPark[0].directionsUrl}>Link to Directions  </a>
                    <h1 className='park-fullname'>{specificPark[0].fullName} </h1>  
                    <a className='link' href={specificPark[0].url}>Link to Official Site </a> 
                </div>
                <p>Phone Number: {specificPark[0].contacts.phoneNumbers[0].phoneNumber} ({specificPark[0].contacts.phoneNumbers[0].type})</p>
                <div className='description-container'>
                    <h4 className='description'>{specificPark[0].description}</h4> 
                </div>
                <div className='info-grid'>
                    <CurrentWeather parks={specificPark}/>  
                    <img onLoad={() => setLoaded(true)} style={{display: !loaded && 'none'}} className='details-image' src={specificPark[0].images[0].url}/>
                    {(!loaded) && <img src="https://media0.giphy.com/media/eL46FfEZXz9DG4gmgi/giphy.gif?cid=6c09b952kyfpy9ej7y01dedity8yxpdctcyqxqngdmje9hjl&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" />}
                    <p className='weather-info'>{specificPark[0].weatherInfo}</p>
                </div>
                <img className='mountain' src="https://media.istockphoto.com/id/1351811592/pt/vetorial/green-forest-pine-trees-silhouette-landscape.jpg?s=170667a&w=0&k=20&c=sK4AKdGhXXsGI0rS5Qx8Ad4PxgwokBWTiPJHEUW___E="/>    
                <h2>More information on operating hours and entrance fees:</h2>  
                <OperatingHours parks={specificPark}/>
                <EntranceFees parks={specificPark}/>
                <footer />
            </section>
        )
    }
}

