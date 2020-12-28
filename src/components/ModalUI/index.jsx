import React, {
    useState,
    useCallback,
    useImperativeHandle,
    forwardRef,
} from 'react';
import Modal from '@material-ui/core/Modal';

const ModalUI = (ref, { children }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback(() => setOpen(true), [setOpen]);
    const handleClose = useCallback(() => setOpen(false), [setOpen]);

    useImperativeHandle(ref, () => ({
        show: () => handleOpen(),
        hide: () => handleClose(),
    }));

    return (
        <Modal
            open={() => handleOpen()}
            onClose={() => handleClose()}
            ref={ref}
        >
            {children}
        </Modal>
    );
};

export default forwardRef(ModalUI);
