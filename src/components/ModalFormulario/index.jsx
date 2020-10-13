import Modal from '@material-ui/core/Modal';
import React from 'react';
import Formulario from '../Formulario/index';
const ModalFormulario = ({ show, setShow, methods }) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Modal open={show} onClose={handleClose}>
        <Formulario methods={methods} />
      </Modal>
    </div>
  );
};
export default ModalFormulario;
