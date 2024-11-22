"use client";

import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import styles from './Header.module.css';
import { icons } from '@/components/svgs/icons';
import SvgIcon from '@/components/SvgIcon';

const Header = () => {
    const { setMenu } = useAppContext();

    const displayMenu = (event) => {
        setMenu();
    } 

    return (
        <header className={styles.header}>
            <div onClick={displayMenu} className={styles['header-menu']}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles['header-logo']}>
                <SvgIcon
                    elements={icons.Logo.elements}
                    viewBox={icons.Logo.viewBox}
                />
            </div>
        </header>
    )
};

export default Header;