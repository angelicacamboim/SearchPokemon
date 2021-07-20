import { Link, useParams } from 'react-router-dom'
import {
	Container,
	Col,
	Row,
	CardImg,
	Card,
	CardBody,
	Progress,
	CardTitle,
	CardText,
	CardSubtitle,
	Button
} from 'reactstrap'
import { CardPokemon } from '../Components/CardPokemon'
import { usePokemon } from '../hooks/usePokemon'
import { usePokemonSpecies } from '../hooks/usePokemonSpecies'

type NameParams = {
	namePokemon: string
}

export function PokemonDetails() {
	const { namePokemon } = useParams<NameParams>()
	const { evolutionLine, pokemonSpecies } = usePokemonSpecies(namePokemon)
	const { pokemon } = usePokemon(namePokemon)

	return (
		<>
			<Container>
				<h1 className="mt-4 mb-4 text-capitalize">{pokemon?.name}</h1>

				<Row className="mb-5">
					<Col>
						<Card rounded>
							<Row className="no-gutters">
								<Col md="5">
									<CardImg
										className="color-card"
										top
										height="100%"
										src={pokemon?.image}
										alt="Card image cap"
									/>
								</Col>
								<Col md="6">
									<CardBody>
										<h3 className="mt-3 mb-4 text-center text-capitalize">
											{pokemon?.name}
										</h3>
										<Row lg="34" md="4" sm="4" xs="3">
											<Col>
												<h6>Weight</h6>
												<p>{pokemon?.weight}kg</p>
											</Col>
											<Col>
												<h6>Height</h6>
												<p>{pokemon?.height}m</p>
											</Col>
											<Col>
												<h6>Shape</h6>
												<p className="text-capitalize">
													{pokemonSpecies?.shape.name}
												</p>
											</Col>

											<Col>
												<h6>Habitat</h6>
												<p className="text-capitalize">
													{pokemonSpecies?.habitat.name}
												</p>
											</Col>

											<Col>
												<h6>Abilities</h6>
												{pokemon?.abilities.map((ability, index) => (
													<span className="text-capitalize">
														{ability.ability.name},{' '}
													</span>
												))}
											</Col>
											<Col>
												<h6>Generation</h6>
												<p className="text-capitalize">
													{pokemonSpecies?.generation.name}
												</p>
											</Col>

											<Col lg="6" xs="10" sm="9" md="6">
												<h6 className="mb-3">Types</h6>
												{pokemon?.types.map((types, index) => (
													<span
														className={`type ${types.type.name}`}
														style={{ marginRight: '5px' }}
													></span>
												))}
											</Col>
										</Row>

										<Row lg="2" md="3" sm="3" xs="3" className="mt-5">
											{pokemon?.stats.map((stats, index) => (
												<Col key={index} className="mb-3">
													<h6 className="text-capitalize">{stats.stat.name}</h6>
													<Progress color="warning" value={stats.base_stat}>
														{stats.base_stat}
													</Progress>
												</Col>
											))}
										</Row>
									</CardBody>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>

				<h3>Evolution Line</h3>

				<Row lg="3" md="3" sm="2" xs="1" className="mt-5">
					<Col>
						<CardPokemon cardName={evolutionLine?.evolution.name} />
					</Col>

					{evolutionLine?.evolution2
						? evolutionLine.evolution2.map((pokemon, index) => (
								<Col>
									<CardPokemon key={index} cardName={pokemon.species.name} />{' '}
								</Col>
						  ))
						: 'pikachu'}

					{evolutionLine?.evolution3
						? evolutionLine.evolution3.map((pokemon, index) => (
								<Col>
									<CardPokemon key={index} cardName={pokemon.species.name} />
								</Col>
						  ))
						: ''}
				</Row>
				<Button tag={Link} to="/pokedex">
					Back
				</Button>
			</Container>
		</>
	)
}
