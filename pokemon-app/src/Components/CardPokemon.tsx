import { Link } from 'react-router-dom'
import { CardBackground } from '../styles/colors'

import { Card, CardImg, CardBody } from 'reactstrap'
import { usePokemon } from '../hooks/usePokemon'

type PokemonProps = {
	cardName?: string | undefined
}

export function CardPokemon(props: PokemonProps) {
	const { pokemon } = usePokemon(props.cardName)

	return (
		<div>
			<Card
				className="shadow mb-5 bg-body rounded"
				key={pokemon?.id}
				style={{ border: '0px', textDecoration: 'none' }}
			>
				<Link to={`/pokemon/${pokemon?.name}`}>
					<CardImg
						top
						width="100%"
						src={pokemon?.image}
						alt="Card image cap"
						style={{
							backgroundImage:
								'linear-gradient(to right top, #B57E10, #B57E10, #F9DF7B, #FFF3A6, #F9DF7B, #B57E10)'
						}}
					/>
				</Link>
				<CardBackground>
					<CardBody>
						<h4 className="text-capitalize mb-4">{pokemon?.name}</h4>
						{pokemon?.types.map((types, index) => (
							<span
								key={index}
								className={`type ${types.type.name}`}
								style={{ marginRight: '5px' }}
							></span>
						))}
					</CardBody>
				</CardBackground>
			</Card>
		</div>
	)
}
