import './NotFound.css';

export default function NotFound(){
    return (
        <div className='not-found-container'>
            <h1>Awww, nuts!</h1>
            <p className='error-message'>404 Page Not Found: Please try again later.</p>
            <img className='squirrel' src="https://i.pinimg.com/736x/22/b2/f0/22b2f04cfe1fe936dc8c224deb4a49a4.jpg"/> 
        </div>
    )
}