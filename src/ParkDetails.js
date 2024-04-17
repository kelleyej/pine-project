import './ParkDetails';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import EntranceFees from './EntranceFees';
import OperatingHours from './OperatingHours';
import EntrancePasses from './EntrancePasses';
import CurrentWeather from './CurrentWeather';
import './ParkDetails.css';

export default function ParkDetails(){
    const parkName = useParams().park
    const [parks, setParks] = useState([])
 
    const parkCodes = ['acad', 'arch', 'badl', 'bibe', 'bisc', 'blca', 'brca', 'cany', 'care', 'cave', 'chis', 'cong', 
    'crla', 'cuva', 'deva', 'drto', 'dena', 'ever', 'jeff', 'gaar', 'glac', 'glba', 'grca', 'grte', 'grba', 'grsa', 'grsm', 
    'gumo', 'hale', 'havo', 'hosp', 'indu', 'isro', 'jotr', 'katm', 'kefj', 'kova', 'lacl', 'lavo', 'maca', 'meve', 
    'mora', 'neri', 'noca', 'npsa', 'olym', 'pefo', 'pinn', 'redw', 'romo', 'sagu', 'seki', 'shen', 'thro', 'viis', 'voya', 'whsa', 'wica', 'wrst',
    'yell', 'yose', 'zion']  
    
    useEffect(() => {
         fetch(`https://developer.nps.gov/api/v1/parks/?api_key=${process.env.REACT_APP_API_KEY}&parkCode=${parkCodes}&limit=62`)

    .then(res => res.json())
    .then(data => setParks(findPark(data.data)))
    }, [])
  
    function findPark(allParks){
        const specificPark = allParks.filter(park => park.fullName === parkName)
        return specificPark; 
    }

    if(!parks.length){
        return (
            <Loading />
        )
    } else {
        return (
            <section>
                <div className='heading'>
                    <a href={parks[0].directionsUrl}>Link to Directions</a>
                <h2>{parks[0].fullName} </h2>
                <a href={parks[0].url}>Link to Official Site</a> 
                </div>
                <p>Phone Number: {parks[0].contacts.phoneNumbers[0].phoneNumber} ({parks[0].contacts.phoneNumbers[0].type})</p>
                  <h3 className='description'>{parks[0].description}</h3> 
            
                        <div className='info-grid'>
                            <CurrentWeather parks={parks}/>  
                             <img src={parks[0].images[0].url}/>
                        <p className='weather-info'>{parks[0].weatherInfo}</p>
                         
                        </div>
                       
                <OperatingHours parks={parks}/>
                <EntrancePasses parks={parks}/>
                <EntranceFees parks={parks}/>
            </section>
        )
    }
}