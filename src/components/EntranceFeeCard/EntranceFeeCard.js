import './EntranceFeeCard.css';
import PropTypes from 'prop-types';

export default function EntranceFeeCard({title, cost, description}) {
    return (
        <section className='fee-container'>
            <p className='fee-title'>{title}: ${cost}</p>
            <p className='fee-description'>{description}</p>
        </section>
    )
}

EntranceFeeCard.propTypes = {
    title: PropTypes.string, 
    cost: PropTypes.string, 
    description: PropTypes.string
}