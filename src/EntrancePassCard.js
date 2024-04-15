
export default function EntrancePassCard({title, cost, description}) {
    return (
        <div>
            <p>{title}: ${cost}</p>
            <p>{description}</p>
        </div>
    )
}