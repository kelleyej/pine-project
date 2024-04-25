import './Park.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Park({name, state, image, city}) {
    const [loaded, setLoaded] = useState(false)

         return (
        <section className="state-widget">
            <img className='park' src={image} onLoad={() => setLoaded(true)}/>
{(!loaded) && <img src="https://media4.giphy.com/media/DkGoE0YPSLSyqKnGN4/200w.gif?cid=6c09b952k549mdmihynkxa65lauw91p1o6gjuprm3gh5halb&ep=v1_gifs_search&rid=200w.gif&ct=g"/>}
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