import { useEffect, useState } from "react";
import {api} from '../api/api'

type PokemonSpecies =  { 
evolution_chain: {
    url?: string
},
generation: {
    name?: string
},
  habitat: {
    name?: string
  },
  shape: {
    name?: string
  },
  color : {
    name?: string
  }
}

type PokemonEvolution =  { 
  evolution: {
    name?: string
},
  evolution2: [{
    species: {
        name?: string
    }  
}] ,
  evolution3:[{
      species: {
          name?: string
      }
  }] 
}

export function usePokemonSpecies(name: string | undefined) {
    const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>()
    const [evolutionLine, setEvolutionLine] = useState<PokemonEvolution>()

      useEffect( () => {
      const getPokemonSpecies = async () => {
       const response = await api.get(`pokemon-species/${name}`)

        const { evolution_chain,generation,habitat, shape, color } = await response.data;

        setPokemonSpecies({
          evolution_chain: evolution_chain? evolution_chain: 'None' ,
          generation: generation ? generation: 'None',
          habitat: habitat ? habitat : 'None',
          shape: shape ? shape: 'None',
          color: color ? color: 'None'
          })		  
          
          let url = await evolution_chain.url
          const responseEvolution = await api.get(url)

          setEvolutionLine({
            evolution: responseEvolution.data.chain?.species,
            evolution2: responseEvolution.data.chain?.evolves_to,
            evolution3: responseEvolution.data.chain.evolves_to[0]?.evolves_to
            })	
  
        }
        getPokemonSpecies()
    }, [name])

  return { pokemonSpecies, evolutionLine }
}