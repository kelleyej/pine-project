import PropTypes from 'prop-types';

export default function FilteredParksCard({name, city, state, image}){
    return (
        <section> 
            <img className='park' src={image} />
            <h2 className='park-name'>{name}</h2>
            <p className="location">{city}, {state}</p>
        </section>
    )
}

FilteredParksCard.propTypes = {
    name: PropTypes.string.isRequired, 
    city: PropTypes.string.isRequired, 
    state: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired
}