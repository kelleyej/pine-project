import FilteredParksCard from './FilteredParksCard';
import './FilteredParks.css';
import { Link } from 'react-router-dom';

export default function FilteredParks({test}){

const parkByState = test.map(t => {
   return (
    <Link to={`/region/${t.name}`}>
        <FilteredParksCard
            name={t.name}
            city={t.city}
            state={t.state}
            image={t.image}
       />
       </Link>
    )

})
return (
    <div >
        {parkByState}
    </div>
)
 
}