import '../style.css'
import one from '../images/one.png'
import star from '../images/star.png'

export default function Card() {
    return (
        <div className="card">
            <img className="card-img" src = {one} alt="One" />

            <div className="card-info">
                <img src = {star} alt="Star" />
                
                <span> 5.0 </span>
                <span className="grey"> (6) </span>
                <span className="grey"> • USA </span>
            </div>

            <p> Life lessons with Katie Zaferes </p>

            <p> <b> From $140 </b> / person </p>
        </div>
    )
}