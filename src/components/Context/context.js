import axios from 'axios';
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import API from '../../utils/api/api';
import ENDPOINTS from './../../utils/endpoints/endpoints';
import { buildQueryParams } from './../../utils/functions/function-utils';

const myContext = createContext();

const initialState = {
    lista: [],
    selected: {},
    loading: false,
    isCadastro: false,
};

export default function PesquisaModalContext({ children }) {
    const [context, setContext] = useState(initialState);
    const [favorito, setFavorito] = useState([]);

    const modalRef = useRef(null);
    const modalFilmeRef = useRef(null);
    const favoritosRef = useRef(null);

    //Receber do localStorage
    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem('favoritos'));
        if (dados) setFavorito(dados);
    }, [setFavorito]);

    //Adicionar localStorage
    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favorito));
    }, [favorito]);

    const handlePesquisaFilme = async (data) => {
        setLoading();
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

        setLoading();
    };

    const handlePesquisaPessoaCDetalhes = async (data) => {
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

    const clickExcluir = useCallback(
        (data) => {
            const list = favorito.filter(
                (movie) => movie.id !== Number(data.id)
            );
            setFavorito(list);
            let name = data.name || data.title;
            alert('O registro ' + name + ' foi removido');
        },
        [setFavorito, favorito]
    );

    const clickFavorito = useCallback(
        (data) => {
            const filtro = favorito.some(
                (movie) => movie.id === Number(data.id)
            );
            if (filtro) {
                alert('Já existe esse registro na sua lista de favoritos');
            } else {
                setFavorito((prevState) => [data, ...prevState]);
            }
        },
        [setFavorito, favorito]
    );

    return (
        <myContext.Provider
            value={{
                context,
                favorito,
                detalharFilme,
                clickExcluir,
                clickFavorito,
                modalRef,
                modalFilmeRef,
                favoritosRef,
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
        favoritosRef,
        handleEntrar,
        handlePesquisaSeries,
        handlePesquisaPessoa,
        handlePesquisaFilme,
        handlePesquisaPessoaCDetalhes,
        setLoading,
        clickExcluir,
        clickFavorito,
        context,
        favorito,
    } = useContext(myContext);
    return {
        detalharFilme,
        modalRef,
        modalFilmeRef,
        favoritosRef,
        handleCadastre,
        handleEntrar,
        handlePesquisaFilme,
        handlePesquisaSeries,
        handlePesquisaPessoa,
        handlePesquisaPessoaCDetalhes,
        setLoading,
        clickExcluir,
        clickFavorito,
        context,
        favorito,
    };
}
