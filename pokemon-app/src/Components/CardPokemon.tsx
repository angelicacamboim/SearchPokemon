import { Link } from 'react-router-dom'

import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from 'reactstrap'
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
				tag={Link}
				to={`/pokemon/${pokemon?.name}`}
				key={pokemon?.id}
				style={{ border: '0px', textDecoration: 'none' }}
			>
				<CardImg
					style={{
						backgroundImage:
							'linear-gradient(to right top, #B57E10, #B57E10, #F9DF7B, #FFF3A6, #F9DF7B, #B57E10)'
					}}
					top
					width="100%"
					src={pokemon?.image}
					alt="Card image cap"
				/>
				<CardBody className="color-white">
					<CardTitle
						style={{ color: '#29292e' }}
						tag="h4"
						className="text-capitalize mb-4"
					>
						{pokemon?.name}
					</CardTitle>
					{pokemon?.types.map((types, index) => (
						<span
							className={`type ${types.type.name}`}
							style={{ marginRight: '5px' }}
						></span>
					))}
				</CardBody>
			</Card>
		</div>
	)
}
