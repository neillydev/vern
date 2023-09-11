import React from 'react';
import Image from 'next/image';
import Module from '../Module/Module';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.heroContainer} relative`}>
      {/* <div className={`${styles.heroGrid}`}>
        <Image src='https://surfwaves.b-cdn.net/neillydev/grid_7.png' alt='' width={1024} height={1024} />
      </div> */}
      <img src="https://surfwaves.b-cdn.net/neillydev/grid_7.png" alt="" width="1431" height="829" />
      <div className={`${styles.heroWrapper} absolute text-center`}>
        <div className={`${styles.widget}`}>
          <div className={`${styles.widgetText}`}><span>Blog</span> ✦ Introducing VERN. AI</div>
        </div>
        <div className={`${styles.heroHeader} text-center`}>
          <h1>AI For <span className={`${styles.headerModifier}`}>People</span></h1>
          <p className={`${styles.subheader} text-center`}>Bridging the Gap, Unlocking Potential</p>
        </div>
        <Module />
      </div>
    </section>
  )
}

export default Hero