import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10',
        marginTop: '100px',
    },
    effect: {
        marginRight: '10px',
    },
}));

export default useStyles;
