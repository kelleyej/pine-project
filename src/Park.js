export default function Park({name, state, image, city}) {
    return (
        <section>
        <h2>{name}</h2>
        <p>{city}, {state}</p>
        <img src={image} />
        </section>
    )
}