'use client';

import React, { useEffect, useState } from 'react';
import { EngineState } from '../EngineDash/EngineDash';
import Spinner from '../Spinner/Spinner';
import Dropdown from '../Dropdown/Dropdown';

import EngineSVG from '@/../public/icons/engine.svg';

import styles from './EngineModule.module.css';

type EngineModuleProps = {
  name: string;
  subheader: string;
  type: string;
  state: EngineState;
};

const EngineModule = ({ name, subheader, type, state }: EngineModuleProps) => {
    const [loading, setLoading] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    
  return (
    <div className={`${styles.eModContainer}`} onClick={() => setDropdownOpen(true)}>
        <div className={`${styles.eModWrapper}`}>
          { type.toLowerCase() === 'core' ? <EngineSVG /> : <></> }
        </div>
        <div className={`${styles.eModHeader}`}>
          <h1>{name}</h1>
          <h3>{subheader}</h3>
          <h3 className={`${state === EngineState.ACTIVE ? styles.stateActive : (state === EngineState.INACTIVE ? styles.stateInactive : styles.stateNR)}`}>{state}</h3>
        </div>
                          
        {isDropdownOpen && <Dropdown setDropdownOpen={setDropdownOpen} />}
    </div>
  )
}

export default EngineModule;