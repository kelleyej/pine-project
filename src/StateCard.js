import './StateCard.css';
import PropTypes from 'prop-types';
import {useParams, Link} from 'react-router-dom';

export default function StateCard({location, filterParks}){

    return ( 
        // <Link to={`/states/${location}`}>
            <div className='state-container' onClick={event => filterParks(event.target.id)}>
            <h3 id={location} className='state'>{location} </h3>
            <img id={location} className='pine' src="https://img.freepik.com/premium-vector/vintage-pine-tree-illustration_722738-97.jpg"/>
        </div>  
        // </Link>
    )
}

StateCard.propTypes = {
    filterParks: PropTypes.func.isRequired, 
    location: PropTypes.string.isRequired
}