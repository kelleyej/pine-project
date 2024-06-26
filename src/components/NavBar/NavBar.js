import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <header>
            <div className='nav-container'>
                <div className='text-container'>
                    <Link to='/'><h1 className='title'>PINE</h1></Link>
                </div>    
                <NavLink className='tracker' to='/parks/visited/tracker'><button>Park Tracker</button></NavLink> 
            </div>
        </header>    
    )
}