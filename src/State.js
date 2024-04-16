import './State.css';
import StateCard from './StateCard';

export default function State({states, filterParks, parkByRegion}){
    
const eachState = states.map(location => {
    return (
        <StateCard
        location={location}
        filterParks={filterParks}
        parkByRegion={parkByRegion}
        />
    )
})
    return (
        <div className="state-grid">
            {states.length > 1 && eachState}
        </div>
    )
    
}