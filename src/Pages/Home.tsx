import { Container, Row, Col } from 'reactstrap'
import { StyledLink } from '../styles/colors'

import Banner from '../assets/images/banner.svg'

export function Home() {
	return (
		<>
			<main
				className="m-0"
				style={{
					height: '100vh'
				}}
			>
				<Container>
					<Row lg="2" md="1" className="d-flex align-items-center">
						<Col className="mt-5">
							<h1>Find all your favorite Pokemon</h1>
							<p className="mt-5 mb-5">
								You can know the type of Pokemon, its strengths, disadvantages
								and abilities
							</p>
							<StyledLink to="/pokemon-react/pokedex">See pokemons</StyledLink>
						</Col>
						<Col className="d-none d-lg-block d-md-block">
							<img src={Banner} alt="Banner" width="500px" height="428px" />
						</Col>
					</Row>
				</Container>
			</main>
		</>
	)
}
