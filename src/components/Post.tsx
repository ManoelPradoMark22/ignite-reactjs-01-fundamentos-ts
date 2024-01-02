import PropTypes from 'prop-types';

import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

import { dates } from '../support/util/dates.js';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    {
      content: 'Maravilha!!',
      date: new Date('2023-12-28 00:20')
    }
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const {
    publishedDateFormatted,
    publishedRelativeDateToNow,
    dateTime
  } = dates(publishedAt);

  function handleCreateNewComment(event) {    
    event.preventDefault();

    const newObjectComment = {
      content: newCommentText,
      date: new Date()
    }
    
    setComments([
      ...comments,
      newObjectComment]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
  }
 
  function handleNewCommentInvalid(event){
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  function deleteComment(dateCommentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment.date !== dateCommentToDelete);

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={dateTime}>
          {publishedRelativeDateToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }

          return <p key={line.content}>{line.content}</p>
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment.date}
              content={comment.content}
              date={comment.date}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}

Post.propTypes = {
  author: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }),
  content: PropTypes.array,
  publishedAt: PropTypes.instanceOf(Date),
}

