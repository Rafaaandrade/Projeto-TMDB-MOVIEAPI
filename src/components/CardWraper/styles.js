import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    blankCard: {
        width: '40%',
        height: '100px',
    },
    cardsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginTop: '20px',
        width: '100%',
    },
}));

export default useStyles;
