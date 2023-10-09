'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Loading from '../Loading/Loading';
import EngineModule from '../EngineModule/EngineModule';
import Dropdown from '../Dropdown/Dropdown';

import HomeSVG from '@/../public/icons/home.svg';
import EngineSVG from '@/../public/icons/engine.svg';
import SearchSVG from '@/../public/icons/search.svg';
import PlusSVG from '@/../public/icons/plus.svg';

import styles from './EngineDash.module.css';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';

export enum EngineState {
  ACTIVE = "Running",
  INACTIVE = "Inactive",
  NR = "Loading",
};

type Engine = {
  name: string;
  subheader: string;
  type: string;
  state: EngineState;
};

const EngineDash = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const moduleRef = useRef<any>(null);

  const [loading, setLoading] = useState(true);

  const testEngine: Engine = {
    name: 'Test Engine',
    subheader: 'Core Engine',
    type: 'core',
    state: EngineState.ACTIVE,
  };
  const testEngine_2: Engine = {
    name: 'Test Engine 2',
    subheader: 'Core Engine',
    type: 'core',
    state: EngineState.ACTIVE,
  };
  const testEngine_3: Engine = {
    name: 'Loading Engine',
    subheader: 'Core Engine',
    type: 'core',
    state: EngineState.NR,
  };

  const [engines, setEngines] = useState<Engine[]>([testEngine, testEngine_2, testEngine_3]);
  const [selectedEngineIndex, setSelectedEngineIndex] = useState(-1);

  const [debugLines, setDebugLines] = useState<any>(['Engine Dashboard initiating...']);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

  const tabs = [
    { title: 'Home', icon: <HomeSVG />, route: '/dashboard', },
    { title: 'Engines', icon: <EngineSVG />, route: '' },
  ];
  const [selectedTabIndex, setSelectedTabIndex] = useState(1);

  const handleMouseDown = (e: any) => {
    console.log("CLICKED DRAG");
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: any) => {
    if (isDragging) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      moduleRef.current.scrollLeft -= dx;
      moduleRef.current.scrollTop -= dy;
      setStartX(e.clientX);
      setStartY(e.clientY);
      console.log("DRAGGING", moduleRef.current.scrollLeft, dy);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSetDebugMsg = (msg: string) => {
    setDebugLines([...debugLines, msg]);
  };

  const handleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    /**
     * Create dropdown when clicking engine module
     */
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(true);
  };

  const handleAddEngine = () => {
    /**
     * POST req to an endpoint to add new engine to database for user
     * Update a state where engines are stored to reflect real-time engine addition
     */
    handleOpenModal();
  };

  const handleSelectEngine = (index: number) => {
    setSelectedEngineIndex(index);
  };

  useEffect(() => {
    /**
     * Fetch dashboard data
     * Must fetch:
     *  # Engine Data
     * 
     */
    const fakeLoad = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fakeLoad();
  }, []);

  return (
    <div className={`${styles.edashContainer} flex w-full h-screen p-8`}>
      {
        loading ?
          <div className={`${styles.loadingWrapper} flex w-full h-full justify-center items-center`}>
            <Loading />
          </div>
          :
          <div className={`${styles.edashContainer} flex flex-col`}>
            {isModalOpen && <Modal handleCloseModal={handleCloseModal} />}
            <div className={`${styles.edashNavWrapper} flex`}>
              <a href="/" className="flex items-center px-2">
                <Image src='https://surfwaves.b-cdn.net/neillydev/vern_rounded.png' alt='' width={48} height={48} />
              </a>
              <div className={`${styles.edashNavbarWrapper} flex`}>
                <ul className={`flex`}>
                  {
                    tabs.map((tab, i) =>
                      <li className={`${styles.edashNavItem} ${selectedTabIndex === i ? styles.edashNavItemSelected : ''}`}>
                        <a href={tab.route.length > 0 ? tab.route : undefined} className={`${styles.edashNavLink}`}>
                          {tab.icon}
                        </a>
                      </li>)
                  }
                </ul>
              </div>
            </div>
            <div className={`${styles.edashWrapper} flex w-full h-full items-center`}>
              <div className={`${styles.engineModuleContainer}`}>
                <div className={`${styles.engineModuleWrapper}`}
                  ref={moduleRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onClick={(e) => handleDropdown(e)}>
                  {engines.length > 0 && selectedEngineIndex >= 0 ?
                    engines.map((engine: Engine, i: number) =>
                    (engines[selectedEngineIndex] === engine &&
                      <>
                        <EngineModule name={engine.name} subheader={engine.subheader} type={engine.type} state={engine.state} />
                      </>
                    )
                    )
                    /* selectedEngine */
                    :
                    <div className={`${styles.defaultContainer}`}>
                      {selectedEngineIndex < 0 && <p className={`${styles.defaultParagraph}`}>No Engines Selected</p>}
                    </div>
                  }
                </div>
                <div className={`${styles.controlsContainer}`}>
                  <div className={`${styles.debugContainer}`}>
                    <div className={`${styles.debugWrapper}`}>
                      {
                        debugLines.map((line: string) => <p>{line}</p>)
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.edashSidebar}`}>
                <div className={`${styles.edashSearchbar}`}>
                  <SearchSVG />
                  <input type="text" placeholder='Search Engines' className={`${styles.edashInput}`} />
                </div>
                <div className={`${styles.sidebarHeaderWrapper}`}>
                  <h2 className={`${styles.sidebarTitle}`}>Engines</h2>
                  <button className={`${styles.addEngineBtn}`} onClick={handleAddEngine}><PlusSVG /></button>
                </div>
                <div className={`${styles.sidebarListWrapper}`}>
                  <ul className={`${styles.sidebarList}`}>
                    {engines.length === 0 && <h3>No Engines Created</h3>}
                    {
                      engines.map((engine: any, i: number) =>
                        <li
                          className={`${styles.sidebarItem} ${selectedEngineIndex === i && engine.state !== EngineState.NR ? styles.sidebarItemSelected : (engine.state === EngineState.NR ? styles.engineItemNR : styles.sidebarItemUnselected)}`}
                          onClick={() => engine.state !== EngineState.NR && handleSelectEngine(i)}>
                          <span className={`${styles.sidebarItemTitle}`}>{engine.name}</span>
                          {engine.state === EngineState.NR && <Spinner scale={0.10} />}
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default EngineDash