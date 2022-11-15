import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCout] = useState(0)
  
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCout((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/marlisonmourao.png"
        hasBorder={false}
        alt=''
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marlison Mourão</strong>
              <time title="11 de novembro as 08:13" dateTime="2022-11-12 08:13:00">Cerca de 1 hora atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}