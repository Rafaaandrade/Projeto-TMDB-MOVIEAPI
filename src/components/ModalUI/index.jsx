import React, {
    useState,
    useCallback,
    useImperativeHandle,
    forwardRef,
} from 'react';
import Modal from '@material-ui/core/Modal';
import useStyles from './styles';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

const ModalUI = ({ children }, ref) => {
    const [open, setOpen] = useState(false);
    const styles = useStyles();
    const handleOpen = useCallback(() => setOpen(true), [setOpen]);
    const handleClose = useCallback(() => setOpen(false), [setOpen]);

    useImperativeHandle(ref, () => ({
        show: () => handleOpen(),
        hide: () => handleClose(),
    }));

    return (
        <Modal open={open} onClose={() => handleClose()}>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <IconButton
                        className={styles.modalButton}
                        onClick={() => handleClose()}
                    >
                        <CloseIcon />
                    </IconButton>
                    {children}
                </div>
            </div>
        </Modal>
    );
};

export default forwardRef(ModalUI);
