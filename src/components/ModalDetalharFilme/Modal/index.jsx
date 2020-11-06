import React from 'react';
import Modal from '@material-ui/core/Modal';
import DetalharFilme from './index';

const ModalDetalharFilme = ({ showModal, setShowModal }) => {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Modal open={showModal} onClose={handleClose}>
      <DetalharFilme />
    </Modal>
  );
};

export default ModalDetalharFilme;
