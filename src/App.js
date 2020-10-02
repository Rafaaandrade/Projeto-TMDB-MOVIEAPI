import React, { useState } from 'react';
import Header from './components/Header/index';
import CardFilmes from './components/Cards/index';
import Formulario from './components/Formulario/index';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

function App() {
  const schema = yup.object().shape({
    pesquisa: yup.string().max(30, 'Máximo de 30 carácteres'),
  });
  const methods = useForm({ resolver: yupResolver(schema) });
  const api_key = 'b9d9e6686897792884c1e8cb5b919555';
  const api_url =
    'https://api.themoviedb.org/3/search/movie?api_key=' +
    api_key +
    '&language=pt-BR&query=';
  const [filme, setFilme] = useState([]);

  return (
    <div className='App'>
      <Header methods={methods} api_url={api_url} setFilme={setFilme} />
      <CardFilmes filme={filme} />
      <Formulario methods={methods} />
    </div>
  );
}

export default App;
