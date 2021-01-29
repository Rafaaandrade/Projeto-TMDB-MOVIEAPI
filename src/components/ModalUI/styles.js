import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    modal: {
        alignItems: 'center',
        alignContent: 'center',
        boxShadow: '10px 10px 5px black',
    },
    modalButton: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    btn: {
        color: 'white',
    },
}));

export default useStyles;
