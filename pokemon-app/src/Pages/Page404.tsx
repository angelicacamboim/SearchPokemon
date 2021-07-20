import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import NotFound from '../assets/images/404.svg'

export function Page404() {
	return (
		<>
			<main
				style={{
					backgroundColor: '#D93E30',
					height: '100vh'
				}}
			>
				<Container>
					<Row lg="1" md="1" sm="1" xs="1">
						<Col
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '100px'
							}}
						>
							<img
								src={NotFound}
								alt="Page not found"
								width="600px"
								className="d-none d-lg-block d-md-block"
							/>
						</Col>

						<Col
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '20px'
							}}
						>
							<h3>Page Not Found</h3>
						</Col>
						<Col
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<Button
								tag={Link}
								to="/"
								style={{
									backgroundColor: '#F5DB13'
								}}
							>
								Home
							</Button>
						</Col>
					</Row>
				</Container>
			</main>
		</>
	)
}
