import './Park.css';

export default function Park({name, state, image, city, test}) {
    
          return (
        <section className="state-widget">
        <h2>{name}</h2>
        <p>{city}, {state}</p>
        <img className='park' src={image} />
        </section>
    )

}