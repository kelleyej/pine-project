
export default function FilteredParksCard({name, city, state, image}){
    return (
        <section> 
        <img className='park' src={image} />
        <h2 className='park-name'>{name}</h2>
        <p className="location">{city}, {state}</p>
        </section>
    )
}