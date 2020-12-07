import React from 'react';
import { useMyContext } from './../../Context/context';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import { concatenar } from './../../../utils/functions/function-utils';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardPessoas = () => {
  const { context } = useMyContext();
  const styles = useStyles();
  return (
    <div className={styles.pessoaContainer}>
      {context.pessoas &&
        context.pessoas.map((p) => (
          <div className={styles.cards} key={p.id}>
            <Card>
              <CardMedia component='img' image={concatenar(p.profile_path)} />
              <CardContent>
                <Typography variant='body1' color='textSecondary' component='p'>
                  Nome do Ator : {p.name}
                </Typography>
                <Typography variant='body1' color='textSecondary' component='p'>
                  Populariedade : {p.popularity}
                </Typography>
                <Typography variant='body1' color='textSecondary' component='p'>
                  Filmes trabalhados:
                </Typography>
                {p.known_for &&
                  p.known_for.map((x) => (
                    <Typography
                      variant='body1'
                      color='textSecondary'
                      component='p'
                    >
                      Filme: {x.title} <br />
                      Media de votos: {x.vote_average}
                    </Typography>
                  ))}
              </CardContent>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default CardPessoas;
