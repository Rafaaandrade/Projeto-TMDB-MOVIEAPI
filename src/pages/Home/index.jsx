import React from 'react';
import Header from './../../components/Header';
import { useMyContext } from './../../components/Context/context';
import ModalFormulario from './../../components/Modal/FormLoginCadastro';
import CardWrapper from './../../components/CardWraper';
import ModalWrapper from './../../components/ModalWrapper/';
import Loading from './../../components/Loading/index';
import ModalFavoritos from '../../components/ModalFavoritos';

const Home = () => {
    const { context, favorito } = useMyContext();
    const resto = context && context.length % 4;
    const isLoading = context.loading;

    return (
        <>
            <Header />
            <ModalFormulario />
            {favorito.length !== 0 && <ModalFavoritos />}
            {isLoading ? (
                <Loading />
            ) : (
                <CardWrapper lista={context.lista} resto={resto} />
            )}

            <ModalWrapper />
        </>
    );
};

export default Home;
