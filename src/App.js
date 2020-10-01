import React from 'react';
import Header from './components/Header/index';
import CardFilmes from './components/Cards/index';
import { useForm } from 'react-hook-form';

function App() {
  const methods = useForm();
  const api_key = 'b9d9e6686897792884c1e8cb5b919555';
  const api_url =
    'https://api.themoviedb.org/3/search/movie?api_key=' +
    api_key +
    '&language=pt-BR&query=';
  return (
    <div className='App'>
      <Header methods={methods} api_url={api_url} />

      <CardFilmes />
    </div>
  );
}

export default App;
