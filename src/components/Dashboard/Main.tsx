'use client';

import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import NavPanel from './NavPanel';
import DashModule from './DashModule';

import styles from './Main.module.css';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [dashboard, setDashboard] = useState(<DashModule />);

  useEffect(() => {
    /**
     * Fetch dashboard data
     * Must fetch:
     *  # Engine Data
     *  # Available resource data (Tokens, Engines, etc)
     *  # Balance data (Current balance, payments made, etc)
     *  # Usage Data
     * 
     */
    const fakeLoad = async (stateDispatch: React.Dispatch<React.SetStateAction<boolean>>, timeout: number) => {
      await new Promise(resolve => setTimeout(resolve, timeout));
      stateDispatch(false);
    };

    fakeLoad(setLoading, 2000).then(() => {
      fakeLoad(setDashboardLoading, 2000);
    });
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
            <NavPanel setDashboardLoading={setDashboardLoading} setDashboard={setDashboard} />
            <div className={`${styles.mainPanelWrapper} w-full h-full`}>
              {dashboardLoading ?
                <div className={`${styles.loadingWrapperDash} ${styles.loadingWrapperDash} flex w-full h-full justify-center items-center`}>
                  <Loading color='#2f1d70' />
                </div>
                :
                dashboard}
            </div>
          </div>
      }
    </div>
  )
}

export default Main