import React from 'react';
import Typography from '@material-ui/core/Typography';

const CardContentPessoa = ({ pessoa }) => {
  return (
    <>
      <Typography variant='body1' color='textSecondary' component='p'>
        Nome do Ator : {pessoa.name}
      </Typography>
      <Typography variant='body1' color='textSecondary' component='p'>
        Populariedade : {pessoa.popularity}
      </Typography>
      <Typography variant='body1' color='textSecondary' component='p'>
        Filmes trabalhados:
      </Typography>
      {p.known_for &&
        p.known_for.map((x) => (
          <Typography variant='body1' color='textSecondary' component='p'>
            Filme: {x.title} <br />
            Media de votos: {x.vote_average}
          </Typography>
        ))}
    </>
  );
};

export default CardContentPessoa;
