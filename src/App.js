import Navbar from './components/Navbar'
import Main from './components/Main'
import Card from './components/Card'
import data from './Data/data'


// What do we usually use `.map()` for in React?
// Convert an array of raw data into an array of JSX elements
// that can be displayed on the page.

function App() {

	const cardElements = data.map(card => {
		return <Card
					key = {card.id}
					// card={card}
					{...card}

					// img={card.coverImg}
					// rating={card.stats.rating}
					// reviewCount={card.stats.reviewCount}
					// title={card.title}
					// price = {card.price}
					// location = {card.location}
					// openSpots = {card.openSpots}
				/>
	})

    return (
		<div>
			<Navbar/>
			<Main/>
			<section className="card-list">
				{ cardElements }
			</section>
		</div>
    );
}

export default App;
