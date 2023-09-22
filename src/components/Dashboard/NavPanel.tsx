'use client';

import React from 'react';
import Image from 'next/image';

import styles from './NavPanel.module.css';

const NavPanel = () => {
  return (
    <div className={`${styles.panelContainer} flex flex-col pr-8`}>
        <a href="/" className="flex items-center px-4">
          <Image src='https://surfwaves.b-cdn.net/neillydev/vern_rounded.png' alt='' width={36} height={36} />
          <div className={`${styles.title}`}>VERN.</div>
        </a>
        <div className={`${styles.header} py-10`}>
            Main Menu
        </div>
    </div>
  )
}

export default NavPanel