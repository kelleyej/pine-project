
export default function FilteredParksCard({name, city, state, image}){
    return (
        <section>
        <h2>{name}</h2>
        <p>{city}, {state}</p>
        <img className='park' src={image} />
        </section>
    )
}