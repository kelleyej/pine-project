import './ErrorMessage.css';

export default function ErrorMessage({error}){

    return (
        <div>
        <h1>Awww, nuts!</h1>
        <p>{error}: please try again later.</p>
        <img src="https://i.pinimg.com/736x/22/b2/f0/22b2f04cfe1fe936dc8c224deb4a49a4.jpg"/> 
        </div>
       
    )
}