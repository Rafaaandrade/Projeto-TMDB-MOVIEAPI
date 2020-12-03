import Modal from '@material-ui/core/Modal';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { useMyContext } from './../../Context/context';
import DetalharFilme from './Conteudo/index';

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
