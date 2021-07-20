import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { Container, Col, Row, Input, Button, Spinner } from 'reactstrap'

import { CardPokemon } from '../Components/CardPokemon'

type listPokemonState = {
	name?: string | undefined
}

export function Pokedex() {
	const NUMBER_POKEMONS = 20
	const NUMBER_MAX_POKEMONS_API = 800

	const [pokemon, setPokemon] = useState<Array<listPokemonState>>([])
	const [searchPokemon, setSearchPokemon] = useState('')
	const [offset, setOffset] = useState(NUMBER_POKEMONS)
	const [loading, setLoading] = useState(true)

	const pokemonSearch = useCallback(async () => {
		let isSubscribed = true

		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/?limit=${NUMBER_MAX_POKEMONS_API}`
		)

		if (isSubscribed) {
			const pokemonsSearch = await response.data.results.filter(
				(name: { name: string | string[] }) =>
					name.name.includes(searchPokemon.toLocaleLowerCase())
			)

			setPokemon(pokemonsSearch)
		}

		return () => (isSubscribed = false)
	}, [searchPokemon])

	const pokemonDefaultList = useCallback(async () => {
		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon?&limit=${NUMBER_POKEMONS}&offset=0`
		)

		setPokemon(response.data.results)
	}, [])

	useEffect(() => {
		if (searchPokemon.length >= 2) {
			setLoading(false)
			pokemonSearch()
		} else {
			setLoading(false)
			pokemonDefaultList()
		}
	}, [pokemonSearch, searchPokemon, pokemonDefaultList])

	// Adiciona novos pokémons a lista
	const handleMorePokemons = useCallback(async () => {
		setOffset((offset) => offset + NUMBER_POKEMONS)

		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon?&limit=${NUMBER_POKEMONS}&offset=${offset}`
		)

		setPokemon((state) => [...state, ...response.data.results])
	}, [offset])

	return (
		<>
			<Container className="mt-5">
				<Row>
					<Col>
						<h2 className="text-center">
							800 Pokemons for you to choose your favorite
						</h2>
					</Col>
				</Row>

				<Row>
					<Col className="mt-5 mb-5">
						<Input
							className="border-secondary rounded-pill pr-5"
							id="search"
							type="search"
							placeholder="Search Pokemon"
							value={searchPokemon}
							onChange={(event) => {
								setSearchPokemon(event.target.value)
							}}
						/>
					</Col>
				</Row>

				<Row lg="4" md="3" sm="2" xs="1">
					{!loading ? (
						pokemon.map((pokemon, index) => (
							<Col className="p-10" key={index}>
								<CardPokemon cardName={pokemon.name} />
							</Col>
						))
					) : (
						<Col>
							<Spinner
								color="danger"
								style={{
									width: '3rem',
									height: '3rem',
									position: 'fixed',
									top: '50%',
									left: '50%'
								}}
							/>
						</Col>
					)}
				</Row>

				<Row>
					<Col className="text-center mt-5">
						<Button className="color-red" onClick={() => handleMorePokemons()}>
							See More
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	)
}
