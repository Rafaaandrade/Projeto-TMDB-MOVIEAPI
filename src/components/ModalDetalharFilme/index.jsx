import React from 'react';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const ModalDetalharFilme = ({ saibaMais }) => {
  const styles = useStyles();
  return (
    <>
      {saibaMais ? (
        <div className={styles.modalFormulario}>
          <Typography variant='h5' component='h2'>
            Detalhes do filme:
          </Typography>
          <Typography variant='body1'>
            Populariedade {saibaMais.popularity}
          </Typography>
          <Typography variant='body1'>
            Data de lançamento {saibaMais.release_date}
          </Typography>
          <Typography variant='body1'>
            Média de votos {saibaMais.vote_average}
          </Typography>
          <Typography variant='body1'>
            Quantidade de votos {saibaMais.vote_count}
          </Typography>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
export default ModalDetalharFilme;
