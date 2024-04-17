import FilteredParksCard from '../FilteredParksCard/FilteredParksCard';
import './FilteredParks.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function FilteredParks({test}){

const parkByState = test.map(t => {
   return (
    <Link to={`/region/${t.name}`}>
        <FilteredParksCard
            name={t.name}
            city={t.city}
            state={t.state}
            image={t.image}
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
    test: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, 
            city: PropTypes.string.isRequired, 
            image: PropTypes.string.isRequired, 
            name: PropTypes.string.isRequired, 
            region: PropTypes.string.isRequired, 
            state: PropTypes.string.isRequired
        })
    )
}


