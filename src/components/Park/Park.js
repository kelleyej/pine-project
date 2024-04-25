import './Park.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Park({name, state, image, city}) {
    const [loaded, setLoaded] = useState(false)

         return (
        <section className="state-widget">
            <img className='park' src={image} onLoad={() => setLoaded(true)}/>
{(!loaded) && <img className='park' src="https://loading.io/assets/mod/spinner/spinner/lg.gif"/>}
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