import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

export default function ModalOverlay(props) {
  const closeModal = (evt) => {
    if (evt.target.id === "modalOverlay") {
      props.close();
    }
  };

  return (
    <div id='modalOverlay' className={styles.modalOverlay} onClickCapture={closeModal}>
      {props.children}
    </div>
  )
}
