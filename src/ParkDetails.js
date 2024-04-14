import './ParkDetails';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ParkDetails(){
    const parkName = useParams().park
    const [parks, setParks] = useState([])

    const parkCodes = ['acad', 'arch', 'badl', 'bibe', 'bisc', 'blca', 'brca', 'cany', 'care', 'cave', 'chis', 'cong', 
    'crla', 'cuva', 'deva', 'drto', 'dena', 'ever', 'jeff', 'gaar', 'glac', 'glba', 'grca', 'grte', 'grba', 'grsa', 'grsm', 
    'gumo', 'hale', 'havo', 'hosp', 'indu', 'isro', 'jotr', 'katm', 'kefj', 'kova', 'lacl', 'lavo', 'maca', 'meve', 
    'mora', 'neri', 'noca', 'npsa', 'olym', 'pefo', 'pinn', 'redw', 'romo', 'sagu', 'seki', 'shen', 'thro', 'viis', 'voya', 'whsa', 'wica', 'wrst',
    'yell', 'yose', 'zion']  
    
    useEffect(() => {
         fetch(`https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&parkCode=${parkCodes}&limit=62`)

    .then(res => res.json())
    .then(data => setParks(findPark(data.data)))
    }, [])
    console.log(parks[0].fullName)
   
    function findPark(allParks){
        const specificPark = allParks.filter(park => park.fullName === parkName)
        return specificPark; 
    }

    return (
        <div>
            <h1>{parks[0].fullName}</h1>
        </div>
    )
}