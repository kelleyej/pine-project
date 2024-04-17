import OperatingHoursCard from "./OperatingHoursCard";
import './OperatingHours.css';

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