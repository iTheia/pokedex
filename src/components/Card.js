import React, {useState, useEffect} from 'react'

export default function Card({pokemon}) {

    const [poke, setPoke] = useState({
        entry_number:0,
        pokemon_especies:{
            name:'pokemon'
        }
    })

    useEffect(() => {
        console.log(pokemon)
        return () => {
            
        }
    }, [])
    return (
        <div className="card">
            <div className="entry">{poke.entry_number}</div>
            <div className="name">{poke.pokemon_especies.name} </div>
        </div>
    )
}
