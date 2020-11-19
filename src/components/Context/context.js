import React, { createContext, useState, useContext } from 'react';
import API from './../../utils/api/api';
import axios from 'axios';
import { buildQueryParams } from './../../utils/functions/function-utils';

const myContext = createContext();
// const initialState = [
//   {
//     filmes: [],
//     selected: null,
//     showModalLogin: false,
//     showModalDetalhes: false,
//     isCadastro: false,
//   },
// ];
const initialState = [];

export default function PesquisaModalContext({ children }) {
  const [context, setContext] = useState(initialState);

  const handlePesquisaFilme = (data) => {
    const api = API.URL + data.pesquisa;
    buildQueryParams(api);
    axios
      .get(api)
      .then((response) => {
        const resultado = response.data.results;
        setContext((prevState) => ({ ...prevState, filmes: resultado }));

        console.log(context);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const closeModal = () => {
    setContext((prevState) => ({ ...prevState, showModal: false }));
  };

  const openModal = () => {
    setContext((prevState) => ({ ...prevState, showModal: true }));
  };

  const openModalDetails = () => {
    setContext((prevState) => ({ ...prevState, showDetailsModal: true }));
  };

  const detalharFilme = (data) => {
    setContext((prevState) => ({
      ...prevState,
      saibaMais: data,
    }));
  };

  return (
    <myContext.Provider
      value={{
        handlePesquisaFilme,
        context,
        closeModal,
        openModal,
        detalharFilme,
        openModalDetails,
      }}
    >
      {children}
    </myContext.Provider>
  );
}

export function useMyContext() {
  const {
    handlePesquisaFilme,
    context,
    closeModal,
    openModal,
    detalharFilme,
    openModalDetails,
  } = useContext(myContext);
  return {
    handlePesquisaFilme,
    context,
    closeModal,
    openModal,
    detalharFilme,
    openModalDetails,
  };
}
