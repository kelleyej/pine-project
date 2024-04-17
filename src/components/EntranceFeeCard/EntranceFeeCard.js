import './EntranceFeeCard.css';
import PropTypes from 'prop-types';

export default function EntranceFeeCard({title, cost, description}) {
    return (
        <section>
            <p>{title}: ${cost}</p>
            <p>{description}</p>
        </section>
    )
}

EntranceFeeCard.propTypes = {
    title: PropTypes.string.isRequired, 
    cost: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired
}