import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    cardContent: {
        minHeight: ({ height = 300 }) => height,
        maxHeight: ({ height = 1700 }) => height,
        width: '90%',
        wordWrap: 'overflowWrap',
        textAlign: 'start',
    },
    cards: {
        display: 'flex-end',
        justifyContent: 'space-between',
        width: '23%',
        height: '20%',
        marginBottom: '15px',

        boxShadow: 'inset 0 0 1em red, 0 0 1em blue',
    },
    cardImage: {
        height: 400,
    },
}));

export default useStyles;
