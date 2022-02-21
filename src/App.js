import Navbar from './components/Navbar'
import Main from './components/Main'
import Card from './components/Card'
import Contact from './components/Contact'
import car from './images/car.jpg'

function App() {
    return (
		<div>
			<Navbar/>
			<Main/>
			<Card/>

			<Contact 
				image = {car}
				name = "Creta"
				phone = "4564"
				mail = "hoiehs@jf"
			/>

			<Contact 
				image = {car}
				name = "I20"
				phone = "1234"
				mail = "nkjbawb@jf"
			/>

			<Contact 
				image = {car}
				name = "baleno"
				phone = "7897"
				mail = "patel@jf"
			/>

			<Contact 
				image = {car}
				name = "polo"
				phone = "9156"
				mail = "vaibhav@jf"
			/>

		</div>
    );
}

export default App;
