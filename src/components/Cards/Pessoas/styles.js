import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  pessoaContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
    width: '100%',
  },
  cards: {
    display: 'flex-end',
    justifyContent: 'space-between',
    width: '30%',
    height: '1000px',
  },
}));

export default useStyles;
