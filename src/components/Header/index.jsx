import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useCallback } from 'react';
import { useMyContext } from './../Context/context';
import FormPesquisa from './FormPesquisa';
import useStyles from './styles';

const Header = () => {
    const styles = useStyles();

    const {
        context,
        handleCadastre,
        handleEntrar,
        favoritosRef,
    } = useMyContext();

    const mostrarFavoritos = useCallback(() => {
        favoritosRef.current && favoritosRef.current.show();
        console.log('Botao favorito');
    }, [favoritosRef]);

    return (
        <AppBar position='static'>
            <Toolbar>
                <div className={styles.divPesquisa}>
                    <Typography
                        variant='h6'
                        color='inherit'
                        className={styles.txtCabecalho}
                    >
                        Pesquise aqui por:
                    </Typography>
                    <FormPesquisa />
                </div>

                <div className={styles.divLoginHeader}>
                    {context.isCadastro ? (
                        ''
                    ) : (
                        <IconButton onClick={() => mostrarFavoritos()}>
                            <AddIcon className={styles.icnAdicionar} />
                        </IconButton>
                    )}

                    <Button
                        className={styles.btnEntrar}
                        onClick={() => handleEntrar()}
                    >
                        Entrar
                    </Button>

                    <Button
                        className={styles.btnCadastre}
                        onClick={() => handleCadastre()}
                    >
                        Cadastre-se
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
