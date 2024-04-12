import './Regions.css'
import { Link } from 'react-router-dom';

export default function Regions(){
    return (
        <main>
            <h2>Choose a region to explore National Parks...</h2>
            <div className='region-grid'>
                <Link to='/Alaska'><h2>Alaska</h2></Link>
                <Link to='/Intermountain'><h2>Intermountain</h2></Link>
                <Link to='/Midwest'><h2>Midwest</h2></Link>
                <Link to='/National Capital'><h2>National Capital</h2></Link>
                <Link to='/Northeast'><h2>Northeast</h2></Link>
                <Link to='/Pacific West'><h2>Pacific West</h2></Link>
                <Link to='/Southeast'><h2>Southeast</h2></Link>
                <Link to='/Pacific'><h2>Pacific</h2></Link>
            </div>
        </main>
    )
}