import { Container, Row } from 'reactstrap'

export function Footer() {
	return (
		<footer>
			<Container
				style={{
					display: 'flex',
					justifyContent: 'flex-start'
				}}
			>
				<Row
					style={{
						marginTop: '50px'
					}}
				>
					<p>Make with ❤️ for Angelica Bayer</p>
				</Row>
			</Container>
		</footer>
	)
}
