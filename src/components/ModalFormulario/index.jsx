import Modal from '@material-ui/core/Modal';
import React from 'react';
import Formulario from '../Formulario/index';
import { useMyContext } from './../Context/context';

const ModalFormulario = () => {
  const { openModal, closeModal, context } = useMyContext();

  return (
    <div>
      <Modal open={context.showModal ? openModal : ''} onClose={closeModal}>
        <Formulario />
      </Modal>
    </div>
  );
};
export default ModalFormulario;
