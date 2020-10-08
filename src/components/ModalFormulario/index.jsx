import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Controller, FormProvider } from 'react-hook-form';
import useStyles from './styles';
import TextField from '@material-ui/core/TextField';

const ModalFormulario = ({ cadastrar, methods, clear, show }) => {
  const styles = useStyles();
  const { control, handleSubmit, errors } = methods;

  const OnSubmit = (data) => {
    console.log('dados_formulario', data);
  };

  const body = (
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
  return (
    <div className={styles.modal}>
      <Modal open={show}>{body}</Modal>
    </div>
  );
};
export default ModalFormulario;
