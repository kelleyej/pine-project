
// import './ParkTracker.css';
// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import ParkTrackerCard from './ParkTrackerCard';

// export default function ParkTracker({parks}){
//     const allParks = parks.map((park, index) => {
//         return (
//                 <ParkTrackerCard
//                 key={park.id}
//                 id={park.id}
//                 name={park.name}
//                 index={index}
//                 parks={parks}
//                 />
//             )

//     })
//     return (
//         <div>
//             {allParks}
//         </div>
//     )
   
// }

// // export default function ParkTracker({parks}){
// //     const [checkedState, setCheckedState] = useState([])

// //  useEffect(() => {
//         // const test = new Array(parks.length).fill(false)
// //         setCheckedState(test)     
// //     }, [parks])

    // useEffect(() => {
    //     const data = window.sessionStorage.getItem('trackedParks')

    //    setCheckedState(JSON.parse(data))
    // }, [])

    // useEffect(() => {
    //     window.sessionStorage.setItem('trackedParks', JSON.stringify(checkedState))
      
    // }, [checkedState])

// //    function handleOnChange(position){
//         //  const updatedCheckedState = checkedState.map((item, index) =>
//         //  index === position ? !item : item
//         // );
  
//         // setCheckedState(updatedCheckedState);
// //     }

// //     let number = checkedState.filter(state => state === true)
// //         const park = parks.map((area, index) => {
// //             if(checkedState[index]) {
// //             return (
// //                 <div className='park-container' key={area.key}>
// //                     <p className='park-tracker-name'>{area.name}</p>
// //                     <img className='visited-image' src="https://cdn.pixabay.com/photo/2012/04/13/11/16/pine-31913_640.png"/> 
// //                     <input id={area.id} name={area.name} type='checkbox' checked={checkedState[index]} onChange={() => handleOnChange(index)} />
// //                 </div>
// //             )
// //             } else {
// //                 return (
// //                     <div className='park-container' key={area.key}> 
// //                     <p className='park-tracker-name-second'>{area.name}</p>
// //                     <img className='tracker-image' src="https://images.vexels.com/media/users/3/136584/isolated/preview/96086ee49328e64825862a853297d4e2-pine-tree-silhouette.png"/> 
// //                     <input id={area.id} type='checkbox' checked={checkedState[index]} onChange={() => handleOnChange(index)} />
// //                 </div>
// //                 )
// //             }
// //         })

// //     return (
// //         <div className='park-tracker-container'>
// //              <h1 className='park-tracker-heading'>Park Tracker</h1>
// //              <p className='counter'>You have visited {number.length} National Parks-- you have {63- (number.length)} left to go!</p>
// //         <div className='tracker-grid'>
// //             {park}
// //         </div> 
// //         </div>  
// //     )
// // }    

// ParkTracker.propTypes = {
//     parks: PropTypes.arrayOf(
//         PropTypes.shape({
//            id: PropTypes.number.isRequired, 
//            name: PropTypes.string.isRequired,
//            state: PropTypes.string.isRequired,
//            region: PropTypes.string.isRequired,
//            city: PropTypes.string.isRequired,
//            image: PropTypes.string.isRequired,
//            visited: PropTypes.bool
//         })
//     )
// }

import { useState, useEffect } from 'react';
import './ParkTracker.css';

export default function ParkTracker({parks}){
    const [visited, setVisited] = useState(getVisitedParks())

    function trackParks(event){
        let parkName = event.target.value
        console.log(event.target.checked)
        if(event.target.checked){
            setVisited([...visited, parkName])
        } else {
            setVisited(visited.filter(park => park !== parkName))
        }
    }

    function getVisitedParks(){
        const trackedParks = localStorage.getItem('visited')
        const saved = JSON.parse(trackedParks)
        return saved || []
    }

    useEffect(() => {
        const trackedParks = JSON.stringify(visited)
        localStorage.setItem('visited', trackedParks)
    }, [visited])

console.log("parks:", parks)
console.log('visitedParks:', visited)
  const park = parks.map(park => {
    if(visited.includes(park.name)){
             return (
        <div>
            <p className='park-tracker-name'>{park.name}</p>
            <input type="checkbox" id={park.id} checked='true' value={park.name} onChange={(event) => trackParks(event)}/>
        </div>
    )
    } else {
        return (
            <div>
            <p>{park.name}</p>
            <input type="checkbox" id={park.id} value={park.name} onChange={(event) => trackParks(event)}/>
        </div>
        )
    }
 
  })
  return (

    <div>{park}</div>
  )
  
}