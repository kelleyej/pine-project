import './EntranceFees.css';
import EntranceFeeCard from './EntranceFeeCard';

export default function EntranceFees({parks}) {

  const fees = parks[0].entranceFees.map(fee => {
      return (
        <section>
            <EntranceFeeCard
            title={fee.title}
            cost={fee.cost}
            description={fee.description}
            />
        </section>
        
    )
   })
   return (
    <div className='fee-grid'>
        {fees}
    </div>
   )
 
  
}