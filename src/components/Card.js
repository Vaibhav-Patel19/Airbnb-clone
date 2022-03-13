import '../style.css'

export default function Card(props) {

    // const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
    // const result = pokemon.map(pok => `<p> ${pok} </p>`)
    // console.log(result);

    let flag
    let soldOut
    if (props.openSpots === 0) {
        soldOut = true
    } else if (props.location === "Online") {
        flag = 2
    }

    return (
        <div className="card">

            { soldOut && <div className="card-batch"> <img src = {require('../images/sold.png')} alt="sold out" /> </div> }
            
            {flag === 2 && <div className="card-batch"> <img src={require('../images/online.png')} alt="online" /> </div>}
            
            <img className="card-img" src={require(`../images/${props.coverImg}`)} alt="One" />

            <div className="card-info">
                <img src = {require('../images/star.png')} alt="Star" className="card-star" />
                
                <span> {props.stats.rating} </span>
                <span className="grey"> ({props.stats.reviewCount}) </span>
                <span className="grey"> •{props.location} </span>
            </div>

            <p className = "card-title"> { props.title } </p>

            <p className = "card-price"> <b> From ${props.price}</b> / person </p>
        </div>
    )
}