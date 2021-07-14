import { Container, Col, Row, Button, Progress } from 'reactstrap'
import Header from '../Components/Header'
import PokemonImage from '../assets/images/pokemonImage.svg'
import CardPokemon from '../Components/CardPokemon'
import CardPokemonDetails from '../Components/CardPokemonDetails'

function PokemonDetails() {
	return (
		<>
			<Header />
			<Container>
				<h1 style={{ marginTop: '20px' }}>MeoTwo</h1>
				<CardPokemonDetails />
				<h3>Evolution Line</h3>

				<Row lg="3" md="3" sm="2" xs="1" style={{ marginTop: '20px' }}>
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
			</Container>
		</>
	)
}

export default PokemonDetails
