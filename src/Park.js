import './Park.css';
import FilteredParks from './FilteredParks';

export default function Park({name, state, image, city, test}) {
    
    // if(test){
     
    //  return (
  
    //     test.map(t => {
    //         return (
    //           <FilteredParks 
    //           name={t.name}
    //           city={t.city}
    //           state={t.state}
    //           image={t.image}
    //           />
    //         )
    //     })
        
    //  )
         
     
    // } else {
          return (
        <section className="state-widget">
        <h2>{name}</h2>
        <p>{city}, {state}</p>
        <img className='park' src={image} />
        </section>
    )
    // } 
}