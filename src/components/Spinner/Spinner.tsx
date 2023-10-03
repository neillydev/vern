import React from 'react';

import styles from './Spinner.module.css';

type SpinnerProps = {
  scale: number;
}

const Spinner = ({ scale }: SpinnerProps) => {
  return (
    <div className={`${styles.spinner}`} style={{transform: `scale(${scale})`}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default Spinner