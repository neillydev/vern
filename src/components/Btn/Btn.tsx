import React from 'react';

import styles from './Btn.module.css';

type BtnProps = {
    content: string;
}

const Btn = ({ content }: BtnProps) => {
  return (
    <button className={`${styles.btn} ${styles.btnModule} px-10 py-2 whitespace-nowrap my-2 w-full`}>
        {content}
        <div className={`${styles.btnModuleBorder}`} />
    </button>
  )
}

export default Btn