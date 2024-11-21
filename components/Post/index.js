'use client';

import React, { useState, useContext } from 'react';
import styles from './Post.module.css';
import { icons } from '@/components/svgs/icons';
import SvgIcon from '@/components/SvgIcon';
import VoteSwipe from '@/components/VoteSwipe';

const comments = [{
  '_id': '9w8y12',
  'userName': 'Paul Doe',
  'userImage': 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/CO.png',
  'userComment': 'Ornare aenean euismod elementum nisi quis. Magna ac placerat vestibulum lectus mauris.',
  'userVideo': null,
  'postTime': '50 mins'
},
{
  '_id': '3ss322',
  'userName': 'Smith James',
  'userImage': 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/real%20af.jpg',
  'userComment': null,
  'userVideo': 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/video-conferencing-services-lowres-test2.jpg',
  'postTime': '45 mins'
},
{
  '_id': 'e34b12',
  'userName': 'Kera Dow',
  'userImage': 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/Candace-Owens-2018-08-07-at-3.44.40-PM.png',
  'userComment': null,
  'userVideo': ' https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/candace-owens.jpg',
  'postTime': '32 mins'
},
{
  '_id': 'g7ty42',
  'userName': 'Paul Doe',
  'userImage': 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/CO.png',
  'userComment': 'Vitae nunc sed velit dignissim sodales ut. Pellentesque habitant morbi tristique senectus et netus',
  'userVideo': null,
  'postTime': '10 mins'
}];

const Post = ({ userName, userImage, postText, postImage, postTime, postLike, postDislike, postDebate }) => {
  const [display, setDisplay] = useState(false);

  const displayComment = () => {
    setDisplay(!display);
  }

  return (
    <div className={styles.post}>
      <div className={styles['post-header']}>
        <img
          className={styles['post-header__user-image']}
          src={userImage}
          alt={`${userName}'s profile`}
        />
        <div className={styles['post-header__user-name']}>{userName}</div>
        <div className={styles['post-header__time']}>{postTime}</div>
      </div>
      <div className={styles['post-content']}>
        <p className={styles['post-content__text']}>{postText}</p>
        {postImage && (
          <div className={styles['post-content__image']}>
            <img src={postImage} alt="Description of the post image" />
          </div>
        )}
      </div>
      <ul className={`${styles['post-footer']} ${styles['post-footer__items']}`}>
        <li className={styles['post-footer__item']}>
          <SvgIcon
            elements={icons.Like.elements}
            viewBox={icons.Like.viewBox}
            style={{ top: '-5px' }}
          />
          <span style={{ color: '#0F0C89' }}>{postLike}</span>
        </li>
        <li className={styles['post-footer__item']}>
          <SvgIcon
            elements={icons.Dislike.elements}
            viewBox={icons.Dislike.viewBox}
            style={{ top: '-2px' }}
          />
          <span style={{ color: '#0F0C89' }}>{postDislike}</span>
        </li>
        <li className={styles['post-footer__item']}>
          <SvgIcon
            elements={icons.DebateVideo.elements}
            viewBox={icons.DebateVideo.viewBox}
            style={{ top: '-2px' }}
          />
          <span style={{ color: '#FF0C00' }}>{postDebate}</span>
        </li>
      </ul>
      <ul className={styles['post-toolbar']}>
        <li className={styles['post-toolbar__item']}>
          <SvgIcon
            elements={icons.GaugeBlue.elements}
            viewBox={icons.GaugeBlue.viewBox}
          />
          <span>Comment</span>
        </li>
        <li className={styles['post-toolbar__item']} onClick={displayComment}>
          <SvgIcon
            elements={icons.Comment.elements}
            viewBox={icons.Comment.viewBox}
          />
          <span>Comment</span>
        </li>
      </ul>
      <div className={styles['post-comments']} style={display ? { display: 'block' } : { display: 'none' }}>
        {
          comments.map((comment) => {
            return (
              <div className={styles['post-comment']} key={comment._id}>
                <div className={styles['post-comment__user-img']} style={{ backgroundImage: `url('${comment.userImage}')` }} />
                <div className={styles['post-comment__content']}>
                  <h3 className={styles['post-comment__user-name']}>{comment.userName}</h3>
                  {
                    comment.userComment != null
                      ? (<p className={styles['post-comment__text']}>{comment.userComment}</p>)
                      : ''
                  }
                  {
                    comment.userVideo != null
                      ? (<div className={styles['post-comment__video']}>
                        <img src={comment.userVideo} />
                      </div>)
                      : ''
                  }
                  <div className={styles['post-comment__tools']}>
                    <ul>
                      <li>{comment.postTime}</li>
                      <li>Like</li>
                      <li>Reply</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <VoteSwipe
        initial={.5}
        min={0}
        max={1}
        formatFn={number => number.toFixed(2)}
        onChange={value => console.log(value)} />
    </div>
  );
};

export default Post;