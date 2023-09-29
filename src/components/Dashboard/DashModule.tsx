'use client';
import React from 'react';

import styles from './DashModule.module.css';

const DashModule = () => {
  

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
              9
            </span>
          </div>
          <div className={`${styles.moduleStat}`}>
            <div className={`${styles.statHeader}`}>
              <span className={`${styles.statColor} ${styles.statInactive}`} />
              <h3>Inactive</h3>
            </div>
            <span className={`${styles.stat}`}>
              4
            </span>
          </div>
          <div className={`${styles.moduleStat}`}>
            <div className={`${styles.statHeader}`}>
              <span className={`${styles.statColor} ${styles.statNR}`} />
              <h3>Not Ready</h3>
            </div>
            <span className={`${styles.stat}`}>
              2
            </span>
          </div>
        </div>
        <div className={`${styles.moduleFooter}`}>
          <span className={`${styles.statBlock} ${styles.statActive}`} />
          <span className={`${styles.statBlock} ${styles.statInactive}`} />
          <span className={`${styles.statBlock} ${styles.statNR}`} />
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