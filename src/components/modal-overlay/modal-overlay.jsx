import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from "prop-types";

export default function ModalOverlay({ close, children }) {
  const closeModal = (evt) => {
    if (evt.target.id === "modalOverlay") {
      close();
    }
  };

  return (
    <div id='modalOverlay' className={styles.modalOverlay} onClickCapture={closeModal}>
      {children}
    </div>
  )
}

ModalOverlay.propTypes = {
  close: PropTypes.func,
  children: PropTypes.node
};
