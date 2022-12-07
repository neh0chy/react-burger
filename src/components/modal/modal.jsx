import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";

export default function Modal({ close, children }) {
  useEffect(() => {
    const closeModalEsc = (evt) => (evt.key === "Escape" ? close() : null);
    document.addEventListener('keydown', closeModalEsc);
    return () => {document.removeEventListener('keydown', closeModalEsc)};
  }, [close])

  return ReactDOM.createPortal(
    <ModalOverlay close={close}>
        <div className={styles.modalContainer}>
          <div className={styles.closeButton} onClick={close}>
            <CloseIcon type="primary" />
          </div>
          {children}
        </div>
    </ModalOverlay>,
    document.querySelector('#modal')
  )
}

Modal.propTypes = {
  close: PropTypes.func,
  children: PropTypes.node
};
