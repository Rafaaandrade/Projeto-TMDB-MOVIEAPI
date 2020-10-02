import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const CardFilmes = ({ filme }) => {
  const styles = useStyles();

  const img = '';

  const concatenar = (img, width = 600, height = 900) =>
    `https://image.tmdb.org/t/p/w${width}_and_h${height}_bestv2${img}`;

  console.log(filme);
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      flexDirection='row'
      marginTop='20px'
      width='100%'
    >
      {filme &&
        filme.map((f) => (
          <Box display='flex-end' justifyContent='space-between' width='30%'>
            <Card key={f.id}>
              <CardMedia
                component='img'
                image={concatenar(f.poster_path)}
                className={styles.cardFilme}
              />
              <CardContent className={styles.cardFilme}>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {f.title}
                </Typography>
                {f.overview}
              </CardContent>
            </Card>
          </Box>
        ))}
    </Box>
  );
};

export default CardFilmes;
