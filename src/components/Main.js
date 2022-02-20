import img from '../images/main.png'

export default function Main () {
    return (
        <div className="hero"> 
            <img className="hero-img" src={img} alt="Images" />

            <h1 className="herp-header">
                Online Experiences
            </h1>

            <p className="hero-text">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}