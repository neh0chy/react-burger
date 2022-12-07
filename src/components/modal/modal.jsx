import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import { propTypesList } from '../../utils/types';

export default function Modal(props) {
  useEffect(() => {
    const closeModalEsc = (evt) => (evt.key === "Escape" ? props.close() : null);
    document.addEventListener('keydown', closeModalEsc);
    return () => {document.removeEventListener('keydown', closeModalEsc)};
  }, [])

  return ReactDOM.createPortal(
    <ModalOverlay close={props.close}>
        <div className={styles.modalContainer}>
          <div className={styles.closeButton} onClick={props.close}>
            <CloseIcon type="primary" />
          </div>
          {props.children}
        </div>
    </ModalOverlay>,
    document.querySelector('#modal')
  )
}

Modal.propTypes = {
  data: PropTypes.arrayOf(propTypesList.isRequired).isRequired
};
