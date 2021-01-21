import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    cardFilme: {
        height: '250px',
        width: '90%',
        wordWrap: 'overflowWrap',
    },
    cards: {
        display: 'flex-end',
        justifyContent: 'space-between',
        width: '30%',
        height: '25%',
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
