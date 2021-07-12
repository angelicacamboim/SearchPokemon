import { Container, Row, Col, Button } from 'reactstrap'
import Logo from '../assets/images/logo.svg'
import Banner from '../assets/images/banner.svg'

function Home() {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<img src={Logo} alt="Logo Pokemon" />
					</Col>
				</Row>
				<Row>
					<Col xs="6">
						<h1>Find all your favorite Pokemon</h1>
						<p>
							You can know the type of Pokemon, its strengths, disadvantages and
							abilities
						</p>
						<Button>see pokemons</Button>
					</Col>
					<Col xs="6">
						<img src={Banner} alt="Banner" />
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Home
