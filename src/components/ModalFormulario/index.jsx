import Modal from '@material-ui/core/Modal';
import React, { useState, useEffect, useCallback, forwardRef } from 'react';
import Formulario from '../Formulario/index';
import { useMyContext } from './../Context/context';

const ModalFormulario = () => {
  // const { openModal, closeModal, context } = useMyContext();
  const { modalRef, onOpen, onClose } = useMyContext();

  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  useEffect(() => {
    if (modalRef && modalRef !== modalRef.current) {
      modalRef.current = {
        show: () => handleOpen(),
        hide: () => handleClose(),
      };
    }
  }, [modalRef, setOpen, handleClose, handleOpen]);

  console.log('open', open);
  console.log(modalRef);

  return (
    <Modal open={open} onClose={handleClose} ref={modalRef}>
      <Formulario />
    </Modal>
  );
};
export default ModalFormulario;
