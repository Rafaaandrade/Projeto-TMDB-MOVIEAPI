import React, { useState, useCallback, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import DetalharFilme from './index';
import { useMyContext } from './../../Context/context';

const ModalDetalharFilme = () => {
  const { closeModal, openModal, modalRef } = useMyContext();

  return (
    <Modal>
      <DetalharFilme />
    </Modal>
  );
};

export default ModalDetalharFilme;
