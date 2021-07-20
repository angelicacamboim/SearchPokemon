import { useParams } from 'react-router-dom'
import {
	Container,
	Col,
	Row,
	CardImg,
	Card,
	CardBody,
	Progress
} from 'reactstrap'
import { CardPokemon } from '../Components/CardPokemon'
import { usePokemon } from '../hooks/usePokemon'
import { usePokemonSpecies } from '../hooks/usePokemonSpecies'

import {} from 'reactstrap'

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
				<h1 style={{ marginTop: '30px' }}>{pokemon?.name}</h1>

				<Card
					className="shadow mb-5 bg-body rounded"
					style={{ marginTop: '30px' }}
					key={pokemon?.id}
				>
					<Row lg="2" md="1" sm="1" xs="1">
						<Col style={{ padding: '0 0' }}>
							<CardImg
								style={{
									backgroundImage:
										'linear-gradient(to right top, #B57E10, #B57E10, #F9DF7B, #FFF3A6, #F9DF7B, #B57E10)'
								}}
								top
								width="100%"
								height="450px"
								src={pokemon?.image}
								alt="Card image cap"
							/>
						</Col>
						<Col
							style={{
								padding: '0 0',
								margin: '0 0',
								backgroundColor: '#F5F6F8'
							}}
						>
							<CardBody>
								<h3
									style={{
										marginTop: '10px',
										marginBottom: '30px',
										textAlign: 'center'
									}}
								>
									{pokemon?.name}
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
										<p>{pokemon?.weight}kg</p>
									</Col>
									<Col>
										<h6>Height</h6>
										<p>{pokemon?.height}m</p>
									</Col>
									<Col>
										<h6>Shape</h6>
										<p>{pokemonSpecies?.shape.name}</p>
									</Col>

									<Col>
										<h6>Habitat</h6>
										<p>{pokemonSpecies?.habitat.name}</p>
									</Col>

									<Col>
										<h6>Abilities</h6>
										{pokemon?.abilities.map((ability, index) => (
											<span>{ability.ability.name}, </span>
										))}
									</Col>
									<Col>
										<h6>Generation</h6>
										<p>{pokemonSpecies?.generation.name}</p>
									</Col>

									<Col lg="6" xs="10" sm="9" md="6">
										<h6>Types</h6>
										{pokemon?.types.map((types, index) => (
											<span
												className={`type ${types.type.name}`}
												style={{ marginRight: '5px' }}
											></span>
										))}
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
									{pokemon?.stats.map((stats, index) => (
										<Col key={index}>
											<h6>{stats.stat.name}</h6>
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

				<h3>Evolution Line</h3>

				<Row lg="3" md="3" sm="2" xs="1" style={{ marginTop: '20px' }}>
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
			</Container>
		</>
	)
}
