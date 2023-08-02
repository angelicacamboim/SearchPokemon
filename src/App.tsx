import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'

import { Home } from './Pages/Home'
import { Page404 } from './Pages/Page404'
import { Pokedex } from './Pages/Pokedex'
import { PokemonDetails } from './Pages/PokemonDetails'
import GlobalStyle from './styles/global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePeristedState from './hooks/usePersistedState'
import { homedir } from 'os'

export function App() {
	const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light)

	const toggleTheme = () => {
		setTheme(theme?.title === 'light' ? dark : light)
	}

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyle />
				<Header toggleTheme={toggleTheme} />
				<Switch>
					<Route path="/pokemon-react" exact component={Home} />
					<Route path="/pokemon-react/pokedex" exact component={Pokedex} />
					<Route path="/pokemon-react/pokemon/:namePokemon" exact component={PokemonDetails} />
					<Route component={Page404} />	
				</Switch>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	)
}
