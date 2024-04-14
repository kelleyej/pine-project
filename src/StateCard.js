import './StateCard.css'

export default function StateCard({location}){
    return (
        <div>
            <h3 className='state'>{location}</h3>
        </div>
    )
}