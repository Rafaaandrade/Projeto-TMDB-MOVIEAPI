import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Controller, FormProvider } from 'react-hook-form';
import useStyles from './styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { schemaForms } from './../../utils/yup/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useMyContext } from './../Context/context';

const OnSubmit = (data) => {
  console.log(data);
};

const Formulario = ({ cadastrar }) => {
  const styles = useStyles();
  const methods = useForm({ resolver: yupResolver(schemaForms) });
  const { control, handleSubmit, errors } = methods;

  const clear = () => {
    methods.setValue('usuario', '');
    methods.setValue('email', '');
    methods.setValue('senha', '');
  };
  return (
    <Paper className={styles.boxFormulario}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(OnSubmit)}>
          <div className={styles.boxConteudo}>
            <Typography component='h3' headline='h2'>
              Seja bem vindo,
              {cadastrar ? 'faça seu cadastro' : 'faça seu login'}
            </Typography>
            <Controller
              as={TextField}
              label='Digite o nome de usuario'
              control={control}
              name='usuario'
            />
            <br />
            {errors.usuario?.message}
            <Controller
              as={TextField}
              label='Digite seu email'
              name='email'
              control={control}
            />
            <br />
            {errors.email?.message}
            <Controller
              as={TextField}
              label='Digite a sua senha'
              name='senha'
              control={control}
              type='password'
            />
            <br />
            {errors.senha?.message}
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button
                variant='contained'
                type='submit'
                size='small'
                control={control}
                className={styles.btn}
              >
                {cadastrar ? 'Cadastro' : 'Login'}
              </Button>
              <Button
                variant='contained'
                control={control}
                size='small'
                className={styles.btn}
                onClick={clear}
              >
                Limpar Campos
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </Paper>
  );
};

export default Formulario;
