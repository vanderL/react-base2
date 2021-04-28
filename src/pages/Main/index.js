import React, { Component } from 'react';

import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api'

import { Container, Form, SubmitButton, List } from './styles';

class Main extends Component {
    state = {
        repositories: [],
        newRepo: '',
        loading: false,
    };

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();

        const { newRepo, repositories } = this.state;

        this.setState({ loading: true });

        const response = await api.get(`/repos/${newRepo}`);

        const data = {
            name: response.data.full_name,
        };

        this.setState({ 
            repositories: [...repositories, data],
            newRepo: '',
            loading: false,
        });
    };


    render() {
        const { newRepo, loading, repositories } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithub />
                    Repositorios
                </h1>

                <Form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Adicionar repositórios"
                        value={newRepo}
                        onChange={this.handleInputChange}
                    />

                    <SubmitButton loading={loading}>
                        {loading ? <FaSpinner color="#fff" size={14}/> : <FaPlus color="#fff" size={14}/>}
                    </SubmitButton>
                </Form>
                
                <List>
                    {repositories.map(repo => (
                        <li key={repo.name}>
                            <span> {repo.name} </span>
                            <a href="#"> Detalhes </a>
                        </li>
                    ))}  
                </List>
            </Container>
        )
    }
}

export default Main;