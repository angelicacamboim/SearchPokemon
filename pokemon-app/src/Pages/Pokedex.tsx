import { Container, Col, Row, Input, Button } from 'reactstrap'
import Header from '../Components/Header'

function Pokedex() {
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Col style={{ textAlign: 'center', marginTop: '50px' }}>
						<h2>800 Pokemons for you to choose your favorite</h2>
					</Col>
				</Row>

				<Row>
					<Col
						style={{
							textAlign: 'center',
							marginTop: '30px',
							marginBottom: '50px',
						}}
					>
						<Input>search pokemon</Input>
					</Col>
				</Row>

				<Row>
					<Col xs="3">card</Col>
					<Col xs="3">card</Col>
					<Col xs="3">card</Col>
					<Col xs="3">card</Col>
				</Row>

				<Row>
					<Col style={{ textAlign: 'center', marginTop: '80px' }}>
						<Button> see more </Button>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Pokedex
