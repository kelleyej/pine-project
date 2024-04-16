import './StateCard.css';

export default function StateCard({location, filterParks}){

    return (     
            <div className='state-container' onClick={event => filterParks(event.target.id)}>
            <h3 id={location} className='state'>{location} </h3>
            <img className='pine' src="https://img.freepik.com/premium-vector/vintage-pine-tree-illustration_722738-97.jpg"/>
        </div>  

    )
}