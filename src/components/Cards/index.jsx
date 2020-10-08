import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './styles';

const CardFilmes = ({ filme }) => {
  const styles = useStyles();

  const img = '';

  const concatenar = (img, width = 600, height = 900) =>
    `https://image.tmdb.org/t/p/w${width}_and_h${height}_bestv2${img}`;

  const resto = filme && filme.length % 3;

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      flexWrap='wrap'
      marginTop='20px'
      width='100%'
    >
      {filme &&
        filme.map((f) => (
          <Box
            display='flex-end'
            justifyContent='space-between'
            width='30%'
            height='1000px'
          >
            <Card key={f.id}>
              <CardMedia component='img' image={concatenar(f.poster_path)} />
              <CardContent className={styles.cardFilme}>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {f.title}
                </Typography>
                {f.overview}
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  Saiba Mais
                </Button>
                <Button size='small' color='primary'>
                  Excluir
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      {Array.apply(null, { length: 3 - resto }).map((r) => (
        <Box width='30%' height='100px'></Box>
      ))}
    </Box>
  );
};

export default CardFilmes;
