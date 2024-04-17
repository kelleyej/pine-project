import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <header>
            <div className='nav-container'>
                 <div className='text-container'>
                <Link to='/'><h1>PINE</h1></Link>
            </div>    
                <NavLink className='tracker' to='/parks/tracker'><button>Park Tracker</button></NavLink> 
            
            </div>
           
         
        </header>    
    )
}