import FilteredParksCard from '../FilteredParksCard/FilteredParksCard';
import './FilteredParks.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function FilteredParks({filterStates}){

    const parkByState = filterStates.map(state => {
    return (
            <Link to={`/region/${state.parkCode}`}>
                <FilteredParksCard
                    name={state.name}
                    city={state.city}
                    state={state.state}
                    image={state.image}
                />
            </Link>
        )
    })

    return (
        <div className='state-park-grid'>
            {parkByState}
        </div>
    )
}

FilteredParks.propTypes = {
    filterStates: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired, 
            city: PropTypes.string.isRequired, 
            image: PropTypes.string.isRequired, 
            name: PropTypes.string.isRequired, 
            region: PropTypes.string.isRequired, 
            state: PropTypes.string.isRequired,
            parkCode: PropTypes.string.isRequired
        })
    )
}


