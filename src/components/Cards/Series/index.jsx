import React from 'react';
import useStyles from './styles';
import { useMyContext } from './../../Context/context';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { concatenar } from './../../../utils/functions/function-utils';
import Typography from '@material-ui/core/Typography';

const CardSeries = () => {
  const styles = useStyles();
  const { context } = useMyContext();

  return (
    <div className={styles.serieContainer}>
      {context.series &&
        context.series.map((s) => (
          <div className={styles.cards} key={s.id}>
            <Card>
              <CardMedia component='img' image={concatenar(s.poster_path)} />
              <CardContent>
                <Typography variant='body1' color='textSecondary' component='p'>
                  {s.name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {s.overview}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {s.overview}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Data de lançamento: {s.first_air_date}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Populariedade: {s.popularity}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Média de votos: {s.vote_average}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
    </div>
  );
};
export default CardSeries;
