import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  cardFilme: {
    height: '300px',
    width: '300px',
  },
  cards: {
    display: 'flex-end',
    justifyContent: 'space-between',
    width: '30%',
    height: '1000px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
    width: '100%',
  },
}));

export default useStyles;
