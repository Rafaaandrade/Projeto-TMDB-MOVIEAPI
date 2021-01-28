import React from 'react';
import CardWrapper from '../CardWraper';
import { useMyContext } from '../Context/context';
import ModalUI from '../ModalUI';

const ModalFavoritos = () => {
    const { favoritos, favoritosRef } = useMyContext();
    return (
        <ModalUI ref={favoritosRef}>
            <CardWrapper lista={favoritos}></CardWrapper>;
        </ModalUI>
    );
};

export default ModalFavoritos;
