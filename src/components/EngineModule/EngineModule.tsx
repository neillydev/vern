'use client';

import React, { useEffect, useState } from 'react';

import EngineSVG from '@/../public/icons/engine.svg';

import styles from './EngineModule.module.css';

type EngineModuleProps = {
  name: string;
  subheader: string;
  type: string;
};

const EngineModule = ({ name, subheader, type }: EngineModuleProps) => {
    const [loading, setLoading] = useState(false);
  return (
    <div className={`${styles.eModContainer}`}>
        <div className={`${styles.eModWrapper}`}>
          { type.toLowerCase() === 'core' ? <EngineSVG /> : <></> }
        </div>
        <div className={`${styles.eModHeader}`}>
          <h1>{name}</h1>
          <h3>{subheader}</h3>
        </div>
    </div>
  )
}

export default EngineModule;