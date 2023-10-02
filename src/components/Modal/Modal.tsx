'use client';
import React, { useState } from 'react';
import Btn from '../Btn/Btn';

import styles from './Modal.module.css';

type ModalProps = {
  handleCloseModal: () => void;
};

const Modal = ({ handleCloseModal }: ModalProps) => {
  const [prompt, setPrompt] = useState();
  return (
    <div className={`${styles.modalContainer}`}>
      <div className={`${styles.modalBg}`} onClick={handleCloseModal} />
      <div className={`${styles.modalWrapper}`}>
        <div className={`${styles.modalInsideWrapper}`}>
          <h2 className={`${styles.modalBigHeader}`}>
            New Engine
          </h2>
          <h2 className={`${styles.modalHeader}`}>
            Engine Name
          </h2>
          <div className={`${styles.modalInputWrapper}`}>
            <input type="text" placeholder='Enter a name' className={`${styles.modalInput}`} />
          </div>
          <h2 className={`${styles.modalHeader}`}>
            Enter a prompt
          </h2>
          <div className={`${styles.moduleContainer}`}>
            <div className={`${styles.moduleWrapper}`}>
              <span className={`${styles.moduleText}`}>
                <textarea name="prompt" id="prompt" placeholder={'I want an AI engine that...'} />
              </span>
            </div>
          </div>
          <div className={`${styles.modalFooter}`}>
            <Btn content='Create' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal