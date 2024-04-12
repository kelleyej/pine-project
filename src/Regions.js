import './Regions.css'
import { Link } from 'react-router-dom';

export default function Regions(){
    return (
        <main>
            <h1>Choose a region to explore National Parks...</h1>
            <div className='region-grid'>
                <Link><h2>Alaska</h2></Link>
                <Link><h2>Intermountain</h2></Link>
                <Link><h2>Midwest</h2></Link>
                <Link><h2>National Capital</h2></Link>
                <Link><h2>Northwest</h2></Link>
                <Link><h2>Pacific West</h2></Link>
                <Link><h2>Southeast</h2></Link>
                <Link><h2>Pacific Islands</h2></Link>
            </div>
        </main>
    )
}