import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  boxFormulario: {
    width: '25%',
    height: '38%',
    position: 'absolute',
    top: ' 20%',
    left: ' 40%',
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
