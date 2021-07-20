import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import Banner from '../assets/images/banner.svg'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'

export function Home() {
	return (
		<>
			<Header />
			<main
				style={{
					backgroundColor: '#F5DB13',
					height: '100vh'
				}}
			>
				<Container>
					<Row
						lg="2"
						md="1"
						style={{
							display: 'flex',
							alignItems: 'center'
						}}
					>
						<Col>
							<h1>Find all your favorite Pokemon</h1>
							<p
								style={{
									marginTop: '40px',
									marginBottom: '40px'
								}}
							>
								You can know the type of Pokemon, its strengths, disadvantages
								and abilities
							</p>
							<Button
								tag={Link}
								to="/pokedex"
								style={{
									backgroundColor: '#C5312A'
								}}
							>
								See pokemons
							</Button>
						</Col>
						<Col className="d-none d-lg-block d-md-block">
							<img src={Banner} alt="Banner" width="500px" height="428px" />
						</Col>
					</Row>
				</Container>
				<Footer />
			</main>
		</>
	)
}
