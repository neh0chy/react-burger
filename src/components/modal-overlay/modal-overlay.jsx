import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from "prop-types";
import { propTypesList } from '../../utils/types';

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

ModalOverlay.propTypes = {
  data: PropTypes.arrayOf(propTypesList.isRequired).isRequired
};
