import React from 'react';

import { Title } from './styles';

function Main() {
    return (
        <Title error={true}>
            Main
            <small> Olá mundo!</small>
        </Title>

  );
}

export default Main;