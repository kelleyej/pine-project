import './Park.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Park({name, state, image, city}) {
    const [loaded, setLoaded] = useState(false)

         return (
        <section className="state-widget">
            <img style={{display: !loaded && 'none'}} className='park' src={image} onLoad={() => setLoaded(true)}/>
{(!loaded) && <img src="https://natureforall.tiged.org/images/tiged/docs/class/225917.gif"/>}
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