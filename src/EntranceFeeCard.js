import './EntranceFeeCard.css'

export default function EntranceFeeCard({title, cost, description}) {
    return (
        <section>
            <p>{title}: ${cost}</p>
            <p>{description}</p>
        </section>
    )
}