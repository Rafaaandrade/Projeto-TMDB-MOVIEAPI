import React, { createContext, useState, useContext } from 'react';
import API from './../../utils/api/api';
import axios from 'axios';
import { buildQueryParams } from './../../utils/functions/function-utils';

const myContext = createContext();
const initialState = [
  {
    filmes: [],
    selected: null,
    showModalLogin: false,
    showModalDetalhes: false,
    isCadastro: false,
  },
];

export default function PesquisaEModalContext({ children }) {
  const [context, setContext] = useState(initialState);

  const handlePesquisaFilme = (data) => {
    const api = API.URL + data.pesquisa;
    buildQueryParams(api);
    axios
      .get(api)
      .then((response) => {
        const resultado = response.data.results;
        setContext(...context, filmes[resultado]);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <PesquisaEModalContext.Provider value={(handlePesquisaFilme, context)}>
      {children}
    </PesquisaEModalContext.Provider>
  );
}

export function useMyContext() {
  const { handlePesquisaFilme, context } = useContext(myContext);
  return { handlePesquisaFilme, context };
}
