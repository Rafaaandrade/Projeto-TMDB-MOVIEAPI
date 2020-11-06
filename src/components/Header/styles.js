import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  icnPesquisa: {
    color: 'white',
  },
  txtCabecalho: {
    marginRight: '20px',
  },
  inputPesquisa: {
    backgroundColor: 'white',
  },
  icnAdicionar: {
    color: 'white',
  },
  btnEntrar: {
    color: 'white',
  },
  btnCadastre: {
    color: 'white',
  },
  divPesquisa: {
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  divLoginHeader: {
    width: '30%',
    align: 'right',
  },
}));

export default useStyles;
