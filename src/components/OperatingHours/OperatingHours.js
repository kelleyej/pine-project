import OperatingHoursCard from "../OperatingHoursCard/OperatingHoursCard";
import './OperatingHours.css';
import PropTypes from 'prop-types';

export default function OperatingHours({parks}) {

    const hours = parks[0].operatingHours.map(hour => {
        return (
        <OperatingHoursCard
        description={hour.description}
        standardHours={hour.standardHours}
        />
        )
    })
    return (
        <div className='operating-hours'>
            {hours}
        </div>
    )
}

OperatingHours.propTypes = {
    parks: PropTypes.arrayOf(
        PropTypes.shape({
           operatingHours: PropTypes.arrayOf(
                PropTypes.shape({
                    standardHours: PropTypes.object,
                    description: PropTypes.string
                })
           )            
        })
    )
}
