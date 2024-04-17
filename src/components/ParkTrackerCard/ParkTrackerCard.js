// // import './ParkTrackerCard.css';
// import { useState, useEffect, prevState } from 'react';
// // import PropTypes from 'prop-types';

// export default function ParkTrackerCard({parks, id, name, index, checkedState, setCheckedState, handleOnChange}){

//     console.log(checkedState)

// // let number = checkedState.filter(state => state === true)
// //         const park = parks.map((area, index) => {
// //             if(checkedState[index]) {

// //   return (
       
       
// //         <div className='park-container' >
// //             <p className='park-tracker-name'>{name}</p>
// //             <img className='visited-image' src="https://cdn.pixabay.com/photo/2012/04/13/11/16/pine-31913_640.png"/> 
// //             <input id={id} name={name} type='checkbox' checked={checkedState[index]} onChange={() => handleOnChange(index)} />
// //         </div>
      
// //             ) 

// parks.map((area, index) => {
//     if(checkedState[index]) {
//     return (


// <div className='park-container' >
//     <p className='park-tracker-name'>{name}</p>
//     <img className='visited-image' src="https://cdn.pixabay.com/photo/2012/04/13/11/16/pine-31913_640.png"/> 
//     <input id={id} name={name} type='checkbox' checked={checkedState[index]} onChange={() => handleOnChange(index)} />
// </div>

//     ) } else {
//         return (
//             <div className='park-container' > 
//             <p>{name}</p>
//             <img className='tracker-image' src="https://images.vexels.com/media/users/3/136584/isolated/preview/96086ee49328e64825862a853297d4e2-pine-tree-silhouette.png"/> 
//             <input id={id} type='checkbox' checked={checkedState[index]} onChange={() => handleOnChange(index)} />
//         </div>
//         )
//     }
// })


          
//         // } else {
//         //         return (
//         //             <div className='park-container' > 
//         //             <p>{name}</p>
//         //             <img className='tracker-image' src="https://images.vexels.com/media/users/3/136584/isolated/preview/96086ee49328e64825862a853297d4e2-pine-tree-silhouette.png"/> 
//         //             <input id={id} type='checkbox' checked={checkedState[index]} onChange={() => handleOnChange(index)} />
//         //         </div>
//         //         )
//         //     }
//         // })
// }

// export default function ParkTrackerCard({name, id, visited, parks, area, index}){
// // const [allParks, setAllParks] = useState([])
// // const [checked, setChecked] = useState(false)
// // const [checkedState, setCheckedState] = useState(new Array(parks.length).fill(false))


//       console.log(checkedState)
//     //  if(checked){
//     //     console.log(allParks)
//     //     let test = parks.filter(park => park.id === id)
//     //     setAllParks([test])
//     // } else {
//     //     console.log('not working')
//     // }



//     const handleOnChange = (position) => {
//         const updatedCheckedState = checkedState.map((item, index) =>
//           index === position ? !item : item
//         );
      
//         setCheckedState(updatedCheckedState);
      
//     }

//     // if(checked){

//          return (
//         <div className='park-container'>
//             <p className='park-tracker-name'>{name}</p>
//             <img className='tracker-image' src="https://cdn.pixabay.com/photo/2012/04/13/11/16/pine-31913_640.png"/> 
//             <input id={id} name={name} type='checkbox' checked={checkedState[index]} onChange={() => handleOnChange(index)} />
//         </div>
//     )
// // onClick={event => setChecked(event.target.checked)}
    // } else {

    //     return (
    //         <div className='park-container'> 
    //         <p>{name}</p>
    //         <img className='tracker-image' src="https://images.vexels.com/media/users/3/136584/isolated/preview/96086ee49328e64825862a853297d4e2-pine-tree-silhouette.png"/> 
    //         <input id={id} type='checkbox' onClick={event => setChecked(event.target.checked)} />
    //     </div>
    //     )
    // }
    
// }

// ParkTrackerCard.propTypes = {
//     name: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired
// }