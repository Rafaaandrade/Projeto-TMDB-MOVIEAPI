import React from 'react';
import CardFilmes from './components/Cards/Filmes/index';
import CardSeries from './components/Cards/Series/index';
import CardWrapper from './components/CardWraper/index';
import PesquisaModalContext from './components/Context/context';
import Header from './components/Header/index';
import ModalDetalharFilme from './components/Modal/DetalharFilme/index';
import ModalFormulario from './components/Modal/FormLoginCadastro/index';

function App() {
  return (
    <div className='App'>
      <PesquisaModalContext>
        <Header />
        <ModalFormulario />
        <CardWrapper>
          <CardFilmes />
          <CardSeries />
        </CardWrapper>
        <ModalDetalharFilme />
      </PesquisaModalContext>
    </div>
  );
}

export default App;
