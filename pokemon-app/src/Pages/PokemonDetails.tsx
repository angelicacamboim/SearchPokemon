import { useLocation, useParams } from 'react-router-dom'
import { StyledCard, StyledLink } from '../styles/colors'
import Flag_of_None from '../assets/images/Flag_of_None.png'

import { Container, Col, Row, CardBody, Progress } from 'reactstrap'
import { CardPokemon } from '../Components/CardPokemon'
import { usePokemon } from '../hooks/usePokemon'
import { usePokemonSpecies } from '../hooks/usePokemonSpecies'
import { useEffect } from 'react'
import { StyledCardImg } from '../styles/colors'

type NameParams = {
	namePokemon: string
}

export function PokemonDetails() {
	const { namePokemon } = useParams<NameParams>()
	const { evolutionLine, pokemonSpecies } = usePokemonSpecies(namePokemon)
	const { pokemon } = usePokemon(namePokemon)

	const routePath = useLocation()
	const onTop = () => {
		window.scrollTo(0, 0)
	}
	useEffect(() => {
		onTop()
	}, [routePath])

	return (
		<>
			<Container>
				<h1 className="mt-4 mb-4 text-capitalize">{pokemon?.name}</h1>

				<Row className="mb-5">
					<Col>
						<StyledCard>
							<Row className="no-gutters" xs="1" sm="1" md="1" lg="2" xl="2">
								<Col xl="5">
									<StyledCardImg
										color={pokemonSpecies?.color.name}
										top
										height="100%"
										src={pokemon?.image ? pokemon?.image : Flag_of_None}
										alt="Card image cap"
									/>
								</Col>
								<Col>
									<CardBody>
										<h3 className="mt-3 mb-4 text-center text-capitalize">
											{pokemon?.name}
										</h3>
										<Row xs="2" sm="3" md="4" lg="4" xl="4">
											<Col>
												<h6>
													<strong>Weight</strong>
												</h6>
												<p>{pokemon?.weight}kg</p>
											</Col>
											<Col>
												<h6>
													<strong>Height</strong>
												</h6>
												<p>{pokemon?.height}m</p>
											</Col>
											<Col>
												<h6>
													<strong>Shape</strong>
												</h6>
												<p className="text-capitalize">
													{pokemonSpecies?.shape.name}
												</p>
											</Col>
											<Col>
												<h6>
													<strong>Abilities</strong>
												</h6>
												{pokemon?.abilities.map((ability, index) => (
													<span className="text-capitalize" key={index}>
														{ability.ability.name}
														<br></br>
													</span>
												))}
											</Col>
											<Col>
												<h6>
													<strong>Habitat</strong>
												</h6>
												<p className="text-capitalize">
													{pokemonSpecies?.habitat.name}
												</p>
											</Col>

											<Col>
												<h6 className="text-capitalize">
													<strong>{pokemonSpecies?.generation.name}</strong>
												</h6>
											</Col>
											<Col xs="12" sm="6" md="6" lg="6">
												<h6 className="mb-3">
													<strong>Types</strong>
												</h6>
												{pokemon?.types.map((types, index) => (
													<span
														key={index}
														className={`type ${types.type.name}`}
														style={{ marginRight: '5px' }}
													></span>
												))}
											</Col>
										</Row>

										<Row lg="3" xs="2" sm="2" md="2" className="mt-5">
											{pokemon?.stats.map((stats, index) => (
												<Col key={index} className="mb-3">
													<h6 className="text-capitalize">
														<strong>{stats.stat.name}</strong>
													</h6>
													<Progress
														color="secondary"
														key={index}
														value={stats.base_stat}
													>
														<strong>{stats.base_stat}</strong>
													</Progress>
												</Col>
											))}
										</Row>
									</CardBody>
								</Col>
							</Row>
						</StyledCard>
					</Col>
				</Row>

				<h3>Evolution Line</h3>

				<Row lg="3" md="3" sm="2" xs="1" className="mt-5">
					<Col>
						{{ evolutionLine } ? (
							<CardPokemon cardName={evolutionLine?.evolution.name} />
						) : (
							''
						)}
					</Col>

					{evolutionLine?.evolution2
						? evolutionLine.evolution2.map((pokemon, index) => (
								<Col key={index}>
									<CardPokemon key={index} cardName={pokemon.species.name} />{' '}
								</Col>
						  ))
						: ''}

					{evolutionLine?.evolution3
						? evolutionLine.evolution3.map((pokemon, index) => (
								<Col key={index}>
									<CardPokemon key={index} cardName={pokemon.species.name} />
								</Col>
						  ))
						: ''}
				</Row>
				<StyledLink to="/pokedex">Back</StyledLink>
			</Container>
		</>
	)
}
