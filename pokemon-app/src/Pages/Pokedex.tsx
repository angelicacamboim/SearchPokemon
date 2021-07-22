import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { Container, Col, Row, Input, Spinner } from 'reactstrap'
import { StyledLink } from '../styles/colors'

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

			setLoading(false)
			setPokemon(pokemonsSearch)
		}

		return () => (isSubscribed = false)
	}, [searchPokemon])

	const pokemonDefaultList = useCallback(async () => {
		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon?&limit=${NUMBER_POKEMONS}&offset=0`
		)
		setLoading(false)
		setPokemon(response.data.results)
	}, [])

	useEffect(() => {
		if (searchPokemon.length >= 2) {
			pokemonSearch()
		} else {
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
						<Col
							lg="12"
							md="12"
							sm="12"
							xs="12"
							className="d-flex justify-content-center"
						>
							<div
								className="spinner-border ml-auto"
								role="status"
								aria-hidden="true"
							></div>
						</Col>
					)}
				</Row>

				<Row>
					<Col className="text-center mt-5">
						<StyledLink to="#" onClick={() => handleMorePokemons()}>
							See More
						</StyledLink>
					</Col>
				</Row>
			</Container>
		</>
	)
}
