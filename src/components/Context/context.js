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
import API from '../../utils/api/api';

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
        setLoading();
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
        setLoading();
    };

    const handlePesquisaSeries = async (data) => {
        // console.log(data);
        setLoading();
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
        setLoading();
    };

    const handlePesquisaPessoa = async (data) => {
        setLoading();
        // console.log(data);
        const api = ENDPOINTS.PESSOA + data.pesquisa;
        buildQueryParams(api);
        await axios
            .get(api)
            .then((response) => {
                // const apiDetalhes =
                setContext((prevState) => ({
                    ...prevState,
                    lista: response.data.results,
                    ref: 'pessoa',
                }));
            })
            .catch((error) => {
                console.warn(error);
            });

        setLoading();
    };

    const handlePesquisaPessoaCDetalhes = async (data) => {
        console.log(data);
        const api =
            'https://api.themoviedb.org/3/person/' +
            context.lista.id +
            '?api_key=' +
            API.KEY;
        buildQueryParams(api);
        await axios.get(api).then((response) => {
            setContext((prevState) => ({
                ...prevState,
                lista: response.data.results,
            }));
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

    const setLoading = useCallback(() => {
        setContext((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));
    }, [setContext]);

    console.log('context', context);

    return (
        <myContext.Provider
            value={{
                context,
                detalharFilme,
                modalRef,
                modalFilmeRef,
                handleCadastre,
                handleEntrar,
                handlePesquisaFilme,
                handlePesquisaSeries,
                handlePesquisaPessoa,
                handlePesquisaPessoaCDetalhes,
                setLoading,
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
        handleCadastre,
        handleEntrar,
        handlePesquisaSeries,
        handlePesquisaPessoa,
        handlePesquisaFilme,
        handlePesquisaPessoaCDetalhes,
        setLoading,
        context,
    } = useContext(myContext);
    return {
        detalharFilme,
        modalRef,
        modalFilmeRef,
        handleCadastre,
        handleEntrar,
        handlePesquisaFilme,
        handlePesquisaSeries,
        handlePesquisaPessoa,
        handlePesquisaPessoaCDetalhes,
        setLoading,
        context,
    };
}
