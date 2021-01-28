import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    modalContent: {
        maxWidth: ({ width = '100%' }) => width,
        minWidth: ({ width = '25%' }) => width,
        minHeight: ({ height = '30%' }) => height,
        maxHeight: ({ height = '70%' }) => height,
        position: 'absolute',
        top: ' 20%',
        left: ' 40%',
        overflow: 'auto',
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
