"use client";

import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import styles from './Menu.module.css';

const Menu = () => {
    const { showMenu, setMenu } = useAppContext();

    const closeMenu = () => setMenu();

    if (!showMenu) return null;

    return (
        <div className={styles.menu}>
            <h2 className={styles['menu__title']}>Menu</h2>
            <div className={styles['user']}>
                <div className={styles['user-img']} style={{ backgroundImage: `url("https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/DTJ.png")` }} />
                <div className={styles['user-name']}>
                    <span className={styles['user-name__text']}>John Doe</span>
                    <Link href="/profile" className={styles['user-profile']} onClick={closeMenu}>
                        See you profile
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Menu;