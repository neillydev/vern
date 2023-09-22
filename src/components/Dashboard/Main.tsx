'use client';

import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import NavPanel from './NavPanel';

import styles from './Main.module.css';

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoad = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fakeLoad();
  }, []);

  return (
    <div className={`${styles.mainContainer} flex w-full h-screen p-8`}>
      {
        loading ?
          <div className={`${styles.loadingWrapper} flex w-full h-full justify-center items-center`}>
            <Loading />
          </div>
          :
          <div className={`${styles.mainWrapper} flex w-full`}>
            <NavPanel />
            <div className={`${styles.mainPanelWrapper} w-full h-full`}>
              
            </div>
          </div>
      }
    </div>
  )
}

export default Main