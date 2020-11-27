import React from 'react';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useMyContext } from './../Context/context';

const DetalharFilme = () => {
  const styles = useStyles();
  const { context } = useMyContext();
  const { selected } = context;

  return (
    <Paper className={styles.modalDetalhes}>
      <Typography variant='h5' component='h2'>
        Detalhes do filme:
      </Typography>
      <Typography variant='body1'>
        Populariedade {selected.popularity}
      </Typography>
      <Typography variant='body1'>
        Data de lançamento {selected.release_date}
      </Typography>
      <Typography variant='body1'>
        Média de votos {selected.vote_average}
      </Typography>
      <Typography variant='body1'>
        Quantidade de votos {selected.vote_count}
      </Typography>
    </Paper>
  );
};
export default DetalharFilme;
