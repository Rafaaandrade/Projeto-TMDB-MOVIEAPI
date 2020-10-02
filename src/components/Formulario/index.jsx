import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Controller, FormProvider } from 'react-hook-form';
import useStyles from './styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Formulario = ({ methods }) => {
  const styles = useStyles();
  const { control, handleSubmit, errors } = methods;
  return (
    <Paper className={styles.boxFormulario}>
      <FormProvider {...methods}>
        <form>
          <Typography component='div' headline='h4'>
            Seja bem vindo, faça seu login
          </Typography>
          <Controller
            as={TextField}
            label='Digite o nome de usuario'
            control={control}
            name='usuario'
          />
          <br />
          <Controller
            as={TextField}
            label='Digite seu email'
            name='email'
            control={control}
          />
          <br />
          <Controller
            as={TextField}
            label='Digite a sua senha'
            name='senha'
            control={control}
            type='password'
          />
          <br />
          <Button
            variant='contained'
            type='submit'
            size='small'
            control={control}
          >
            Adicionar
          </Button>
          <Button
            variant='contained'
            type='submit'
            control={control}
            size='small'
          >
            Limpar Campos
          </Button>
        </form>
      </FormProvider>
    </Paper>
  );
};

export default Formulario;
