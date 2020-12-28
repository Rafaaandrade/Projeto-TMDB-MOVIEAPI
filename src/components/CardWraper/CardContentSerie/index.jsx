import React from 'react';
import Typography from '@material-ui/core/Typography';

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
        </>
    );
};

export default CardContentSerie;
