import { yupResolver } from '@hookform/resolvers';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { schemaHeader } from './../../utils/yup/schema';
import { useMyContext } from './../Context/context';
import FieldWrapper from './../FieldWrapper/index';
import useStyles from './styles';

const Header = () => {
  const styles = useStyles();
  const [value, setValue] = useState();
  const methods = useForm({
    reValidateMode: 'onBlur',
    resolver: yupResolver(schemaHeader),
  });
  const { control, handleSubmit, errors } = methods;
  const {
    handlePesquisaFilme,
    handlePesquisaSeries,
    handlePesquisaPessoa,
    context,
    handleCadastre,
    handleEntrar,
  } = useMyContext();

  const handleEscolha = (data) => {
    if (data.escolhas === 'filme') {
      handlePesquisaFilme(data);
      console.log('e um filme', data);
    }
    if (data.escolhas === 'serie') {
      handlePesquisaSeries(data);
      console.log('e uma serie', data);
    }
    if (data.escolhas === 'pessoa') {
      handlePesquisaPessoa(data);
      console.log('e uma pessoa', data);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
            <form onSubmit={handleSubmit(handleEscolha)}>
              <FormControl component='fieldset' size='small'>
                <FieldWrapper
                  required
                  as={RadioGroup}
                  aria-label='escolhas'
                  name='escolhas'
                  errors={errors}
                  control={control}
                  defaultValue={value}
                  row
                >
                  <FormControlLabel
                    onChange={handleChange}
                    label='Filme'
                    name='filme'
                    value='filme'
                    errors={errors}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    onChange={handleChange}
                    label='Série'
                    name='serie'
                    value='serie'
                    errors={errors}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    onChange={handleChange}
                    label='Pessoa'
                    name='pessoa'
                    errors={errors}
                    control={<Radio />}
                    value='pessoa'
                  />
                </FieldWrapper>
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
