import React, {useEffect, useState} from 'react'
import Card from './Card'
import axios from 'axios'

export default function List({pokedex}) {

    const [first20, setfirst20] = useState([])

    const yHandler = () =>{

    }
    useEffect(() => {

    }, [])
    
    return (
        <div className="pokemon-list">
            {
                pokedex.map(pokemon =>{
                    return <Card pokemon={pokemon} />
                })
            }
        </div>
    )
}
