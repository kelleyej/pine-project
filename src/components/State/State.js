import './State.css';
import StateCard from '../../StateCard';
import PropTypes from 'prop-types';

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
        <div>
<div className="state-grid">
            {states.length > 1 && eachState}
              </div>

        </div>
        
            
      
    )
}

State.propTypes = {
    filterParks: PropTypes.func.isRequired,
    states: PropTypes.arrayOf(PropTypes.string).isRequired,
    parkByRegion: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, 
            name: PropTypes.string.isRequired, 
            state: PropTypes.string.isRequired, 
            region: PropTypes.string.isRequired, 
            image: PropTypes.string.isRequired
        })
    )
}