import Paper from '@material-ui/core/Paper';
import React from 'react';
import CardWrapper from '../CardWraper';
import { useMyContext } from '../Context/context';
import ModalUI from '../ModalUI';

const ModalFavoritos = () => {
    const { favorito, favoritosRef } = useMyContext();

    return (
        <ModalUI ref={favoritosRef}>
            <Paper
                style={{
                    position: 'absolute',
                    left: 10,
                    top: 50,
                    width: '100 %',
                    height: '90%',
                    border: 'none',
                    scrollable: 'true',
                    overflow: 'scroll',
                    overflowX: 'hidden',
                }}
            >
                <CardWrapper lista={favorito}></CardWrapper>
            </Paper>
        </ModalUI>
    );
};

export default ModalFavoritos;
