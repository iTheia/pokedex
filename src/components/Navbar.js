import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navlist from './Navlist'
const URI = 'https://pokeapi.co/api/v2/pokedex'

export default function Navbar() {
    
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        axios.get(`${URI}`)
            .then(response => {
                setPokedex(response.data.results)
            })
        return () => {
            
        }
    }, [])

    return (
        <div className="navbar">
            <div className="navbar__header">
                <div className="navbar__logo">
                    <img className="logo" src={require('../images/pokemon.svg')} alt=""/>
                    <Link to="/">
                        Pokedex
                    </Link>
                </div>
                <a href="#" className="contact">Developer profile</a>
            </div>
            <Navlist pokedex={pokedex} />
        </div>
    )
}
