"use client";
import React, { use, useState } from 'react';

import MagicSVG from '@/../public/magic.svg';

import styles from './Module.module.css';

const Module = () => {
    const [prompt, setPrompt] = useState("Enter a prompt");
    return (
        <div className={`${styles.moduleContainer}`}>
            <div className={`${styles.moduleWrapper}`}>
                <span className={`${styles.moduleText}`}>
                    <textarea name="prompt" id="prompt" placeholder={prompt} />
                </span>
                {/* 
                <div className={`${styles.moduleFooter} flex`}>
                    <button className={`${styles.moduleBtn} flex`}>
                        <MagicSVG />
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default Module;