import React from 'react';

import Image from 'next/image';

import VernSVG from '@/../public/vern.svg';

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <section className={`${styles.navHeader}`}>
      <div className={`${styles.navWrapper} flex justify-between items-center`}>
        <a href="/" className="flex items-center">
          {/* <VernSVG className={`${styles.logo}`} /> */}
          <Image src='https://surfwaves.b-cdn.net/neillydev/vern_rounded.png' alt='' width={36} height={36} />
          <div className={`${styles.title}`}>VERN.</div>
        </a>
        <ul className={`${styles.navCenter}`}>
          <li>
            <a href="" className={`${styles.navCenterControl}`}>Product</a>
          </li>
          <li>
            <a href="" className={`${styles.navCenterControl}`}>Company</a>
          </li>
          <li>
            <a href="" className={`${styles.navCenterControl}`}>Blog</a>
          </li>
          <li>
            <a href="" className={`${styles.navCenterControl}`}>Documentation</a>
          </li>
        </ul>
        <div className={`${styles.navControls} flex items-center`}>
          <a href="/auth" className={`${styles.navBtn} mr-8`}>Login</a>
          <a href="/auth" className={`${styles.navModule} ${styles.navBtn}`}>
            Sign Up
            <div className={`${styles.navModuleBorder}`} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Navigation