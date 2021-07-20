import { Container, Nav, Navbar, NavbarBrand, Button } from 'reactstrap'
import Logo from '../assets/images/logo.svg'

export function Header() {
	return (
		<header className="color-sun_yellow d-flex flex-row">
			<Navbar tag={Container} className="justify-content-between" expand="md">
				<NavbarBrand href="/">
					<img src={Logo} alt="Logo" width="130px" />
				</NavbarBrand>

				<Nav>
					<Button>Theme Color</Button>
				</Nav>
			</Navbar>
		</header>
	)
}
