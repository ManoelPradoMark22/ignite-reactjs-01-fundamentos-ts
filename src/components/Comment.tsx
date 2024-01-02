import PropTypes from 'prop-types';

import styles from './Comment.module.css'
import { Trash } from '@phosphor-icons/react';
import { HandsClapping } from '@phosphor-icons/react';

import { Avatar } from './Avatar';
import { dates } from '../support/util/dates';
import { useState } from 'react';

export function Comment({ content, date, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleComment() {
    onDeleteComment(date)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  const {
    publishedDateFormatted,
    publishedRelativeDateToNow,
    dateTime
  } = dates(date);

  return (
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/diego3g.png"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
                <strong>Diego Fernandes</strong>
                <time title={publishedDateFormatted} dateTime={dateTime}>
                  {publishedRelativeDateToNow}
                </time>
            </div>

            <button 
              onClick={handleDeleComment}
              title='Deletar comentário'>
              
              <Trash size={24} />
            </button>
          </header>

          <div className={styles.contentDiv}>
            <p>{content}</p>
          </div>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

Comment.propTypes = {
  content: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  onDeleteComment: PropTypes.func
}