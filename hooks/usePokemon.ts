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

    let isSubscribed = true

    api.get(`pokemon/${cardName}`).then((response) => {
           
        if (isSubscribed) {

			const { id, name, height,weight, abilities, types, stats} = response.data;

            let divideHeight = height/10
            let divideWeight = weight/10
            let imagem = response.data.sprites.other['official-artwork'].front_default

			setPokemon({
				id,
				name: name ? name: 'None',
				height: divideHeight ? divideHeight : 0,
                weight: divideWeight ? divideWeight : 0,
                abilities: abilities? abilities : [],
				types: types? types: [],
                stats: stats? stats: [],
				image: imagem? imagem: ''
				})	
            }
  
         return () => isSubscribed = false

		})
	
  }, [cardName]);

  return { pokemon }
}