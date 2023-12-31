'use client';
import React, {useEffect, useRef} from 'react';

import styles from './DashModule.module.css';

type DashModuleProps = {
  active: number;
  inactive: number;
  notReady: number;
}

const DashModule = ({ active, inactive, notReady }: DashModuleProps) => {
  
  const total = active + inactive + notReady;
  const activePercentage = (active / total) * 100;
  const inactivePercentage = (inactive / total) * 100;
  const notReadyPercentage = (notReady / total) * 100;

  const activeRef = useRef<any>(null);
  const inactiveRef = useRef<any>(null);
  const notReadyRef = useRef<any>(null);

  useEffect(() => {
    activeRef?.current?.style.setProperty('--target-width', `${activePercentage}%`);
    inactiveRef?.current?.style.setProperty('--target-width', `${inactivePercentage}%`);
    notReadyRef?.current?.style.setProperty('--target-width', `${notReadyPercentage}%`);
  }, [activePercentage, inactivePercentage, notReadyPercentage]);

  return (
    <>
      <div className={`${styles.moduleWrapper}`}>
        <div className={`${styles.moduleTitle}`}>
          Token Capacity
        </div>
        <div className={`${styles.moduleBody}`}>
          <div className={`${styles.moduleStat}`}>
            <div className={`${styles.statHeader}`}>
              <span className={`${styles.statColor} ${styles.statActive}`} />
              <h3>Total Token Capacity</h3>
            </div>
            <span className={`${styles.stat}`}>
              1000
            </span>
          </div>
          <div className={`${styles.moduleStat}`}>
            <div className={`${styles.statHeader}`}>
              <span className={`${styles.statColor} ${styles.statActive}`} />
              <h3>Used Tokens</h3>
            </div>
            <span className={`${styles.stat}`}>
              437
            </span>
          </div>
        </div>
        <div className={`${styles.moduleFooter}`}>
        </div>
      </div>
      <div className={`${styles.moduleWrapper}`}>
        <div className={`${styles.moduleTitle}`}>
          Engines
        </div>
        <div className={`${styles.moduleBody}`}>
          <div className={`${styles.moduleStat}`}>
            <div className={`${styles.statHeader}`}>
              <span className={`${styles.statColor} ${styles.statActive}`} />
              <h3>Active</h3>
            </div>
            <span className={`${styles.stat}`}>
              {active}
            </span>
          </div>
          <div className={`${styles.moduleStat}`}>
            <div className={`${styles.statHeader}`}>
              <span className={`${styles.statColor} ${styles.statInactive}`} />
              <h3>Inactive</h3>
            </div>
            <span className={`${styles.stat}`}>
              {inactive}
            </span>
          </div>
          <div className={`${styles.moduleStat}`}>
            <div className={`${styles.statHeader}`}>
              <span className={`${styles.statColor} ${styles.statNR}`} />
              <h3>Not Ready</h3>
            </div>
            <span className={`${styles.stat}`}>
              {notReady}
            </span>
          </div>
        </div>
        <div className={`${styles.moduleFooter}`}>
          <span className={`${styles.statBlock} ${styles.statActive}`} ref={activeRef} />
          <span className={`${styles.statBlock} ${styles.statInactive}`} ref={inactiveRef} />
          <span className={`${styles.statBlock} ${styles.statNR}`} ref={notReadyRef} />
        </div>
      </div>
      <div className={`${styles.moduleWrapper}`}>
        <div className={`${styles.moduleTitle}`}>
          Wallet
        </div>
        <div className={`${styles.moduleBody}`}>
          <div className={`${styles.moduleStat}`}>
            <div className={`${styles.statHeader}`}>
              <span className={`${styles.statColor} ${styles.statActive}`} />
              <h3>Available Balance</h3>
            </div>
            <span className={`${styles.stat}`}>
              $10.00
            </span>
          </div>
        </div>
        <div className={`${styles.moduleFooter}`}>
        </div>
      </div>
    </>
  )
}

export default DashModule;