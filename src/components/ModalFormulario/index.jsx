import Modal from '@material-ui/core/Modal';
import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import Formulario from '../Formulario/index';
import { useMyContext } from './../Context/context';

const ModalFormulario = () => {
  const [open, setOpen] = useState(false);
  const { modalRef } = useMyContext();

  useImperativeHandle(modalRef, () => ({
    show: () => handleOpen(),
    hide: () => handleClose(),
  }));

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <Modal open={open} onClose={handleClose} ref={modalRef}>
      <Formulario />
    </Modal>
  );
};
export default forwardRef(ModalFormulario);
