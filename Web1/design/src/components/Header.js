import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Link to="/" >Home</Link>
            <span> | </span>
            <Link to='/'>About</Link>
            <span> | </span>
            <Link to='/'>News</Link>
            <span> | </span>
            <Link to='/'>Subcrible</Link>
        </div>

    )
}

export default Header
