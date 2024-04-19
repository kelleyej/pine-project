import './Park.css';
import PropTypes from 'prop-types'

export default function Park({name, state, image, city}) {

    return (
        <section className="state-widget">
            <img className='park' src={image} />
            <h2 className='park-name'>{name}</h2>
            <p className='location'>{city}, {state}</p>
        </section>
    )
}

Park.propTypes = {
    name: PropTypes.string.isRequired, 
    state: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired, 
    city: PropTypes.string.isRequired,
}