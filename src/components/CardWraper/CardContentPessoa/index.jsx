import React from 'react';
import Typography from '@material-ui/core/Typography';

const CardContentPessoa = ({ pessoa }) => {
    return (
        <>
            <Typography variant='body1' color='textSecondary' component='p'>
                {pessoa.name}
            </Typography>
            <Typography variant='body1' color='textSecondary' component='p'>
                Populariedade : {pessoa.popularity}
            </Typography>
        </>
    );
};

export default CardContentPessoa;
