import { Container, Col, Row, Input, Button, Progress } from 'reactstrap'
import Header from '../Components/Header'
import PokemonImage from '../assets/images/pokemonImage.svg'

function PokemonDetails() {
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Col style={{ marginTop: '50px' }}>
						<h2>MeoTwo</h2>
						<th>
							____________________________________________________________________________________________________
						</th>
					</Col>
				</Row>

				<Row>
					<Col xs="6">
						<img src={PokemonImage} alt="Pokemon" width="400px" />
						<p>generation</p>
					</Col>
					<Col xs="6">
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
								<p>Overgrow-Cloropppp</p>
							</Col>
							<Col xs="4">
								<h5>Habitat</h5>
								<p>Grassland</p>
							</Col>
						</Row>

						<Row style={{ marginTop: '20px' }}>
							<Col xs="3">
								<h6>Attack</h6>
								<Progress value="25">25%</Progress>
							</Col>
							<Col xs="3">
								<h6>Attack</h6>
								<Progress value="25">25%</Progress>
							</Col>
							<Col xs="3">
								<h6>Attack</h6>
								<Progress value="25">25%</Progress>
							</Col>
						</Row>

						<Row style={{ marginTop: '20px' }}>
							<Col xs="3">
								<h6>Attack</h6>
								<Progress value="25">25%</Progress>
							</Col>
							<Col xs="3">
								<h6>Attack</h6>
								<Progress value="25">25%</Progress>
							</Col>
							<Col xs="3">
								<h6>Attack</h6>
								<Progress value="25">25%</Progress>
							</Col>
						</Row>
					</Col>
				</Row>

				<Row style={{ marginTop: '50px' }}>
					<h3>Evolution Line</h3>
					<Col xs="3">card </Col>
					<Col xs="3">card </Col>
					<Col xs="3">card</Col>
				</Row>
			</Container>
		</>
	)
}

export default PokemonDetails
