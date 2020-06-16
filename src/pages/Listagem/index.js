import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";

import api from '../../services/api';

import './styles.css';

export default function Listagem () {
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        api.get('pessoas').then(response => {
            setPessoas(response.data);
        })
    }, []);

    return (
        <div className="listagem-container">
            
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pessoas.map(pessoa => (
                            <tr key={pessoa.id}>
                                <td>{pessoa.nome}</td>
                                <td>{pessoa.idade}</td>
                                <td>Editar / Excluir</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </div>
    );
};