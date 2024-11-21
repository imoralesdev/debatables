"use client";

import Link from 'next/link';
import styles from './Header.module.css';
import { icons } from '@/components/svgs/icons';
import SvgIcon from '@/components/SvgIcon';

const Header = () => (
    <header className={styles.header}>
        <Link href="/menu" className={styles['header-menu']}>
            <span></span>
            <span></span>
            <span></span>
        </Link>
        <div className={styles['header-logo']}>
            <SvgIcon
                elements={icons.Logo.elements}
                viewBox={icons.Logo.viewBox}
            />
        </div>
    </header>
);

export default Header;