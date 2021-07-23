import { Link } from 'react-router-dom'
import { StyledCard } from '../styles/colors'
import Flag_of_None from '../assets/images/Flag_of_None.png'

import { Card, CardBody } from 'reactstrap'
import { usePokemon } from '../hooks/usePokemon'
import { StyledCardImg } from '../styles/colors'
import { usePokemonSpecies } from '../hooks/usePokemonSpecies'

type PokemonProps = {
	cardName?: string | undefined
}

export function CardPokemon(props: PokemonProps) {
	const { pokemon } = usePokemon(props.cardName)
	const { pokemonSpecies } = usePokemonSpecies(props.cardName)

	return (
		<div>
			<Card
				className="shadow mb-5 bg-body rounded"
				key={pokemon?.id}
				style={{ border: '0px', textDecoration: 'none' }}
			>
				<Link to={`/pokemon/${pokemon?.name}`}>
					<StyledCardImg
						color={pokemonSpecies?.color.name}
						top
						width="100%"
						src={pokemon?.image ? pokemon?.image : Flag_of_None}
						alt="Card image cap"
					/>
				</Link>
				<StyledCard>
					<CardBody>
						<h4 className="text-capitalize">{pokemon?.name}</h4>
						<p className="text-capitalize">{pokemonSpecies?.generation.name}</p>
						{pokemon?.types.map((types, index) => (
							<span
								key={index}
								className={`type ${types.type.name}`}
								style={{ marginRight: '5px' }}
							></span>
						))}
					</CardBody>
				</StyledCard>
			</Card>
		</div>
	)
}
