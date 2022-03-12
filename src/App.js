import Navbar from './components/Navbar'
import Main from './components/Main'
import Card from './components/Card'
// import Contact from './components/Contact'
// import car from './images/car.jpg'


function App() {
    return (
		<div>
			<Navbar/>
			<Main/>
			<Card
				img = "one.png"
				rating = {4}
				reviewCount = {10}
				country = "India"
				title = "Life lessons with Katie Zaferes"
				price = {130}
			/>

			{/* <Contact 
				image = {car}
				name = "Creta"
				phone = {456}
				mail = "hoiehs@jf"
				isValid = {true}
			/>

			<Contact 
				image = {car}
				name = "I20"
				phone = {1234}
				mail = "nkjbawb@jf"
				isValid = {false}
			/> */}

		</div>
    );
}

export default App;
