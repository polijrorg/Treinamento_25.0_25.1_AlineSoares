import React from 'react';
import SideBar from 'Componentes/SideBar';
import TwoSideBar from 'Componentes/TwoSideBar';
import Central from 'Componentes/Central';
import * as S from './styles';

const ExampleTemplate = () => {
    return (
        <S.Container>
            <SideBar />
            <Central />
            <TwoSideBar />
        </S.Container>
    );
};

export default ExampleTemplate;
