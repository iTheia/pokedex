import React from 'react'
import { Link } from 'react-router-dom'

export default function Navlist({pokedex}) {

    return (
        <ul className="navbar__list">
            {
                pokedex.map((element, index) =>{
                    const id = (index < 9)? index+1 : index+2
                    return (
                        <Link className="navbar__link"  key={index} to={`/${id}`}>
                            {element.name}
                        </Link>
                    )
                })
            }
        </ul>
    )
}
