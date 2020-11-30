import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useCallback,
} from 'react';
import axios from 'axios';
import { buildQueryParams } from './../../utils/functions/function-utils';
import ENDPOINTS from './../../utils/endpoints/endpoints';

const myContext = createContext();

const initialState = {
  filmes: [],
  selected: {},
  series: [],
  pessoas: [],
  loading: false,
  isCadastro: false,
};
// const initialState = [];

export default function PesquisaModalContext({ children }) {
  const [context, setContext] = useState(initialState);
  const modalRef = useRef(null);
  const modalFilmeRef = useRef(null);

  const handlePesquisaFilme = async (data) => {
    const api = ENDPOINTS.FILME + data.pesquisa;
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

  const handlePesquisaSeries = async (data) => {
    const api = ENDPOINTS.SERIE + data.pesquisa;
    buildQueryParams(api);
    await axios
      .get(api)
      .then((response) => {
        setContext((prevState) => ({
          ...prevState,
          series: response.data.results,
        }));
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handlePesquisaPessoa = async (data) => {
    const api = ENDPOINTS.PESSOA + data.pesquisa;
    buildQueryParams(api);
    await axios
      .get(api)
      .then((response) => {
        setContext((prevState) => ({
          ...prevState,
          pessoas: response.data.results,
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

  const handleCadastre = useCallback(() => {
    modalRef.current && modalRef.current.show();
    setContext((prevState) => ({ ...prevState, isCadastro: true }));
  }, [setContext]);

  const handleEntrar = useCallback(() => {
    modalRef.current && modalRef.current.show();
    setContext((prevState) => ({ ...prevState, isCadastro: false }));
  }, [setContext]);

  console.log('context', context);

  return (
    <myContext.Provider
      value={{
        handlePesquisaFilme,
        context,
        detalharFilme,
        modalRef,
        modalFilmeRef,
        handleCadastre,
        handleEntrar,
        handlePesquisaSeries,
        handlePesquisaPessoa,
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
    handleCadastre,
    handleEntrar,
  } = useContext(myContext);
  return {
    handlePesquisaFilme,
    context,
    detalharFilme,
    modalRef,
    modalFilmeRef,
    handleCadastre,
    handleEntrar,
  };
}
