import React, { useState } from 'react';
import CardFilmes from './components/Cards/index';
import Formulario from './components/Formulario/index';
import Header from './components/Header/index';
import DetalharFilme from './components/ModalDetalharFilme/index';
import ModalDetalharFilme from './components/ModalDetalharFilme/Modal/index';
import ModalFormulario from './components/ModalFormulario/index';

function App() {
  // const [filme, setFilme] = useState([]);
  // const [cadastrar, setCadastrar] = useState(false);
  // const [show, setShow] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [saibaMais, setSaibaMais] = useState([]);

  // console.log('Informações - saibaMais', saibaMais);
  // console.log('Mostrar modal saibaMais', showModal);
  return (
    <div className='App'>
      <Header
        setFilme={setFilme}
        setCadastrar={setCadastrar}
        cadastrar={cadastrar}
        setShow={setShow}
        show={show}
      />

      <CardFilmes
        filme={filme}
        setSaibaMais={setSaibaMais}
        setShowModal={setShowModal}
      >
        <DetalharFilme saibaMais={saibaMais} showModal={showModal}>
          <ModalDetalharFilme
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </DetalharFilme>
      </CardFilmes>

      <ModalFormulario show={show} setShow={setShow}>
        <Formulario cadastrar={cadastrar} />
      </ModalFormulario>
    </div>
  );
}

export default App;
