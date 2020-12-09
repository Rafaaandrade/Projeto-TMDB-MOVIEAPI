import Typography from '@material-ui/core/Typography';
import React from 'react';

const CardContentFilme = ({ filme }) => (
  <>
    <Typography variant='body2' color='textSecondary' component='p'>
      {filme.title}
    </Typography>
    {filme.overview}
  </>
);

export default CardContentFilme;
