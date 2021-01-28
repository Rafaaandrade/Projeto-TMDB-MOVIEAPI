import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    modalContent: {
        width: '25%',
        height: '30%',
        position: 'absolute',
        top: ' 20%',
        left: ' 40%',
    },
    modal: {
        alignItems: 'center',
        alignContent: 'center',
    },
    modalButton: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
}));

export default useStyles;
