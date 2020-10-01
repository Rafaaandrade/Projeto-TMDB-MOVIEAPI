import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const CardFilmes = () => {
  const styles = useStyles();

  return (
    <Card>
      <CardMedia
        component='img'
        alt='Contemplative Reptile'
        image='https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg'
        title='Contemplative Reptile'
        className={styles.cardFilme}
      />
      <CardContent className={styles.cardFilme}>
        <Typography variant='body2' color='textSecondary' component='p'>
          Sinopse/Titulo Filme?
        </Typography>
        A sinopse do filme será aqui.
      </CardContent>
    </Card>
  );
};

export default CardFilmes;
