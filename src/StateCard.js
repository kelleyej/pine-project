import './StateCard.css';
import PropTypes from 'prop-types';

export default function StateCard({location, filterParks}){

    return (     
            <div className='state-container' onClick={event => filterParks(event.target.id)}>
            <h3 id={location} className='state'>{location} </h3>
            <img id={location} className='pine' src="https://img.freepik.com/premium-vector/vintage-pine-tree-illustration_722738-97.jpg"/>
        </div>  
  

    )
}

StateCard.propTypes = {
    filterParks: PropTypes.func.isRequired, 
    location: PropTypes.string.isRequired
}