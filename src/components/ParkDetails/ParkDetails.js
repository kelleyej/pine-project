
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import EntranceFees from '../EntranceFees/EntranceFees';
import OperatingHours from '../OperatingHours/OperatingHours';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NotFound from '../NotFound/NotFound'
import './ParkDetails.css';

export default function ParkDetails(){
    const parkName = useParams().park
    const [specificPark, setSpecificPark] = useState([])
    const [error, setError] = useState(null)

    const parkCodes = ['acad', 'arch', 'badl', 'bibe', 'bisc', 'blca', 'brca', 'cany', 'care', 'cave', 'chis', 'cong', 
    'crla', 'cuva', 'deva', 'drto', 'dena', 'ever', 'jeff', 'gaar', 'glac', 'glba', 'grca', 'grte', 'grba', 'grsa', 'grsm', 
    'gumo', 'hale', 'havo', 'hosp', 'indu', 'isro', 'jotr', 'katm', 'kefj', 'kova', 'lacl', 'lavo', 'maca', 'meve', 
    'mora', 'neri', 'noca', 'npsa', 'olym', 'pefo', 'pinn', 'redw', 'romo', 'sagu', 'seki', 'shen', 'thro', 'viis', 'voya', 'whsa', 'wica', 'wrst',
    'yell', 'yose', 'zion']  

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
                    <img className='details-image' src={specificPark[0].images[0].url}/>
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

