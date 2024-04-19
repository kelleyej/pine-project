import './ParkDetails';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import EntranceFees from '../EntranceFees/EntranceFees';
import OperatingHours from '../OperatingHours/OperatingHours';
import EntrancePasses from '../EntrancePasses/EntrancePasses';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './ParkDetails.css';
import NotFound from '../NotFound/NotFound';

export default function ParkDetails({parks}){
    const parkName = useParams().park
    const [specificPark, setSpecificPark] = useState([])
    const [error, setError] = useState(null)
    const [badRoute, setBadRoute] = useState(false)

    useEffect(() => {
       const badPath = parks.map(park => park.name)
    if(!badPath.includes(parkName)){
        setBadRoute(true)
    } 
    }, [])
    
   
    const parkCodes = ['acad', 'arch', 'badl', 'bibe', 'bisc', 'blca', 'brca', 'cany', 'care', 'cave', 'chis', 'cong', 
    'crla', 'cuva', 'deva', 'drto', 'dena', 'ever', 'jeff', 'gaar', 'glac', 'glba', 'grca', 'grte', 'grba', 'grsa', 'grsm', 
    'gumo', 'hale', 'havo', 'hosp', 'indu', 'isro', 'jotr', 'katm', 'kefj', 'kova', 'lacl', 'lavo', 'maca', 'meve', 
    'mora', 'neri', 'noca', 'npsa', 'olym', 'pefo', 'pinn', 'redw', 'romo', 'sagu', 'seki', 'shen', 'thro', 'viis', 'voya', 'whsa', 'wica', 'wrst',
    'yell', 'yose', 'zion']  

    useEffect(() => {
         fetch(`https://developer.nps.gov/api/v1/parks/?api_key=${process.env.REACT_APP_API_KEY}&parkCode=${parkCodes}&limit=62`)

    .then(res => {
        if(!res.ok){
           setError('Something went wrong. Please try again later')
        } else {
            return res.json()
        }
    })
    .then(data => {
        setSpecificPark(findPark(data.data))
    })
    .catch(error => setError(error.message))
    }, [])

    function findPark(allParks){
        const specificPark = allParks.filter(park => park.fullName === parkName)
        return specificPark; 
    }

    if(error){
        return (
            <ErrorMessage error={error}/>
        )
    }

    if(badRoute){
        return (
            <NotFound />
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
                    <a className='link' href={specificPark[0].directionsUrl}>Link to Directions</a>
                <h1 className='park-fullname'>{specificPark[0].fullName} </h1>
                <a className='link' href={specificPark[0].url}>Link to Official Site</a> 
                </div>
                <p>Phone Number: {specificPark[0].contacts.phoneNumbers[0].phoneNumber} ({specificPark[0].contacts.phoneNumbers[0].type})</p>
                <div className='description-container'>
                    <h4 className='description'>{specificPark[0].description}</h4> 
                </div>
                <div className='info-grid'>
                    <CurrentWeather parks={specificPark}/>  
                    <img src={specificPark[0].images[0].url}/>
                    <p className='weather-info'>{specificPark[0].weatherInfo}</p>
                </div>
                       
                {/* <OperatingHours parks={specificPark}/>
                <EntrancePasses parks={specificPark}/>
                <EntranceFees parks={specificPark}/> */}
            </section>
        )
    }
}