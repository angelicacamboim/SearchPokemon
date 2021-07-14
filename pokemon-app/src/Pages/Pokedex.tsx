import { Container, Col, Row, Input, Button } from 'reactstrap'
import CardPokemon from '../Components/CardPokemon'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Pokedex() {
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Col style={{ textAlign: 'center', marginTop: '50px' }}>
						<h2>800 Pokemons for you to choose your favorite</h2>
					</Col>
				</Row>

				<Row>
					<Col
						style={{
							textAlign: 'center',
							marginTop: '30px',
							marginBottom: '50px'
						}}
					>
						<Input
							className="border-secondary rounded-pill pr-5"
							type="search"
							placeholder="Search Pokemon"
						/>
					</Col>
				</Row>

				<Row lg="4" md="3" sm="2" xs="1">
					<Col>
						<CardPokemon />
					</Col>
					<Col>
						<CardPokemon />
					</Col>
					<Col>
						<CardPokemon />
					</Col>
					<Col>
						<CardPokemon />
					</Col>
				</Row>

				<Row>
					<Col style={{ textAlign: 'center', marginTop: '30px' }}>
						<Button style={{ backgroundColor: '#F5DB13', color: 'black' }}>
							{' '}
							See More{' '}
						</Button>
					</Col>
				</Row>
			</Container>
			{/* <Footer /> */}
		</>
	)
}

export default Pokedex
