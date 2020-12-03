import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './styles';
import { concatenar } from './../../../utils/functions/function-utils';
import { useMyContext } from './../../Context/context';

const CardFilmes = () => {
  const styles = useStyles();
  const { context, detalharFilme, modalFilmeRef } = useMyContext();

  const resto = context.filmes && context.filmes.length % 3;

  const clickSaibaMais = (data) => {
    modalFilmeRef.current && modalFilmeRef.current.show();
    detalharFilme(data);
  };

  return (
    <div className={styles.cardsContainer}>
      {context.filmes &&
        context.filmes.map((f) => (
          <div className={styles.cards} key={f.id}>
            <Card>
              <CardMedia component='img' image={concatenar(f.poster_path)} />
              <CardContent className={styles.cardFilme}>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {f.title}
                </Typography>
                {f.overview}
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => clickSaibaMais(f)}
                  size='small'
                  color='primary'
                >
                  Saiba Mais
                </Button>
                <Button size='small' color='primary'>
                  Excluir
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      {Array.apply(null, { length: 3 - resto }).map((r, index) => (
        <div className={styles.blankCard} key={index}></div>
      ))}
    </div>
  );
};

export default CardFilmes;
