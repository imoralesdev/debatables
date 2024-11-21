import React from 'react';
import styles from './VoteSwipe.module.css';
import { icons } from '@/components/svgs/icons';
import SvgIcon from '@/components/SvgIcon';
import VotePointerGradient from '@/components/svgs/VotePointerGradient';
import VotePointerBackGradient from '@/components/svgs/VotePointerBackGradient';

const getPercentage = (current, min, max) =>
    ((current - min) / (max - min)) * 100;

const getValue = (percentage, min, max) =>
    ((max - min) / 100) * percentage + min;

const getLeft = (percentage) => `calc(${percentage}% - 5px)`;

const getWidth = (percentage) => `${percentage}%`;

const VoteSwipe = ({
    initial,
    min = 0,
    max,
    formatFn = (number) => number.toFixed(0),
    onChange,
}) => {
    const initialPercentage = getPercentage(initial, min, max);

    const rangeRef = React.useRef();
    const rangeProgressRef = React.useRef();
    const thumbRef = React.useRef();
    const currentRef = React.useRef();

    const diff = React.useRef();

    const handleUpdate = React.useCallback(
        (value, percentage) => {
            if (thumbRef.current && rangeProgressRef.current && currentRef.current) {
                thumbRef.current.style.left = getLeft(percentage);
                rangeProgressRef.current.style.width = getWidth(percentage);
                currentRef.current.textContent = formatFn(value);
            }
        },
        [formatFn]
    );

    const handleMove = (newX, start, end) => {
        if (newX < start) newX = 0;
        if (newX > end) newX = end;

        const newPercentage = getPercentage(newX, start, end);
        const newValue = getValue(newPercentage, min, max);

        handleUpdate(newValue, newPercentage);
        onChange(newValue);
    };

    const handleMouseMove = (event) => {
        if (!rangeRef.current || !thumbRef.current) return;

        const newX =
            event.clientX -
            diff.current -
            rangeRef.current.getBoundingClientRect().left;
        const end = rangeRef.current.offsetWidth - thumbRef.current.offsetWidth;

        handleMove(newX, 0, end);
    };

    const handleTouchMove = (event) => {
        if (!rangeRef.current || !thumbRef.current) return;

        const newX =
            event.touches[0].clientX -
            diff.current -
            rangeRef.current.getBoundingClientRect().left;
        const end = rangeRef.current.offsetWidth - thumbRef.current.offsetWidth;

        handleMove(newX, 0, end);
    };

    const handleMouseUp = () => {
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
    };

    const handleTouchEnd = () => {
        document.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('touchmove', handleTouchMove);
    };

    const handleMouseDown = (event) => {
        diff.current =
            event.clientX - thumbRef.current.getBoundingClientRect().left;

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleTouchStart = (event) => {
        diff.current =
            event.touches[0].clientX - thumbRef.current.getBoundingClientRect().left;

        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
    };

    React.useEffect(() => {
        handleUpdate(initial, initialPercentage);
    }, [initial, initialPercentage, handleUpdate]);

    return (
        <div className={styles['vote-swipe']}>
            <div className={styles['vote-swipe__header']}>
                <div className={`${styles['vote-swipe__test-value']} ${styles['vote-swipe__test-value-disable']}`}>
                    <div>{formatFn(min)}</div>
                    <div>
                        <strong ref={currentRef} />
                        &nbsp;/&nbsp;
                        {formatFn(max)}
                    </div>
                </div>
                <div className={styles['vote-swipe__header-text']}>
                    <span>Swipe</span>
                </div>
            </div>
            <div className={styles['vote-swipe__range']} ref={rangeRef}>
                <span className={styles['vote-swipe__range-no']}>
                    <SvgIcon
                        elements={icons.VoteNo.elements}
                        viewBox={icons.VoteNo.viewBox}
                    />
                </span>
                <div className={styles['vote-swipe__guide-line']} ref={rangeProgressRef} />
                <div className={styles['vote-swipe__range-line']}>
                    <SvgIcon
                        elements={icons.VoteGaugeLeft.elements}
                        viewBox={icons.VoteGaugeLeft.viewBox}
                    />
                    <SvgIcon
                        elements={icons.VoteGaugeRight.elements}
                        viewBox={icons.VoteGaugeRight.viewBox}
                    />
                </div>
                <span className={styles['vote-swipe__range-yes']}>
                    <SvgIcon
                        elements={icons.VoteYes.elements}
                        viewBox={icons.VoteYes.viewBox}
                    />
                </span>
                <div
                    className={styles['vote-swipe__pointer']}
                    ref={thumbRef}
                    onTouchStart={handleTouchStart}
                    onMouseDown={handleMouseDown}
                >
                    <SvgIcon
                        elements={icons.VotePointer.elements}
                        viewBox={icons.VotePointer.viewBox}
                    />
                </div>
                <span className={styles['vote-swipe__pointer-background']}>
                    <SvgIcon
                        elements={icons.VotePointerBack.elements}
                        viewBox={icons.VotePointerBack.viewBox}
                    />
                </span>
            </div>
            <VotePointerGradient />
            <VotePointerBackGradient />
        </div>
    );
};

export default VoteSwipe;