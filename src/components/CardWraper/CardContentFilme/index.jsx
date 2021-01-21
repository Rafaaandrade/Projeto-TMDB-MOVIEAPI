import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './styles';

const CardContentFilme = ({ filme }) => {
    const styles = useStyles();
    return (
        <div className={styles.cardContent}>
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
