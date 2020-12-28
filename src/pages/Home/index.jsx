import React from 'react';
import Header from './../../components/Header';
import { useMyContext } from './../../components/Context/context';
import ModalFormulario from './../../components/Modal/FormLoginCadastro';
import CardWrapper from './../../components/CardWraper';
import ModalWrapper from './../../components/ModalWrapper/';

const Home = () => {
    const { context } = useMyContext();
    const resto = context && context.length % 3;
    return (
        <>
            <Header />
            <ModalFormulario />
            <CardWrapper lista={context.lista} resto={resto} />
            {/* <ModalWrapper /> */}
        </>
    );
};

export default Home;
