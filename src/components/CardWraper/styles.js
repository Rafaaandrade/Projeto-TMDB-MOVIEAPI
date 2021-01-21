import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    blankCard: {
        width: '30%',
        height: '100px',
    },
    cardsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '20px',
        width: '100%',
        height: '20%',
    },
}));

export default useStyles;
