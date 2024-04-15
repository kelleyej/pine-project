import './StateCard.css';

export default function StateCard({location, filterParks}){
  
    return (
        <div onClick={event => filterParks(event.target.id)}>
            <h3 id={location} className='state'>{location}</h3>
        </div>
    )
}