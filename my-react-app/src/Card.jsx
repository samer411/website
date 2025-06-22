import ProfilePic from './assets/samer.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={ProfilePic} alt="Profile Picture" />
            <h2 className='card-title'>Samer</h2>
            <p className='card-text'>I am a Front End Developer</p>
        </div>
    );
}
export default Card;