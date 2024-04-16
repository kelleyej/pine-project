import './Regions.css'
import { Link } from 'react-router-dom';

export default function Regions(){

    return (
        <main>
            <h2>Choose a region to explore National Parks...</h2>
            <div className='region-grid'>
                <Link className='region' to='/Alaska'><div className='image'><img src="https://i.pinimg.com/736x/91/62/4f/91624fec2afa426222a0aaeb49d9df32.jpg"/></div><h3>Alaska</h3></Link>
                <Link className='region' to='/Intermountain'><img src="https://i.ebayimg.com/images/g/lw8AAOSwTG1gVl1p/s-l1600.jpg" /><h3>Intermountain</h3></Link>
                <Link className='region' to='/Midwest'><img src="https://thenewinquiry.com/app/uploads/2023/04/midwest-postcard-1200x820.jpeg"/><h3>Midwest</h3></Link>
                <Link className='region' to='/National Capital'><img src="https://i.ebayimg.com/images/g/REQAAOSwvTRino57/s-l1200.webp"/><h3>National Capital</h3></Link>
                <Link className='region' to='/Northeast'><img src="https://vintagepostcardboutique.com/cdn/shop/products/grassypond_1200x1200.jpg?v=1551885357"/><h3>Northeast</h3></Link>
                <Link className='region' to='/Pacific West'><img src="https://i.pinimg.com/736x/33/a6/49/33a6491aa16471074b7fd6894993ebe4.jpg"/><h3>Pacific West</h3></Link>
                <Link className='region' to='/Southeast'><img src="https://i.ebayimg.com/images/g/H54AAOSweohfdz8W/s-l1200.webp"/><h3>Southeast</h3></Link>
                <Link className='region' to='/Pacific'><img src="https://storage.googleapis.com/hippostcard/p/3382134aeb4712ccb16e07806cae0116.jpg"/><h3>Pacific</h3></Link>
                <Link className='region' to='/Mid-Atlantic'><img src="https://mds.marshall.edu/john_miller_west_postcard_collection/1136/preview.jpg"/><h3>Mid-Atlantic</h3></Link>
            </div>
        </main>
    )
}

