import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useCallback,
} from 'react';
import API from './../../utils/api/api';
import axios from 'axios';
import { buildQueryParams } from './../../utils/functions/function-utils';

const myContext = createContext();

const initialState = {
  filmes: [],
  selected: {},
  loading: false,
};
// const initialState = [];

export default function PesquisaModalContext({ children }) {
  const [context, setContext] = useState(initialState);
  const modalRef = useRef(null);
  const modalFilmeRef = useRef(null);

  const handlePesquisaFilme = async (data) => {
    const api = API.URL + data.pesquisa;
    buildQueryParams(api);
    await axios
      .get(api)
      .then((response) => {
        setContext((prevState) => ({
          ...prevState,
          filmes: response.data.results,
        }));
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const detalharFilme = useCallback(
    (data) => {
      setContext((prevState) => ({ ...prevState, selected: data }));
    },
    [setContext]
  );

  return (
    <myContext.Provider
      value={{
        handlePesquisaFilme,
        context,
        detalharFilme,
        modalRef,
        modalFilmeRef,
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
    detalharFilme,
    modalRef,
    modalFilmeRef,
  } = useContext(myContext);
  return {
    handlePesquisaFilme,
    context,
    detalharFilme,
    modalRef,
    modalFilmeRef,
  };
}
