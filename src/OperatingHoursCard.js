
export default function OperatingHoursCard({description, standardHours}) {

    return (
        <div>
            <p>{description}</p>
            <p>Monday: {standardHours.monday}</p>
            <p>Tuesday: {standardHours.tuesday}</p>
            <p>Wednesday: {standardHours.wednesday}</p>
            <p>Thursday: {standardHours.thursday}</p>
            <p>Friday: {standardHours.friday}</p>
            <p>Saturday: {standardHours.saturday}</p>
            <p>Sunday: {standardHours.sunday}</p>
        </div>
    )
}