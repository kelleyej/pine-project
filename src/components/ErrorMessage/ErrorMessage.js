import './ErrorMessage.css';
import PropTypes from 'prop-types';

export default function ErrorMessage({error}){

    return (
        <div className='error-container'>
        <h1>Awww, nuts!</h1>
        <p className='error-message'>{error}: please try again later.</p>
        <img className='squirrel' src="https://i.pinimg.com/736x/22/b2/f0/22b2f04cfe1fe936dc8c224deb4a49a4.jpg"/> 
        </div>
    )
}

ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired
}