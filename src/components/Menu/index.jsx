import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

//import ButtonLink from '../Menu/components/ButtonLink';
import Button from '../Button';

const Menu = () =>{
    return ( 
        <header>
        <nav className="Menu">
            <a href="/">
        <img className="Logo" src={Logo} alt="Danielflix Logo"/>
        </a>

        <Button as ="a" className="ButtonLink" href="/">
            Novo Video
        </Button>
        </nav>
        </header>
    );
}

export default Menu;