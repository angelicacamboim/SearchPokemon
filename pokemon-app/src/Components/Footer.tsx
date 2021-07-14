import { Container, Row } from 'reactstrap'

function Footer() {
	return (
		<footer
			style={{
				backgroundColor: '#F5DB13',
				height: '109px'
			}}
		>
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

export default Footer
