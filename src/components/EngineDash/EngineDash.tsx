'use client';

import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

import styles from './EngineDash.module.css';

const EngineDash = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      /**
       * Fetch dashboard data
       * Must fetch:
       *  # Engine Data
       *  # Available resource data
       * 
       */
      const fakeLoad = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
      };
  
      fakeLoad();
    }, []);
  return (
    <div className={`${styles.edashContainer} flex w-full h-screen p-8`}>
        {
        loading ?
          <div className={`${styles.loadingWrapper} flex w-full h-full justify-center items-center`}>
            <Loading />
          </div>
          :
            <div className={`${styles.edashWrapper}`}></div>
        }
    </div>
  )
}

export default EngineDash