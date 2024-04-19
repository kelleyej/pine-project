import PropTypes from 'prop-types';
import './OperatingHoursCard.css';

export default function OperatingHoursCard({description, standardHours}) {

    return (
        <div className='hours-container'>
            <p className='hours-description'>{description}</p>
            <p className='day'>Monday: {standardHours.monday}</p>
            <p className='day'>Tuesday: {standardHours.tuesday}</p>
            <p className='day'>Wednesday: {standardHours.wednesday}</p>
            <p className='day'>Thursday: {standardHours.thursday}</p>
            <p className='day'>Friday: {standardHours.friday}</p>
            <p className='day'>Saturday: {standardHours.saturday}</p>
            <p className='day'>Sunday: {standardHours.sunday}</p>
        </div>
    )
}

OperatingHoursCard.propTypes = {
    description: PropTypes.string.isRequired, 
    standardHours: PropTypes.object.isRequired
}