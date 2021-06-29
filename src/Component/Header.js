import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

export default function Header(){
    return(
        <nav>
            <div className="logo-box">
                <a href="/" className="logo"> Brand </a>
            </div>
            <div className="link-box">
                <ul>
                    <Link to="/Characters/0/"><li> Characters </li></Link>
                    <Link to="/Comics/0/"><li> Comics </li></Link>
                    <Link to="/Series/0/"><li> Series </li></Link>
                </ul>
            </div>
        </nav>
    )
}