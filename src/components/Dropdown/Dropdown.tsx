import React, { useEffect, useRef, useState } from 'react';

import BranchSVG from '@/../public/icons/branch.svg';
import ChangeSVG from '@/../public/icons/change.svg';
import TrashSVG from '@/../public/icons/trash.svg';

import styles from './Dropdown.module.css';

type DropdownProps = {
    setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export enum ModuleType {
    CORE,
    OUTPUT,
};

const Dropdown = ({ setDropdownOpen }: DropdownProps) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const [type, setType] = useState<ModuleType>(ModuleType.CORE);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className={`${styles.dropdownContainer}`} ref={ref}>
            <ul className={`${styles.dropdownList}`}>
                <li className={`${styles.dropdownItem}`}>
                    <BranchSVG />
                    Create new branch
                </li>
                <li className={`${styles.dropdownItem}`}>
                    <ChangeSVG />
                    Change module type
                </li>
                <div className={`${styles.separator}`}></div>
                <li className={`${styles.dropdownItem}`}>
                    <TrashSVG />
                    {type === ModuleType.CORE ? 'Delete Engine' : 'Remove'}
                </li>
            </ul>
        </div>
    )
}

export default Dropdown