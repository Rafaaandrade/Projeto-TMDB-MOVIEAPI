import React from 'react';
import Modal from '@material-ui/core/Modal';
import DetalharFilme from './index';
import { useMyContext } from './../../Context/context';

const ModalDetalharFilme = () => {
  const { context, closeModal, openModalDetails } = useMyContext();

  return (
    <Modal
      open={context.showDetailsModal ? openModalDetails : ''}
      onClose={closeModal}
    >
      <DetalharFilme />
    </Modal>
  );
};

export default ModalDetalharFilme;
