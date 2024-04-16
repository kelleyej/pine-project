import './Park.css';

export default function Park({name, state, image, city, test}) {
    
          return (
        <section className="state-widget">
        <img className='park' src={image} />
        <h2 className='park-name'>{name}</h2>
        <p className='location'>{city}, {state}</p>
        </section>
    )

}