import React, { useState } from 'react';
import Header from './components/Header/index';
import CardFilmes from './components/Cards/index';
import Formulario from './components/Formulario/index';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import ModalFormulario from './components/ModalFormulario/index';
import ModalDetalharFilme from './components/ModalDetalharFilme/index';

function App() {
  const schema = yup.object().shape({
    usuario: yup
      .string()
      .required('O campo NOME deve ser preenchido')
      .max(40, 'O máximo de 30 carácteres foi excedido.'),
    email: yup
      .string()
      .required('O campo E-MAIL deve ser preenchido')
      .max(60, 'O máximo de 30 carácteres foi excedido.'),
    senha: yup
      .string()
      .required('O campo SENHA deve ser preenchido')
      .max(30, 'O máximo de 30 carácteres foi excedido.'),
  });
  const methods = useForm({ resolver: yupResolver(schema) });
  const [filme, setFilme] = useState([]);
  const [cadastrar, setCadastrar] = useState(false);
  const [show, setShow] = useState(false);
  const [saibaMais, setSaibaMais] = useState([]);
  const clear = () => {
    methods.setValue('usuario', '');
    methods.setValue('email', '');
    methods.setValue('senha', '');
  };
  const api_key = 'b9d9e6686897792884c1e8cb5b919555';
  const api_url =
    'https://api.themoviedb.org/3/search/movie?api_key=' +
    api_key +
    '&language=pt-BR&query=';

  console.log('Informações - saibaMais', saibaMais);
  console.log('Mostrar modal saibaMais', show);
  return (
    <div className='App'>
      <Header
        methods={methods}
        api_url={api_url}
        setFilme={setFilme}
        setCadastrar={setCadastrar}
        cadastrar={cadastrar}
        setShow={setShow}
        show={show}
      />

      <ModalDetalharFilme saibaMais={saibaMais} />
      <CardFilmes
        filme={filme}
        setSaibaMais={setSaibaMais}
        setShow={setShow}
      ></CardFilmes>

      <ModalFormulario show={show} methods={methods} setShow={setShow}>
        <Formulario cadastrar={cadastrar} clear={clear} />
      </ModalFormulario>
    </div>
  );
}

export default App;
