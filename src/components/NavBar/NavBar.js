import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <header>
            <div className='text-container'>
                <Link to='/'><h1>PINE</h1></Link>
                <NavLink to='/parks/tracker'>Park Tracker</NavLink> 
            </div>
         
        </header>    
    )
}