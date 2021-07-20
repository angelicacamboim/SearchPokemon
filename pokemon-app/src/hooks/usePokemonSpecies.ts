import axios from "axios";
import { useCallback, useEffect, useState } from "react";

type PokemonSpecies =  { 
evolution_chain: {
    url: string
},
generation: {
    name: string
},
  habitat: {
    name: string
  },
  shape: {
    name: string
  }
}

type PokemonEvolution =  { 
  evolution: {
    name: string
},
  evolution2: [{
    species: {
        name: string
    }  
}],
  evolution3:[{
      species: {
          name: string
      }
  }]
}

export function usePokemonSpecies(name: string | undefined) {
    const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>()
    const [evolutionLine, setEvolutionLine] = useState<PokemonEvolution>()

  
      const pokemonSpeciesAPI = useCallback(async () => {

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
       

        const { evolution_chain,generation,habitat, shape } = await response.data;
  
        setPokemonSpecies({
          evolution_chain,
          generation,
          habitat,
          shape
          })		  
          
          let url = await evolution_chain.url
          const responseEvolution = await axios.get(url)
      
          setEvolutionLine({
            evolution: responseEvolution.data.chain.species,
            evolution2: responseEvolution.data.chain.evolves_to,
            evolution3: responseEvolution.data.chain.evolves_to[0].evolves_to
            })	
     
  
      }, [name])
  
      useEffect( () => {
        pokemonSpeciesAPI()
    }, [pokemonSpeciesAPI])

  return { pokemonSpecies, evolutionLine }
}