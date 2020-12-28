import React, {
    createContext,
    useState,
    useContext,
    useRef,
    useCallback,
    useEffect,
} from 'react';
import axios from 'axios';
import { buildQueryParams } from './../../utils/functions/function-utils';
import ENDPOINTS from './../../utils/endpoints/endpoints';

const myContext = createContext();

const initialState = {
    lista: [],
    selected: {},
    loading: false,
    isCadastro: false,
};

export default function PesquisaModalContext({ children }) {
    const [context, setContext] = useState(initialState);
    const modalRef = useRef(null);
    const modalFilmeRef = useRef(null);
    const modalSerieRef = useRef(null);
    const modalPessoaRef = useRef(null);

    //Adicionar localStorage
    useEffect(() => {
        localStorage.setItem('contexto', JSON.stringify(context));
    }, [context]);

    //Receber do localStorage
    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem('contexto'));
        if (dados) setContext(dados);
    }, []);

    const handlePesquisaFilme = async (data) => {
        // console.log(data);
        const api = ENDPOINTS.FILME + data.pesquisa;
        buildQueryParams(api);
        await axios
            .get(api)
            .then((response) => {
                setContext((prevState) => ({
                    ...prevState,
                    lista: response.data.results,
                    ref: 'filme',
                }));
            })
            .catch((error) => {
                console.warn(error);
            });
    };

    const handlePesquisaSeries = async (data) => {
        // console.log(data);
        const api = ENDPOINTS.SERIE + data.pesquisa;
        buildQueryParams(api);
        await axios
            .get(api)
            .then((response) => {
                setContext((prevState) => ({
                    ...prevState,
                    lista: response.data.results,
                    ref: 'serie',
                }));
            })
            .catch((error) => {
                console.warn(error);
            });
    };

    const handlePesquisaPessoa = async (data) => {
        // console.log(data);
        const api = ENDPOINTS.PESSOA + data.pesquisa;
        buildQueryParams(api);
        await axios
            .get(api)
            .then((response) => {
                setContext((prevState) => ({
                    ...prevState,
                    lista: response.data.results,
                    ref: 'pessoa',
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
                context,
                detalharFilme,
                modalRef,
                modalFilmeRef,
                modalSerieRef,
                modalPessoaRef,
                handleCadastre,
                handleEntrar,
                handlePesquisaFilme,
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
        detalharFilme,
        modalRef,
        modalFilmeRef,
        modalSerieRef,
        modalPessoaRef,
        handleCadastre,
        handleEntrar,
        handlePesquisaSeries,
        handlePesquisaPessoa,
        handlePesquisaFilme,
        context,
    } = useContext(myContext);
    return {
        detalharFilme,
        modalRef,
        modalFilmeRef,
        modalSerieRef,
        modalPessoaRef,
        handleCadastre,
        handleEntrar,
        handlePesquisaFilme,
        handlePesquisaSeries,
        handlePesquisaPessoa,
        context,
    };
}
