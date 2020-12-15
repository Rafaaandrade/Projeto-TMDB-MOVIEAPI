import React from 'react';
import Header from './../../components/Header';
import { useMyContext } from './../../components/Context/context';
import ModalFormulario from './../../components/Modal/FormLoginCadastro';
import ModalDetalharFilme from './../../components/Modal/FormLoginCadastro';
import CardWrapper from './../../components/CardWraper';

const Home = () => {
  const { context } = useMyContext();
  const resto = context && context.length % 3;
  return (
    <>
      <Header />
      <ModalFormulario />
      <CardWrapper lista={context.filmes} resto={resto} />
      <CardWrapper lista={context.series} resto={resto} />
      <CardWrapper lista={context.pessoas} resto={resto} />
      <ModalDetalharFilme />
    </>
  );
};

export default Home;
