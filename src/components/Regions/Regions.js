import './Regions.css'
import { Link } from 'react-router-dom';

export default function Regions(){

  return (
        <main>
            <h2>Choose a region to explore National Parks...</h2>
            <div className='region-grid'>
                <Link className='region' to='parks/Alaska'><div className='image'><img src="https://i.pinimg.com/736x/91/62/4f/91624fec2afa426222a0aaeb49d9df32.jpg"/></div><h3>Alaska</h3></Link>
                <Link className='region' to='parks/Intermountain'><div className='image'><img src="https://i.ebayimg.com/images/g/lo8AAOSwP7xicGAc/s-l1200.webp" /></div><h3>Intermountain</h3></Link>
                <Link className='region' to='parks/Midwest'><div className='image'><img src="https://i.pinimg.com/736x/75/5a/fd/755afd01ad2e6b5334151611db746c17.jpg"/></div><h3>Midwest</h3></Link>
                <Link className='region' to='parks/National Capital'><div className='image'><img src="https://i.ebayimg.com/images/g/REQAAOSwvTRino57/s-l1200.webp"/></div><h3>National Capital</h3></Link>
                <Link className='region' to='parks/Northeast'><div className='image'><img src="https://vintagepostcardboutique.com/cdn/shop/products/grassypond_1200x1200.jpg?v=1551885357"/></div><h3>Northeast</h3></Link>
                <Link className='region' to='parks/Pacific West'><div className='image'><img src="https://i.pinimg.com/736x/33/a6/49/33a6491aa16471074b7fd6894993ebe4.jpg"/></div><h3>Pacific West</h3></Link>
                <Link className='region' to='parks/Southeast'><div className='image'><img src="https://i.ebayimg.com/images/g/H54AAOSweohfdz8W/s-l1200.webp"/></div><h3>Southeast</h3></Link>
                <Link className='region' to='parks/Pacific'><div className='image'><img src="https://www.marylmartin.com/wp-content/uploads/2022/01/0000862839-1.jpg"/></div><h3>Pacific</h3></Link>
                <Link className='region' to='parks/Mid-Atlantic'><div className='image'><img src="https://mds.marshall.edu/john_miller_west_postcard_collection/1136/preview.jpg"/></div><h3>Mid-Atlantic</h3></Link>
            </div>
        </main>
    )
  
}

