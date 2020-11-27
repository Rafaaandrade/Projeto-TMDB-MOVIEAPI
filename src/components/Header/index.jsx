import { yupResolver } from '@hookform/resolvers';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Input from '@material-ui/core/Input';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { schemaHeader } from './../../utils/yup/schema';
import useStyles from './styles';
import { useMyContext } from './../Context/context';

const Header = () => {
  const styles = useStyles();
  const methods = useForm({ resolver: yupResolver(schemaHeader) });
  const { control, handleSubmit, errors } = methods;
  const { handlePesquisaFilme, context, modalRef } = useMyContext();

  const handleCadastre = () => {
    modalRef.current && modalRef.current.show();
  };

  const handleEntrar = () => {
    modalRef.current && modalRef.current.show();
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
          {context.isCadastro ? (
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
