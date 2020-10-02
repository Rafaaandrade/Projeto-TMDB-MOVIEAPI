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

const Header = ({ methods, api_url, setFilme }) => {
  const styles = useStyles();
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
        console.log(response);
        const resultado = response.data.results;
        setFilme(resultado);
        console.log('resultado', resultado);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <AppBar position='static'>
      <Toolbar>
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

        <Box width='50%' align='right'>
          <IconButton>
            <AddIcon className={styles.icnAdicionar} />
          </IconButton>
        </Box>
        <Box>
          <Button className={styles.btnEntrar}>Entrar</Button>
          <Button className={styles.btnCadastre}>Cadastre-se</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
