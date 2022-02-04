import { FC } from 'react';
import { Comment } from '../Comment';
import { CommentListProps } from './types';
import classes from './CommentList.module.scss';

export const CommentList: FC<CommentListProps> = ({ user, comments }) => {
  return (
    <div className={classes.container}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
