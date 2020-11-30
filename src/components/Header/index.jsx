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
import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { schemaHeader } from './../../utils/yup/schema';
import useStyles from './styles';
import { useMyContext } from './../Context/context';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const Header = () => {
  const styles = useStyles();
  const [state, setState] = useState({ data: {} });
  const methods = useForm({ resolver: yupResolver(schemaHeader) });
  const { control, handleSubmit, errors } = methods;
  const {
    handlePesquisaFilme,
    handlePesquisaSeries,
    handlePesquisaPessoa,
    context,
    handleCadastre,
    handleEntrar,
  } = useMyContext();

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
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handlePesquisaFilme)}>
              <FormControl component='fieldset' size='small'>
                <Controller
                  as={RadioGroup}
                  aria-label='escolhas'
                  name='escolhas'
                  defaultValue=''
                >
                  <FormControlLabel
                    value='filme'
                    control={<Radio />}
                    label='Filme'
                    name='filme'
                  />
                  <FormControlLabel
                    value='series'
                    control={<Radio />}
                    label='Series'
                  />
                  <FormControlLabel
                    value='pessoas'
                    control={<Radio />}
                    label='Pessoas'
                  />
                </Controller>
              </FormControl>
              <Controller as={Input} name='pesquisa' defaultValue='' />
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
