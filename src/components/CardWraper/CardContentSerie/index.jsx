import React from 'react';

const CardContentSerie = ({ serie }) => {
  return (
    <>
      <Typography variant='body1' color='textSecondary' component='p'>
        {serie.name}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        {serie.overview}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        {serie.overview}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        Data de lançamento: {serie.first_air_date}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        Populariedade: {serie.popularity}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        Média de votos: {serie.vote_average}
      </Typography>
    </>
  );
};

export default CardContentSerie;
