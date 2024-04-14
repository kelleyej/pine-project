import './State.css';
import StateCard from './StateCard';

export default function State({states}){

const eachState = states.map(location => {
    return (
        <StateCard
        location={location}
        />
    )
})
    return (
        <div className="state-grid">
            {states.length > 1 && eachState}
        </div>
    )
    
}