import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'

import { Home } from './Pages/Home'
import { Page404 } from './Pages/Page404'
import { Pokedex } from './Pages/Pokedex'
import { PokemonDetails } from './Pages/PokemonDetails'

export function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/pokedex" component={Pokedex} />
				<Route path="/pokemon/:namePokemon" component={PokemonDetails} />
				<Route component={Page404} />
			</Switch>
			<Footer />
		</BrowserRouter>
	)
}
