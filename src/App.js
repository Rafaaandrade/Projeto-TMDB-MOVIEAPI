import React from 'react';
import CardUI from './components/CardUI';
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
        <CardUI />
        <ModalDetalharFilme />
      </PesquisaModalContext>
    </div>
  );
}

export default App;
