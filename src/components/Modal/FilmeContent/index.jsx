import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const FilmeContent = ({ obj }) => {
    return (
        <Paper>
            <Typography variant='h5' component='h2'>
                {obj.title}
            </Typography>
            <Typography variant='body1'>
                Populariedade : {obj.popularity}
            </Typography>
            <Typography variant='body1'>
                Data de lançamento : {obj.release_date}
            </Typography>
            <Typography variant='body1'>
                Média de votos : {obj.vote_average}
            </Typography>
            <Typography variant='body1'>
                Quantidade de votos : {obj.vote_count}
            </Typography>
        </Paper>
    );
};

export default FilmeContent;
