import React from 'react';
import { useMyContext } from '../../components/Context/context';
import PessoaContent from '../Modal/PessoaContent';
import SerieContent from '../Modal/SerieContent';
import FilmeContent from './../Modal/FilmeContent/index';
import ModalUI from './../ModalUI/index';

const ModalWrapper = () => {
    const {
        modalFilmeRef,
        modalSerieRef,
        modalPessoaRef,
        modalRef,
        context,
    } = useMyContext();

    // const checkRef = () => {
    //     switch (context.ref) {
    //         case 'filme':
    //             return modalFilmeRef;

    //         case 'serie':
    //             return modalSerieRef;

    //         case 'pessoa':
    //             return modalPessoaRef;
    //         default:
    //     }
    // };

    return (
        <ModalUI ref={modalRef}>
            {context.ref === 'filme' && <FilmeContent />}
            {context.ref === 'serie' && <SerieContent />}
            {context.ref === 'pessoa' && <PessoaContent />}
        </ModalUI>
    );
};

export default ModalWrapper;
