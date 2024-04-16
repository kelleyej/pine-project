import FilteredParksCard from './FilteredParksCard';

export default function FilteredParks({test}){
console.log(test)
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
    <div className='park-state-grid'>
        {parkByState}
    </div>
)
 
}