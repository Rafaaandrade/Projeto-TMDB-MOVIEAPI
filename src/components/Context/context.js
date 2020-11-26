import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
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
  const modalRef = useRef(null);

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

  useImperativeHandle(modalRef, () => modalRef.current, []);
  const onOpen = useCallback(() => {
    modalRef.current.show();
  }, [modalRef]);

  const onClose = useCallback(() => {
    modalRef.current.hide();
  }, [modalRef]);



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
        detalharFilme,
        onOpen,
        onClose,
        modalRef,
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
    onOpen,
    onClose,
    detalharFilme,
    modalRef,
  } = useContext(myContext);
  return {
    handlePesquisaFilme,
    context,
    onOpen,
    onClose,
    detalharFilme,
    modalRef,
  };
}
