import { useEffect, useState } from "react";
import {api} from '../api/api'

type Types = {
    type: {
        name?: string
    }
}

type Ability = {
    ability: {
        name?: string
    }
}

type Stat = {
    base_stat: number,
    stat: {
        name?: string
    }
}

type Pokemon =  { 
	id: number,
	name?: string,
  height?: number,
  weight?: number,
  abilities: Array<Ability>,
	types: Array<Types>,
	image?: string,
    stats: Array<Stat>
}


export function usePokemon(cardName: string | undefined) {
    const [pokemon, setPokemon] = useState<Pokemon | undefined>()
 
  useEffect(() => {
    const getPokemonSpecies = async () => {
        let isSubscribed = true

        const response = await api.get(`pokemon/${cardName}`)

        if (isSubscribed) {

            const { id, name, height,weight, abilities, types, stats} =  await response.data;
           
            setPokemon({
				id,
				name: name ? name: 'None',
				height: height ? height/10 : 0,
                weight: weight ? weight/10 : 0,
                abilities: abilities? abilities : [],
				types: types? types: [],
                stats: stats? stats: [],
				image: response.data.sprites.other['official-artwork'].front_default
				})	
            }
            
  
         return () => isSubscribed = false

    } 
    getPokemonSpecies()
      
  }, [cardName]);

  return { pokemon}
}