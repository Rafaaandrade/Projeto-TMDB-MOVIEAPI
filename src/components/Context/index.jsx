import React, { createContext, useContext, useState } from 'react';

const myContext = createContext();
const Context = ({ children }) => {
  const [cadastrar, setCadastrar] = useState(false);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [saibaMais, setSaibaMais] = useState([]);
  const [filme, setFilme] = useState([]);
};
