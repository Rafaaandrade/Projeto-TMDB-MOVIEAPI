import Typography from '@material-ui/core/Typography';
import React from 'react';

const CardContentFilme = ({ filme }) => {
    return (
        <div>
            <Typography variant='body2' color='textSecondary' component='p'>
                {filme.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
                {filme.overview}
            </Typography>
        </div>
    );
};

export default CardContentFilme;
