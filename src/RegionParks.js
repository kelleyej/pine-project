import locations from './LocationInfo';
import { useParams } from 'react-router-dom';
import Park from './Park';
import './RegionParks.css';
import State from './State';

export default function RegionParks(){
    const area = useParams().region
    const parkByRegion = locations.filter(location => {
        return location.region === area
    })
    
    const nationalPark = parkByRegion.map(park => {
        return (
            <Park 
            key={park.id}
            name={park.name}
            state={park.state}
            image={park.image}
            city={park.city}
            />
        )
    })

    return (
        <main>
        <State />
        <div className='park-grid'>
            {nationalPark}
        </div> 
        </main>
       
    )

}