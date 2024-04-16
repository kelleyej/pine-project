import FilteredParksCard from './FilteredParksCard';
import './FilteredParks.css';

export default function FilteredParks({test}){

const parkByState = test.map(t => {
   return (
        <FilteredParksCard
            name={t.name}
            city={t.city}
            state={t.state}
            image={t.image}
       />
    )

})
return (
    <div >
        {parkByState}
    </div>
)
 
}