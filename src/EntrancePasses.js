import EntrancePassCard from './EntrancePassCard';

export default function EntrancePasses({parks}){

    const passes = parks[0].entrancePasses.map(pass => {
         return (
      <EntrancePassCard
            title={pass.title}
            cost={pass.cost}
            description={pass.description}
      />
    )
    })
    return (
        <div>
            {passes}
        </div>
    )
   
}