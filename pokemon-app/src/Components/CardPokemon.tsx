import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from 'reactstrap'
import PokemonImage from '../assets/images/pokemon_example.svg'

const CardPokemon = () => {
	return (
		<div>
			<Card className="shadow mb-5 bg-body rounded">
				<CardImg
					style={{
						backgroundImage:
							'linear-gradient(to right top, #B57E10, #B57E10, #F9DF7B, #FFF3A6, #F9DF7B, #B57E10)'
					}}
					top
					width="100%"
					src={PokemonImage}
					alt="Card image cap"
				/>
				<CardBody>
					<CardTitle tag="h4">MeoTwo</CardTitle>
					<CardSubtitle tag="h6" className="mb-2 text-muted">
						Generation I
					</CardSubtitle>
					<Button color="info" pill style={{ marginRight: '10px' }}>
						Info
					</Button>
					<Button color="info" pill>
						Fire
					</Button>
				</CardBody>
			</Card>
		</div>
	)
}

export default CardPokemon
