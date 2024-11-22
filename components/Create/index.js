"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';
import { icons } from '@/components/svgs/icons';
import SvgIcon from '@/components/SvgIcon';
import styles from './Create.module.css';

const Create = () => {
    const { showCreateModal, setCreateModal } = useAppContext();

    const overlayAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const modalAnimation = {
        hidden: { opacity: 0, x: '-50%', y: '-50%', scale: 0 },
        visible: { opacity: 1, x: '-50%', y: '-50%', scale: 1 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    if (!showCreateModal) return null;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayAnimation}
            className={styles['create']}
            onClick={setCreateModal}>
            <motion.div
                className={styles['create__container']}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalAnimation}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
            >
                <span className={styles['create-title']}>Create Debate</span>
                <div className={styles['create-close']} onClick={setCreateModal} aria-label="Close modal">
                    <div className={styles['create-close__container']}>
                        <div />
                    </div>
                </div>
                <div className={styles['create-header']}>
                    <div
                        className={styles['create-header__user-img']}
                        style={{
                            backgroundImage: `url("https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/DTJ.png")`,
                        }}
                    />
                    <div className={styles['create-header__user-details']}>
                        <div className={styles['create-header__user-name']}>John Doe</div>
                    </div>
                </div>
                <div className={styles['create-text']}>
                    <textarea
                        className={styles['create-text__textarea']}
                        placeholder="Your comment"
                    />
                    <div className={styles['create-text__hashtag']}># Add Hashtag</div>
                </div>
                <div className={styles['create-media']}>
                    <div className={styles['create-media']}>
                        <div className={styles['create-media__header']}>
                            <SvgIcon
                                elements={icons.Image.elements}
                                viewBox={icons.Image.viewBox}
                            />
                            <span>Add Media</span>
                        </div>
                        <div className={styles['create-media__debate-format']}>
                            <span className={styles['create-media__debate-format-title']}>
                                Select debate format
                            </span>
                            <ul className={styles['create-media__debate-format-list']}>
                                <li className={styles['create-media__debate-format-item']}>
                                    <SvgIcon
                                        elements={icons.Vote.elements}
                                        viewBox={icons.Vote.viewBox}
                                    />
                                    <span>Poll</span>
                                </li>
                                <li className={styles['create-media__debate-format-item']}>
                                    <SvgIcon
                                        elements={icons.GaugeBlue.elements}
                                        viewBox={icons.GaugeBlue.viewBox}
                                    />
                                    <span>% Meter</span>
                                </li>
                                <li className={styles['create-media__debate-format-item']}>
                                    <SvgIcon
                                        elements={icons.YesNo.elements}
                                        viewBox={icons.YesNo.viewBox}
                                    />
                                    <span>Yes or No</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Create;