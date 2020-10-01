import { makeStyles } from "@material-ui/core/styles";

export const useStyles = () => {
  const styles = makeStyles(() => ({
    icnPesquisa: {
      color: "white",
    },
    txtCabecalho: {
      marginRight: "20px",
    },
    inputPesquisa: {
      backgroundColor: "white",
    },
    icnAdicionar: {
      color: "white",
    },
    btnEntrar: {
      color: "white",
    },
    btnCadastre: {
      color: "white",
    },
  }));

  return styles();
};

export default useStyles;
