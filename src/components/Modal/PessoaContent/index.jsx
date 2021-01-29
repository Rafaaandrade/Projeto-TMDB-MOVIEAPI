import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const PessoaContent = ({ obj }) => {
    return (
        <Paper>
            <Typography variant='h5' component='h2'>
                {obj.name}
            </Typography>
            {obj.known_for_department &&
                obj.known_for.map((x) => (
                    <Typography
                        variant='body1'
                        color='textSecondary'
                        component='p'
                        key={x.id}
                    >
                        Filme: {x.title || x.name} <br />
                        Media de votos: {x.vote_average}
                    </Typography>
                ))}
        </Paper>
    );
};

export default PessoaContent;
