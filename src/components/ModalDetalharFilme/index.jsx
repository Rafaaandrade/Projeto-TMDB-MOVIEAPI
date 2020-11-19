import React from 'react';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useMyContext } from './../Context/context';

const DetalharFilme = () => {
  const styles = useStyles();
  const { context } = useMyContext();

  return (
    <Paper className={styles.modalFormulario}>
      <Typography variant='h5' component='h2'>
        Detalhes do filme:
      </Typography>
      <Typography variant='body1'>
        Populariedade {context.saibaMais.popularity}
      </Typography>
      <Typography variant='body1'>
        Data de lançamento {context.saibaMais.release_date}
      </Typography>
      <Typography variant='body1'>
        Média de votos {context.saibaMais.vote_average}
      </Typography>
      <Typography variant='body1'>
        Quantidade de votos {context.saibaMais.vote_count}
      </Typography>
    </Paper>
  );
};
export default DetalharFilme;
