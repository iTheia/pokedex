import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from '../components/List'

const URI = 'https://pokeapi.co/api/v2/pokedex'

export default function Pokedex({match}) {

    const [pokedex, setpokedex] = useState([])    
    const memorized = []
    useEffect(() => {
        axios.get(`${URI}/${match.params.id}`)
            .then(response =>{
                setpokedex(response.data.pokemon_entries)
            })
            .catch(error => console.log(error))
        return () => {
            setpokedex([])
        }
    }, [match.params.id])
    return (
        <div className="pokedex">
            <List pokedex={pokedex} />
        </div>
    )
}
