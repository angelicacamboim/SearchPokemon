import { Container, Col, Row, Button, Progress } from 'reactstrap'
import Header from '../Components/Header'
import PokemonImage from '../assets/images/pokemonImage.svg'
import CardPokemon from '../Components/CardPokemon'

function PokemonDetails() {
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Col
						style={{
							marginTop: '50px',
							marginBottom: '30px',
							display: 'flex',
							justifyContent: 'flex-start'
						}}
					>
						<h1>MeoTwo #10</h1>
					</Col>
				</Row>

				<Row>
					<Col sm="6">
						<CardPokemon />
					</Col>
					<Col sm="6">
						<Row>
							<Col xs="3">
								<h5>Weight</h5>
								<p>30kg</p>
							</Col>
							<Col xs="3">
								<h5>Height</h5>
								<p>10m</p>
							</Col>
							<Col xs="3">
								<h5>Shape</h5>
								<p>Humanoid</p>
							</Col>
						</Row>
						<Row style={{ marginTop: '20px' }}>
							<Col xs="4">
								<h5>Abilities</h5>
								<p>Overgrow - Chlorophyll</p>
							</Col>
							<Col xs="4">
								<h5>Habitat</h5>
								<p>Grassland</p>
							</Col>
						</Row>

						<Row style={{ marginTop: '20px' }}>
							<Col xs="3">
								<h6>Attack</h6>
								<Progress color="warning" value="25">
									25%
								</Progress>
							</Col>
							<Col xs="3">
								<h6>Attack</h6>
								<Progress color="warning" value="25">
									25%
								</Progress>
							</Col>
							<Col xs="3">
								<h6>Attack</h6>
								<Progress color="warning" value="25">
									25%
								</Progress>
							</Col>
						</Row>

						<Row style={{ marginTop: '20px' }}>
							<Col xs="3">
								<h6>Attack</h6>
								<Progress color="warning" value="25">
									25%
								</Progress>
							</Col>
							<Col xs="3">
								<h6>Attack</h6>
								<Progress color="warning" value="25">
									25%
								</Progress>
							</Col>
							<Col xs="3">
								<h6>Attack</h6>
								<Progress color="warning" value="25">
									25%
								</Progress>
							</Col>
						</Row>
					</Col>
				</Row>

				<Row style={{ marginTop: '10px' }}>
					<h3>Evolution Line</h3>
					<Col sm="3">
						<CardPokemon />
					</Col>
					<Col sm="3">
						<CardPokemon />
					</Col>
					<Col sm="3">
						<CardPokemon />
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default PokemonDetails
