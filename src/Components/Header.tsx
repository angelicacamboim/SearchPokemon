import React, { useContext } from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'reactstrap'
import Logo from '../assets/images/logo.svg'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface Props {
	toggleTheme(): void
}

export function Header(props: Props) {
	const { colors, title } = useContext(ThemeContext)

	return (
		<header className="d-flex flex-row shadow-sm p-1 mb-3 border-bottom border-white">
			<Navbar tag={Container} className="justify-content-between" expand="md">
				<NavbarBrand href="/">
					<img src={Logo} alt="Logo" width="130px" />
				</NavbarBrand>

				<Nav>
					<Switch
						onChange={props.toggleTheme}
						checked={title === 'light'}
						checkedIcon={false}
						uncheckedIcon={false}
						height={10}
						width={40}
						handleDiameter={20}
						offColor={shade(0.15, colors.secundary)}
						onColor={colors.primary}
					/>
				</Nav>
			</Navbar>
		</header>
	)
}
