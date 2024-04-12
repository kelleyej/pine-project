import locations from './LocationInfo';
import { useParams } from 'react-router-dom';
import Park from './Park';

export default function RegionParks(){
    const area = useParams().region
    const parkByRegion = locations.filter(location => {
        return location.region === area
    })
    
    const nationalPark = parkByRegion.map(park => {
        return (
            <Park 
            name={park.name}
            state={park.state}
            />
        )
    })

    return (
        <div>
            {nationalPark}
        </div>
    )

}