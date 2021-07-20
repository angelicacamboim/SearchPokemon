import axios from "axios";
import { useEffect, useState } from "react";

type Types = {
    type: {
        name: string
    }
}

type Ability = {
    ability: {
        name: string
    }
}

type Stat = {
    base_stat: number,
    stat: {
        name: string
    }
}

type Pokemon =  { 
	id: number,
	name: string,
    nameLink: string,
  height: number,
  weight: number,
  abilities: Array<Ability>,
	types: Array<Types>,
	image: string,
    stats: Array<Stat>
}


export function usePokemon(cardName: string | undefined) {
    const [pokemon, setPokemon] = useState<Pokemon | undefined>()

  useEffect(() => {

    let isSubscribed = true

		axios.get(`https://pokeapi.co/api/v2/pokemon/${cardName}`).then((response) => {
           
        if (isSubscribed) {

			const { id, name, height,weight, abilities, types, stats} = response.data;

			setPokemon({
				id,
				name: name.charAt(0).toUpperCase() + name.slice(1),
                nameLink: name,
				height,
                weight,
                abilities,
				types,
                stats,
				image: response.data.sprites.other['official-artwork'].front_default
				})	
            }
  
         return () => isSubscribed = false

		})
    
	
  }, [cardName]);

  return { pokemon }
}