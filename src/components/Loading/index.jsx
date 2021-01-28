import { CircularProgress, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Loading = () => {
    const styles = useStyles();

    return (
        <div className={styles.content}>
            <div className={styles.effect}>
                <CircularProgress size={25} color='primary' />
            </div>
            <div>
                <Typography variant='h5' color='primary'>
                    Carregando...
                </Typography>
            </div>
        </div>
    );
};

export default Loading;
