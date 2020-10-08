import {
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import useStyles from './styles';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { Controller, FormProvider } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

const Header = ({
  api_url,
  setFilme,
  setCadastrar,
  cadastrar,
  setShow,
  show,
}) => {
  const styles = useStyles();

  const schema = yup.object().shape({
    pesquisa: yup.string().max(30, 'Máximo de 30 carácteres'),
  });

  const methods = useForm({ resolver: yupResolver(schema) });
  const { control, handleSubmit, errors } = methods;

  const isNotEmpty = (object) => {
    return object !== '' && object !== undefined && object !== null;
  };

  const buildQueryParams = (api_url) => {
    const cleanQueryJson = Object.entries(api_url).reduce(
      (a, [k, v]) => (isNotEmpty(v) ? ((a[k] = v), a) : a),
      {}
    );
    return Object.entries(cleanQueryJson)
      .map((pair) => pair.map(encodeURIComponent).join('='))
      .join('&');
  };

  const handlePesquisaFilme = (data) => {
    // console.log(data);
    const api = api_url + data.pesquisa;
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
        <Box width='30%' align='right'>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
