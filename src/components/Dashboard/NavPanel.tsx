'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import HomeSVG from '@/../public/icons/home.svg';
import EngineSVG from '@/../public/icons/engine.svg';
import SettingsSVG from '@/../public/icons/settings.svg';

import styles from './NavPanel.module.css';

const NavPanel = () => {

    const tabs = [
        { title: 'Home', icon: <HomeSVG />, route: '' },
        { title: 'Engines', icon: <EngineSVG />, route: '' },
        { title: 'Settings', icon: <SettingsSVG />,route: ''},
    ];
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);


    const handleLogout = () => {

        // delete cookie

        // fetch logout endpoint to destroy token


    };

    return (
        <div className={`${styles.panelContainer} flex flex-col pr-8 justify-between`}>
            <div className={`${styles.panelWrapper}`}>
                <a href="/" className="flex items-center px-2">
                    <Image src='https://surfwaves.b-cdn.net/neillydev/vern_rounded.png' alt='' width={40} height={40} />
                    <div className={`${styles.title}`}>VERN.</div>
                </a>
                <div className={`${styles.header} pt-8`}>
                    Main Menu
                </div>
                <ul className={`${styles.navList}`}>
                    {
                        tabs.map((tab, i) => 
                            <li
                            key={i}  
                            className={`${styles.navItem} ${selectedTabIndex === i ? styles.navItemSelected : styles.navItemUnselected }`}
                            onClick={() => setSelectedTabIndex(i)}>
                                {tab.icon}
                                <span className={`${styles.navItemTitle}`}>{tab.title}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className={`${styles.profileModule} py-2 px-8`}>
                <div className={`${styles.profileModuleHeader} flex items-center`}>
                    <div className={`${styles.profileImg}`}>
                        {/** Placeholder SVG */}
                    </div>
                    <div className={`${styles.profileHeaderWrapper} flex flex-col px-2`}>
                        <h2 className={`${styles.profileHeader}`}>Vernon Neilly</h2>
                        <h2 className={`${styles.profileSubheader}`}>neillydev@gmail.com</h2>
                    </div>
                </div>
                <button className={`${styles.logoutBtn} ${styles.btnModule} px-10 py-2 whitespace-nowrap my-2 w-full`} onClick={handleLogout}>
                    Log Out
                    <div className={`${styles.btnModuleBorder}`} />
                </button>
            </div>
        </div>
    )
}

export default NavPanel