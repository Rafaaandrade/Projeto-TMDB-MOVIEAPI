import React from 'react';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const DetalharFilme = (obj) => {
  const styles = useStyles();

  return (
    <div className={styles.modalContent}>
      <Paper className={styles.modalDetalhes}>
        <Typography variant='h5' component='h2'>
          {obj.title}
        </Typography>
        <Typography variant='body1'>
          Populariedade : {obj.popularity}
        </Typography>
        <Typography variant='body1'>
          Data de lançamento : {obj.release_date}
        </Typography>
        <Typography variant='body1'>
          Média de votos : {obj.vote_average}
        </Typography>
        <Typography variant='body1'>
          Quantidade de votos : {obj.vote_count}
        </Typography>
      </Paper>
    </div>
  );
};
export default DetalharFilme;
