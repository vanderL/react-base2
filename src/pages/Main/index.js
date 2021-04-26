import React from 'react';

import { FaGithub, FaPlus } from 'react-icons/fa'

import { Container, Form, SubmitButton } from './styles';

function Main() {
    return (
        <Container>
            <h1>
                <FaGithub />
                Repositorios
            </h1>

            <Form>
                <input type="text" placeholder="Adicionar repositórios"/>

                <SubmitButton>
                    <FaPlus />
                </SubmitButton>
            </Form>
        </Container>
  );
}

export default Main;