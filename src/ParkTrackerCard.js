import './ParkTrackerCard.css';

export default function ParkTrackerCard({name, city, state, image}){
    return (
        <div>
            <p>{name}</p>
            {/* <p>{city}, {state}</p> */}
            <img className='tracker-image' src={image}/> 
            <input type='radio' />
        </div>
     
    )
}