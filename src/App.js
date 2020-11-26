import React, { useRef } from 'react';
import CardFilmes from './components/Cards/index';
import Formulario from './components/Formulario/index';
import Header from './components/Header/index';
import DetalharFilme from './components/ModalDetalharFilme/index';
import ModalDetalharFilme from './components/ModalDetalharFilme/Modal/index';
import ModalFormulario from './components/ModalFormulario/index';
import PesquisaModalContext from './components/Context/context';

function App() {
  return (
    <div className='App'>
      <PesquisaModalContext>
        <Header />
        <ModalFormulario />
        <CardFilmes>
          <ModalDetalharFilme />
        </CardFilmes>
      </PesquisaModalContext>
    </div>
  );
}

export default App;
