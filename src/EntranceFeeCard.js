import './EntranceFeeCard.css'

export default function EntranceFeeCard({title, fee, description}) {
    return (
        <section>
            <p>{title}: ${fee}</p>
            <p>{description}</p>
        </section>
    )
}