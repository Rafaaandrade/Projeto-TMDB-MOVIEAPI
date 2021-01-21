import React, { forwardRef } from 'react';
import { useMyContext } from '../../components/Context/context';
import PessoaContent from '../Modal/PessoaContent';
import SerieContent from '../Modal/SerieContent';
import FilmeContent from './../Modal/FilmeContent/index';
import ModalUI from './../ModalUI/index';

const ModalWrapper = () => {
    const { modalFilmeRef, context } = useMyContext();

    return (
        <ModalUI ref={modalFilmeRef}>
            {context.ref === 'filme' && <FilmeContent obj={context.selected} />}
            {context.ref === 'serie' && <SerieContent obj={context.selected} />}
            {context.ref === 'pessoa' && (
                <PessoaContent obj={context.selected} />
            )}
        </ModalUI>
    );
};

export default forwardRef(ModalWrapper);
