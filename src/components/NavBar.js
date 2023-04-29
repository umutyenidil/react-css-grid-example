import React from "react";
import './NavBar.css';

const NavBar = (props) => {
    return <div className='wrapper'>
        <nav className='main-nav'>
            <ul>
                <li>
                    <a href='test.com'>Home</a>
                </li>
                <li>
                    <a href='test.com'>About</a>
                </li>
                <li>
                    <a href='test.com'>Services</a>
                </li>
                <li>
                    <a href='test.com'>Contact </a>
                </li>
            </ul>
        </nav>
    </div>
}

export default NavBar;