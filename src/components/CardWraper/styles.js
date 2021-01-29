import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    cardsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginTop: '5px',
        width: '100%',
        backgroundColor: 'lightGray',
    },
}));

export default useStyles;
