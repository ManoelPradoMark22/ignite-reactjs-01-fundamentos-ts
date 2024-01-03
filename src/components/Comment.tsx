import styles from './Comment.module.css'
import { Trash } from '@phosphor-icons/react';
import { HandsClapping } from '@phosphor-icons/react';

import { Avatar } from './Avatar';
import { dates } from '../support/util/dates';
import { useState } from 'react';

interface CommentProps {
  content: string;
  date: Date;
  onDeleteComment: (comment: Date) => void;
}
export function Comment({ content, date, onDeleteComment }: CommentProps) {
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