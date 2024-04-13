import './Regions.css'
import { Link } from 'react-router-dom';

export default function Regions(){
    return (
        <main>
            <h2>Choose a region to explore National Parks...</h2>
            <div className='region-grid'>
                <Link to='/Alaska'><h2>Alaska</h2><img src="https://i.pinimg.com/736x/91/62/4f/91624fec2afa426222a0aaeb49d9df32.jpg"/></Link>
                <Link to='/Intermountain'><h2>Intermountain</h2><img src="https://i.ebayimg.com/images/g/lw8AAOSwTG1gVl1p/s-l1600.jpg" /></Link>
                <Link to='/Midwest'><h2>Midwest</h2><img src="https://thenewinquiry.com/app/uploads/2023/04/midwest-postcard-1200x820.jpeg"/></Link>
                <Link to='/National Capital'><h2>National Capital</h2><img src="https://www.nps.gov/common/uploads/grid_builder/culturallandscapes/crop16_9/10ED776E-1DD8-B71B-0BFC2F140CBC066D.jpg?width=640&quality=90&mode=crop"/></Link>
                <Link to='/Northeast'><h2>Northeast</h2><img src="https://i.insider.com/5cbdf995d2ce7822a70ee489?width=750&format=jpeg&auto=webp"/></Link>
                <Link to='/Pacific West'><h2>Pacific West</h2></Link>
                <Link to='/Southeast'><h2>Southeast</h2></Link>
                <Link to='/Pacific'><h2>Pacific</h2></Link>
            </div>
        </main>
    )
}