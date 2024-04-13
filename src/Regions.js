import './Regions.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Regions(){
    const [parks, setAllParks] = useState([])
const url = ['https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu',
'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=50',
'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=100',
'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=150',
'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=200',
'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=250',
'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=300',
'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=350',
'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=400',
'https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=450'
]

useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu')
    .then(res => res.json())
    .then(data => setAllParks([...parks, data.data]))
 
}, [])  
  
useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=50')
    .then(res => res.json())
    .then(data => setAllParks([...parks, data.data]))
}, [])  

    console.log('PARKS:', parks) 
useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=100')
    .then(res => res.json())
    .then(data => console.log(data.data))
}, [])  
    
useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=150')
    .then(res => res.json())
    .then(data => console.log(data.data))
}, [])  
    
useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=200')
    .then(res => res.json())
    .then(data => console.log(data.data))
}, [])  

useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=250')
    .then(res => res.json())
    .then(data => console.log(data.data))
}, [])  
    
useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=300')
    .then(res => res.json())
    .then(data => console.log(data.data))
}, [])  
useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=350')
    .then(res => res.json())
    .then(data => console.log(data.data))
}, [])  

useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=400')
    .then(res => res.json())
    .then(data => console.log(data.data))
}, [])  
    
useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=450')
    .then(res => res.json())
    .then(data => console.log(data.data))
}, [])  

    return (
        <main>
            <h2>Choose a region to explore National Parks...</h2>
            <div className='region-grid'>
                <Link to='/Alaska'><h2>Alaska</h2><img src="https://i.pinimg.com/736x/91/62/4f/91624fec2afa426222a0aaeb49d9df32.jpg"/></Link>
                <Link to='/Intermountain'><h2>Intermountain</h2><img src="https://i.ebayimg.com/images/g/lw8AAOSwTG1gVl1p/s-l1600.jpg" /></Link>
                <Link to='/Midwest'><h2>Midwest</h2><img src="https://thenewinquiry.com/app/uploads/2023/04/midwest-postcard-1200x820.jpeg"/></Link>
                <Link to='/National Capital'><h2>National Capital</h2><img src="https://i.ebayimg.com/images/g/REQAAOSwvTRino57/s-l1200.webp"/></Link>
                <Link to='/Northeast'><h2>Northeast</h2><img src="https://vintagepostcardboutique.com/cdn/shop/products/grassypond_1200x1200.jpg?v=1551885357"/></Link>
                <Link to='/Pacific West'><h2>Pacific West</h2><img src="https://i.pinimg.com/736x/33/a6/49/33a6491aa16471074b7fd6894993ebe4.jpg"/></Link>
                <Link to='/Southeast'><h2>Southeast</h2><img src="https://i.ebayimg.com/images/g/H54AAOSweohfdz8W/s-l1200.webp"/></Link>
                <Link to='/Pacific'><h2>Pacific</h2><img src="https://storage.googleapis.com/hippostcard/p/3382134aeb4712ccb16e07806cae0116.jpg"/></Link>
            </div>
        </main>
    )
}