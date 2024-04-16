import OperatingHoursCard from "./OperatingHoursCard";

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
        <div>
            {hours}
        </div>
    )
   
}