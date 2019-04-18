import * as React from 'react'

const Header = () => {
    return (
        <header>
            <h3 className="company-logo"><span>logo</span></h3>
            <div className="user-form"> 
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li className="active"><a href="#">Login</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header