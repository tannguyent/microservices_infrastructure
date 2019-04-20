import * as React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h3 className="company-logo"><span>logo</span></h3>
            <div className="user-form"> 
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header