import React from 'react';
import Header from './../../components/Header';
import { useMyContext } from './../../components/Context/context';
import ModalFormulario from './../../components/Modal/FormLoginCadastro';
import ModalDetalharFilme from './../../components/Modal/FormLoginCadastro';
import CardWrapper from './../../components/CardWraper';

const Home = () => {
  const { context } = useMyContext();
  return (
    <>
      <Header />
      <ModalFormulario />
      <CardWrapper lista={context} />
      <ModalDetalharFilme />
    </>
  );
};

export default Home;
