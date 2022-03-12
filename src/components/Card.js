import '../style.css'
// import one from '../images/one.png'
import star from '../images/star.png'

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src = { require(`../images/${props.img}`) } alt="One" />

            <div className="card-info">
                <img src = {star} alt="Star" />
                
                <span> {props.rating} </span>
                <span className="grey"> ({props.reviewCount}) </span>
                <span className="grey"> •{props.country} </span>
            </div>

            <p> { props.title } </p>

            <p> <b> From ${props.price}</b> / person </p>
        </div>
    )
}