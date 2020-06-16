import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import './styles.css';

export default function Header () {
    return (
        <Navbar className="bg-light justify-content-between">
            <Link className="button" to="/">Listagem</Link>
            <Link className="button" to="/novo">Cadastrar novo</Link>
        </Navbar>
    )
}