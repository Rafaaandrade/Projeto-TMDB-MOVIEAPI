import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import Modal from '@material-ui/core/Modal';
import DetalharFilme from './index';
import { useMyContext } from './../../Context/context';

const ModalDetalharFilme = () => {
  const { modalFilmeRef } = useMyContext();
  const [open, setOpen] = useState(false);

  useImperativeHandle(modalFilmeRef, () => ({
    show: () => handleOpen(),
    hide: () => handleClose(),
  }));

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  // console.log('openModalDetalhes', open);

  return (
    <Modal open={open} onClose={handleClose} ref={modalFilmeRef}>
      <DetalharFilme />
    </Modal>
  );
};

export default forwardRef(ModalDetalharFilme);
