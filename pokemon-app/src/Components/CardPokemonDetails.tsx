import { CardImg, Col, Row, Button, Progress, Card } from 'reactstrap'
import PokemonImage from '../assets/images/pokemon_example.svg'

function CardPokemonDetails() {
	return (
		<div>
			<Card
				className="shadow mb-5 bg-body rounded"
				style={{ marginTop: '50px' }}
			>
				<Row lg="2" md="1" sm="1" xs="1">
					<Col>
						<CardImg
							style={{
								backgroundImage:
									'linear-gradient(to right top, #B57E10, #B57E10, #F9DF7B, #FFF3A6, #F9DF7B, #B57E10)'
							}}
							top
							width="100%"
							height="450px"
							src={PokemonImage}
							alt="Card image cap"
						/>
					</Col>
					<Col>
						<h3
							style={{
								marginTop: '10px',
								marginBottom: '30px',
								textAlign: 'center'
							}}
						>
							MeoTwo #10
						</h3>
						<Row
							lg="34"
							md="4"
							sm="4"
							xs="2"
							style={{
								marginTop: '10px',
								display: 'flex',
								alignItems: 'center'
							}}
						>
							<Col>
								<h6>Weight</h6>
								<p>30kg</p>
							</Col>
							<Col>
								<h6>Height</h6>
								<p>10m</p>
							</Col>
							<Col>
								<h6>Shape</h6>
								<p>Humanoid</p>
							</Col>

							<Col>
								<h6>Habitat</h6>
								<p>Grassland</p>
							</Col>

							<Col>
								<h6>Abilities</h6>
								<p>Overgrow - Chlorophyll</p>
							</Col>
							<Col>
								<h6>Generation</h6>
								<p>Number I</p>
							</Col>

							<Col lg="5">
								<h6>Types</h6>
								<Button color="info" pill style={{ marginRight: '5px' }}>
									Info
								</Button>

								<Button color="info" pill>
									Fire
								</Button>
							</Col>
						</Row>

						<Row
							lg="2"
							md="3"
							sm="3"
							xs="3"
							style={{
								marginTop: '20px',
								marginBottom: '20px',
								display: 'flex',
								alignItems: 'center'
							}}
						>
							<Col>
								<h6>Attack</h6>
								<Progress color="warning" value="25">
									25%
								</Progress>
							</Col>
							<Col>
								<h6>Attack</h6>
								<Progress color="warning" value="25">
									25%
								</Progress>
							</Col>
							<Col>
								<h6>Attack</h6>
								<Progress color="warning" value="25">
									25%
								</Progress>
							</Col>
							<Col>
								<h6>Attack</h6>
								<Progress color="warning" value="25">
									25%
								</Progress>
							</Col>
							<Col>
								<h6>Attack</h6>
								<Progress color="warning" value="25">
									25%
								</Progress>
							</Col>
							<Col>
								<h6>Attack</h6>
								<Progress color="warning" value="25">
									25%
								</Progress>
							</Col>
						</Row>
					</Col>
				</Row>
			</Card>
		</div>
	)
}

export default CardPokemonDetails
