import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  modal: {
    width: '400px',
    height: '400px',
  },
  boxFormulario: {
    width: '25%',
    height: '20%',
    border: '3px solid black',
  },
  btn: {
    marginTop: '15px',
  },
  boxConteudo: {
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export default useStyles;
