import { FC } from 'react';
import classes from './Comment.module.scss';
import { CommentProps } from './types';

export const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <article className={classes.container}>
      <div className={classes.count}>Count</div>
      <div className={classes.content}>
        <header className={classes.contentHeader}>
          <div className={classes.commentInfo}>
            <img className={classes.userAvatar} src={comment.user.image.png} />
            <p className={classes.username}>{comment.user.username}</p>
            <p className={classes.createdAt}>{comment.createdAt}</p>
          </div>
          <button className={classes.replyButton}>reply</button>
        </header>
        <main className={classes.commentTextConainer}>
          <p className={classes.commentText}>{comment.content}</p>
        </main>
      </div>
    </article>
  );
};
