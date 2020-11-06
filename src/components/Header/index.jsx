import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import useStyles from './styles';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { Controller, FormProvider } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { buildQueryParams } from './../../utils/functions/function-utils';
import { schemaHeader } from './../../utils/yup/schema';
import API from './../../utils/api/api';

const Header = ({ setFilme, setCadastrar, cadastrar, setShow, show }) => {
  const styles = useStyles();
  const methods = useForm({ resolver: yupResolver(schemaHeader) });
  const { control, handleSubmit, errors } = methods;

  const handlePesquisaFilme = (data) => {
    const api = API.URL + data.pesquisa;
    buildQueryParams(api);
    axios
      .get(api)
      .then((response) => {
        const resultado = response.data.results;
        setFilme(resultado);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleCadastre = () => {
    setCadastrar(true);
    setShow(true);
    console.log('abrir modal', show);
    console.log('cadastrol', cadastrar);
  };

  const handleEntrar = () => {
    setCadastrar(false);
    setShow(true);
    console.log('cadastro', cadastrar);
    console.log('abrir modal', show);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <div className={styles.divPesquisa}>
          <Typography
            component='div'
            variant='headline'
            color='inherit'
            className={styles.txtCabecalho}
          >
            Pesquise aqui seu filme
          </Typography>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handlePesquisaFilme)}>
              <Controller
                as={Input}
                label='Digite o filme que deseja pesquisar'
                control={control}
                name='pesquisa'
              />
              <IconButton type='submit' control={control}>
                <SearchIcon className={styles.icnPesquisa} />
              </IconButton>
              <br />
              {errors.pesquisa?.message}
            </form>
          </FormProvider>
        </div>
        <div className={styles.divLoginHeader}>
          {cadastrar ? (
            ''
          ) : (
            <IconButton>
              <AddIcon className={styles.icnAdicionar} />
            </IconButton>
          )}

          <Button className={styles.btnEntrar} onClick={() => handleEntrar()}>
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
