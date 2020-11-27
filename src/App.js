import React from 'react';
import CardFilmes from './components/Cards/index';
import Header from './components/Header/index';
import ModalDetalharFilme from './components/ModalDetalharFilme/Modal/index';
import ModalFormulario from './components/ModalFormulario/index';
import PesquisaModalContext from './components/Context/context';

function App() {
  return (
    <div className='App'>
      <PesquisaModalContext>
        <Header />
        <ModalFormulario />
        <CardFilmes />
        <ModalDetalharFilme />
      </PesquisaModalContext>
    </div>
  );
}

export default App;
