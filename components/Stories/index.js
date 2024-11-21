"use client";

import styles from './Stories.module.css';

const stories = [
    {
        id: 1,
        userStorieBackground: 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/jpb.png',
        userImage: 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/fox%20business.png',
        userName: 'Fox Business'
    }, {
        id: 2,
        userStorieBackground: 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/covid.jpg',
        userImage: 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/cdc.png',
        userName: 'CDC'
    }, {
        id: 3,
        userStorieBackground: 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/trey.png',
        userImage: 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/treypro.jpg',
        userName: 'Trey Gowdy'
    }, {
        id: 4,
        userStorieBackground: 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/jpb.png',
        userImage: 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/fox%20business.png',
        userName: 'Fox Business'
    }, {
        id: 5,
        userStorieBackground: 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/covid.jpg',
        userImage: 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/cdc.png',
        userName: 'CDC'
    }, {
        id: 6,
        userStorieBackground: 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/trey.png',
        userImage: 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/treypro.jpg',
        userName: 'Trey Gowdy'
    }
];

const Stories = () => (
    <div className={styles.stories}>
        <div className={styles['stories__title']}>Stories</div>
        <div className={styles['stories__container']}>
            {stories.map((story) => (
                <div
                    key={story.id}
                    className={styles['stories__item']}
                    style={{
                        backgroundImage: `url(${story.userStorieBackground})`,
                    }}
                >
                    <div
                        className={styles['stories__user-image']}
                        style={{
                            backgroundImage: `url(${story.userImage})`,
                        }}
                    />
                    <div className={styles['stories__user-name']}>{story.userName}</div>
                </div>
            ))}
        </div>
    </div>
);

export default Stories;