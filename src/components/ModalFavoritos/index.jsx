import React from 'react';
import CardWrapper from '../CardWraper';
import { useMyContext } from '../Context/context';
import ModalUI from '../ModalUI';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';

const ModalFavoritos = () => {
    const { favorito, favoritosRef } = useMyContext();
    const style = useStyles();

    return (
        <ModalUI ref={favoritosRef}>
            <Paper
                style={{
                    width: '1200',
                    height: '800',
                    position: 'absolute',
                    overflow: 'scroll',
                }}
            >
                <CardWrapper lista={favorito}></CardWrapper>
            </Paper>
        </ModalUI>
    );
};

export default ModalFavoritos;
