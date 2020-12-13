import React from 'react';
import { useMyContext } from './../../Context/context';
import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
const FormLoginCadastro = () => {
  const { context, handleCadastre, handleEntrar } = useMyContext();

  return (
    <>
      {context.isCadastro ? (
        ''
      ) : (
        <IconButton>
          <AddIcon className={styles.icnAdicionar} />
        </IconButton>
      )}

      <Button className={styles.btnEntrar} onClick={() => handleEntrar()}>
        Entrar
      </Button>

      <Button className={styles.btnCadastre} onClick={() => handleCadastre()}>
        Cadastre-se
      </Button>
    </>
  );
};

export default FormLoginCadastro;
