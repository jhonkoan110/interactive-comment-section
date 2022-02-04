import { Comment, User } from '../../types/types';

export interface CommentListProps {
  user: User;
  comments: Comment[];
}
