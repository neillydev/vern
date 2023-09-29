import React from 'react';

import styles from './Loading.module.css';

type LoadingProps = {
  color?: string;
};

const Loading = ({ color }: LoadingProps) => {
  return (
    <span className={styles.loader} style={{ borderTop: `3px solid ${color ? color : '#fff'}` }}></span>
  );
};

export default Loading;