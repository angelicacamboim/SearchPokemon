import { Container, Nav, Navbar, NavbarBrand, Button } from 'reactstrap'
import Logo from '../assets/images/logo.svg'

function Header() {
	return (
		<div
			style={{
				backgroundColor: '#F5DB13',
				display: 'flex',
				flexDirection: 'row',
			}}
		>
			<Navbar tag={Container} className="justify-content-between" expand="md">
				<NavbarBrand href="/">
					<img src={Logo} alt="Logo" width="100px" />
				</NavbarBrand>

				<Nav>
					<Button>Theme Color</Button>
				</Nav>
			</Navbar>
		</div>
	)
}

export default Header
