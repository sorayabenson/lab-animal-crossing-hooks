import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
    <header aria-label='animal crossing header'>
        <h1>let's cross some animals!</h1>
        <nav>
            <Link to='/'>
                Villagers
            </Link>
        </nav>
    </header>
    
)

export default Header;
