"use client";

import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import { icons } from '@/components/svgs/icons';
import SvgIcon from '@/components/SvgIcon';
import styles from './Footer.module.css';

const Footer = () => {
    const { setCreateModal } = useAppContext();

    return (
        <footer className={styles.footer}>
            <ul className={styles['footer-items']}>
                <li className={styles['footer-item']}>
                    <Link className={styles['footer-item__link']} href="/">
                        <SvgIcon
                            elements={icons.Home.elements}
                            viewBox={icons.Home.viewBox}
                        />
                        <span>Home</span>

                    </Link>
                </li>
                <li className={styles['footer-item']}>
                    <Link className={styles['footer-item__link']} href="/404">
                        <SvgIcon
                            elements={icons.Notifications.elements}
                            viewBox={icons.Notifications.viewBox}
                        />
                        <span>Notifications</span>

                    </Link>
                </li>
                <li className={styles['footer-item']}>
                    <Link className={styles['footer-item__link']} href="/debates">
                        <SvgIcon
                            elements={icons.Gauge.elements}
                            viewBox={icons.Gauge.viewBox}
                        />
                        <span>My Debates</span>

                    </Link>
                </li>
                <li className={styles['footer-item']}>
                    <button
                        onClick={() => setCreateModal()}
                        className={styles['footer-item__link']}
                    >
                        <SvgIcon
                            elements={icons.Create.elements}
                            viewBox={icons.Create.viewBox}
                        />
                        <span>Create</span>
                    </button>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;