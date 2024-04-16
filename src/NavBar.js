import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return (
        <header>
            <div className='text-container'>
                <h1>PINE</h1>
                <NavLink to='/parks/tracker'>Park Tracker</NavLink> 
            </div>
         
        </header>    
    )
}