import { Container, Row, Col } from 'reactstrap'

import NotFound from '../assets/images/404.svg'

export function Page404() {
	return (
		<>
			<main>
				<Container>
					<Row lg="1" md="1" sm="1" xs="1">
						<Col
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '100px'
							}}
						>
							<img src={NotFound} alt="Page not found" width="400px" />
						</Col>

						<Col
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '20px'
							}}
						>
							<h3>Page not found</h3>
						</Col>
						<Col
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						></Col>
					</Row>
				</Container>
			</main>
		</>
	)
}
