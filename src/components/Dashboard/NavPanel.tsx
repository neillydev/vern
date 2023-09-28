'use client';

import React from 'react';
import Image from 'next/image';

import HomeSVG from '@/../public/icons/home.svg';
import EngineSVG from '@/../public/icons/engine.svg';
import SettingsSVG from '@/../public/icons/settings.svg';

import styles from './NavPanel.module.css';

const NavPanel = () => {

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
                    <li className={`${styles.navItem}`}>
                        <HomeSVG />
                        <span className={`${styles.navItemTitle}`}>Home</span>
                    </li>
                    <li className={`${styles.navItem}`}>
                        <EngineSVG />
                        <span className={`${styles.navItemTitle}`}>Engines</span>
                    </li>
                    <li className={`${styles.navItem}`}>
                        <SettingsSVG />
                        <span className={`${styles.navItemTitle}`}>Settings</span>
                    </li>
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