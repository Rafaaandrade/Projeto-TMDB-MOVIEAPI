import React , {useState, useCallback, useImperativeHandle} from `react`;
import Modal from '@material-ui/core/Modal';

const ModalUI = (ref) => {

  const [state, setState] = useState();
  const handleOpen = useCallback(() => setState(true), [setState])
  const handleClose = useCallback(() => setState(false), [setState])

  useImperativeHandle(ref, () => ({
    show: () => handleOpen(),
    hide: () => handleClose()
}));

  return (
    <Modal  open={open} onClose={handleClose} ref={ref}>
      {children}
    </Modal>
  )
}

export default ModalUI;